import express from 'express'
import { BlogController } from '../controllers/BlogController.js'
import { upload } from '../middlewares/multerService.js'
import registerValidator from '../validators/registerValidator.js'

const router = express.Router()

const blogController = new BlogController()

router.get('/', blogController.get)
router.post('/add',upload,blogController.add)
router.get('/login', (req,res)=>res.render('pages/login'))
router.get('/signup', (req,res)=>res.render('pages/signup'))

export default router