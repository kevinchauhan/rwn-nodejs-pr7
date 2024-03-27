import express from 'express'
import cookieParser from 'cookie-parser'
import router from './routes/routes.js'
import { connectDb } from './config/db.js'
import session from 'express-session'
import passport from 'passport'
import LocalStrategy from 'passport-local'
import userModel from './models/userModel.js'

const app = express()
const PORT = 5000

connectDb()

// set parser
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// set static folder
app.use(express.static('uploads'))

// set template engine
app.set('view engine', 'ejs')

// middlewares
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy({ usernameField: 'email' },
    async function (username, password, done) {
        const user = await userModel.findOne({ email: username, password })
        if (!user) {
            return done(null, false)
        }
        return done(null, user)
    }
));


passport.serializeUser(function (user, cb) {
    cb(null, { id: user._id })
})

passport.deserializeUser(async (user, cb) => {
    const userData = await userModel.findById(user.id)
    return cb(null, userData)
})

// router
app.use(router)

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})
