import fs from 'fs'
import movieModel from "../models/blogModel.js"
import { validationResult } from 'express-validator'
import blogModel from '../models/blogModel.js'
import moment from 'moment'

export class BlogController {
    async add(req, res) {
        try {
            const data = {
                ...req.body,
                image: req.file.filename
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

            const blogs = await blogModel.find()
            res.render('pages/index', { blogs,moment })
        } catch (error) {
            console.log(error)
        }

    }

}