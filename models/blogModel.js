import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    title: String,
    description: String,
    image:String,
    username:{
        type:String,
        default:'Kevin'
    }
}, { timestamps: true })

export default mongoose.model('blogs', blogSchema)