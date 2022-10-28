const RESOURECE_PATH = "/adventures"

const viewController = {
    // index,
    index(req, res, next){
        res.render('adventures/Index', res.locals.data)
    },
    newView(req, res, next){
        res.render('adventures/New', res.locals.data)
    },
    // edit,
    // show,
    show(req, res, next){
        res.render('adventures/Show', res.locals.data)
    },
    // redirectHome,
    redirectHome(req , res, next){
        res.redirect(RESOURECE_PATH)
    },
    // redirectShow
    redirectShow(req, res, next){
        const bookId = req.params.id || res.locals.data.book._id
        res.redirect(`${RESOURECE_PATH}/${bookId}`)
    }
}

module.exports = viewController