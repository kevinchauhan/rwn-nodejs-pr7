import express from 'express'
import cookieParser from 'cookie-parser'
import router from './routes/routes.js'
import { connectDb } from './config/db.js'

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

// router
app.use(router)

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})
