const {getCharById} = require('../controllers/getCharById')
const {login} = require('../controllers/login')
const {postFav, deleteFav} = require('../controllers/handleFavorites')
const router = require('express').Router();



router.get("/character/:id", (request, respuesta) =>{

    getCharById(request,respuesta)
})

router.get("/login", (request, respuesta) =>{

    login(request,respuesta)
})

router.post("/fav", (request, respuesta) =>{

    postFav(request,respuesta)
})

router.delete("/fav/:id", (request, respuesta) =>{

    deleteFav(request,respuesta)
})

module.exports = router



