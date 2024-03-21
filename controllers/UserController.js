import userModel from "../models/userModel.js"

export class UserController {
    async create(req, res) {
        try {
            const { email, password, name } = req.body
            const user = await userModel.findOne({ email })
            if (user) {
                return res.render('pages/signup', { error: 'user already exists', user: req.body })
            }
            const newUser = await userModel({ email, password, name })
            await newUser.save()
            return res.redirect('/login')

        } catch (error) {
            console.log(error)
        }
    }
    async login(req, res) {
        try {
            const { email, password } = req.body
            const user = await userModel.findOne({ email, password })
            if (!user) {
                return res.render('pages/login', { error: 'Email or password is invalid', user: req.body })
            }

            res.cookie('kc_blog', user.id, {
                domain: 'localhost',
                sameSite: 'strict',
                maxAge: 1000 * 60 * 60, // 1hr
                httpOnly: true //very important
            })

            return res.redirect('/')

        } catch (error) {
            console.log(error)
        }
    }
    logout(req, res) {
        res.clearCookie('kc_blog')
        res.redirect('/')
    }
}