export const authenticate = (req, res, next) => {
    if (req.user) {
        return next()
    }
    res.redirect('/')
}