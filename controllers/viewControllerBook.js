const RESOURECE_PATH = "/adventures"

const viewControllerBook = {
    // index,
    index(req, res, next){
        res.render('books/Index', res.locals.data)
    },
    newView(req, res, next){
        res.render('books/New', res.locals.data)
    },
    // edit,
    edit(req, res, next){
        res.render('books/Edit', res.locals.data)
        // console.log(res.locals.data + "view controller data")
    },
    // show,
    show(req, res, next){
        res.render('books/Show', res.locals.data)
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

module.exports = viewControllerBook