let myFavorites = []

const postFav = (request, respuesta) => {

    myFavorites.push(request.body)

    return respuesta.status(200).json(myFavorites)

}

const deleteFav = (request, respuesta) => {

    const {id} = request.params;

    myFavorites = myFavorites.filter((x) => x.id !== id)

    return respuesta.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
};
