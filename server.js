import express from 'express'
import router from './routes/routes.js'
import { connectDb } from './config/db.js'

const app = express()
const PORT = 5501

connectDb()

// set static folder
app.use(express.static('uploads'))

// set template engine
app.set('view engine', 'ejs')

app.use(router)

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})
app.listen(PORT,'192.168.1.9', () => {
    console.log(`server running on http://192.168.1.9:${PORT}`)
})

// moment(order.createdAt).format('hh:mm A')

