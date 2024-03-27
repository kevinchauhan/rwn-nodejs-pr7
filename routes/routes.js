import express from 'express'
import { BlogController } from '../controllers/BlogController.js'
import { upload } from '../middlewares/multerService.js'
import registerValidator from '../validators/registerValidator.js'
import { UserController } from '../controllers/UserController.js'
import { guest } from '../middlewares/guest.js'
import { authenticate } from '../middlewares/authenticate.js'
import passport from 'passport'

const router = express.Router()

const blogController = new BlogController()
const userController = new UserController()

// blogs
router.get('/', blogController.get)
router.post('/blog/add', authenticate, upload, blogController.add)

// user
router.post('/user/signup', userController.create)
router.post('/user/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
}))
router.get('/user/logout', userController.logout)

// pages
router.get('/login', guest, (req, res) => res.render('pages/login', { error: '', user: '' }))
router.get('/signup', guest, (req, res) => res.render('pages/signup', { error: '', user: '' }))

export default router