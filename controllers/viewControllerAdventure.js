const RESOURECE_PATH = "/adventures"

const viewControllerAdventures = {
    newView(req, res, next){
        res.render('books/New', res.locals.data)
    },
    // edit,
    edit(req, res, next){
        res.render('adventures/Edit', res.locals.data)
    },
    // show,
    show(req, res, next){
        res.render('adventures/Show', res.locals.data)
    },
    // redirectShow
    redirectShow(req, res, next){
        const bookId = req.params.id || res.locals.data._id
        res.redirect(`${RESOURECE_PATH}/${bookId}`)
    }
}

module.exports = viewControllerAdventures