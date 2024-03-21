export const authenticate = (req, res, next) => {
    if (req.cookies.kc_blog) {
        return next()
    }
    res.redirect('/')
}