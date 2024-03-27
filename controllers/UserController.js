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

    logout(req, res) {
        req.logout(() => {
            res.redirect('/');
        })
    }
}