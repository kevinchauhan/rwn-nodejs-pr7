import { checkSchema } from "express-validator";

export default checkSchema({
    title: {
        errorMessage: 'title is required',
        trim: true,
        notEmpty: true
    },
    description: {
        errorMessage: 'description is required',
        trim: true,
        notEmpty: true
    }
})