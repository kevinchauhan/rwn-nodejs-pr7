import blogModel from '../models/blogModel.js'
import moment from 'moment'
import userModel from '../models/userModel.js'

export class BlogController {
    async add(req, res) {
        try {
            let user
            if (req.cookies.user) {
                user = await userModel.findById(req.cookies.kc_blog)
            }
            const data = {
                ...req.body,
                image: req.file.filename,
                username: user.name
            }
            const blog = blogModel(data)
            await blog.save()
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }

    }

    async get(req, res) {
        try {
            let user = ''
            if (req.cookies.kc_blog) {
                user = await userModel.findById(req.cookies.kc_blog)
            }
            const blogs = await blogModel.find().sort({ createdAt: -1 })
            res.render('pages/index', { blogs, moment, user })
        } catch (error) {
            console.log(error)
        }

    }

}