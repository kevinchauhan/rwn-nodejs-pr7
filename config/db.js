import mongoose from 'mongoose'
const url = 'mongodb+srv://kevinchauhan:jNcRzBUflOzuHsgq@cluster0.ngoyxsf.mongodb.net/blogs?retryWrites=true&w=majority&appName=Cluster0'

export const connectDb = async () => {
    try {
        await mongoose.connect(url)
        console.log('db connection successfull...')
    } catch (error) {
        console.log(error)
    }
}
