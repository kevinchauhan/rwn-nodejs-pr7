export const authenticate = (req, res, next) => {
    if (req.cookies.user) {
        return next()
    }
    res.redirect('/')
}