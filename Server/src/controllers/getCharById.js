const axios = require('axios')
const URL = `https://rickandmortyapi.com/api/character/`

const getCharById = (request,respuesta) => {
    const {id} = request.params;
    
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then(({name,image,gender,species,origin,status}) =>{
        if(name){
            const character = {
                id: id,
                name,
                image,
                gender,
                species,
                origin,
                status
            }

        return respuesta.status(200).json(character)
        }
        return respuesta.status(404).send('Not found')
    })
    .catch((error) => respuesta.status(500).send(error.message))

}

module.exports = {getCharById}
