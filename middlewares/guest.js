export const guest = (req, res, next) => {
    if (!req.user) {
        return next()
    }
    res.redirect('/')
}