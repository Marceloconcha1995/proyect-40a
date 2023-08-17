const users = require('../utils/users')

const login = (request, respuesta) => {

    const {email, password} = request.query;
    
    const userFind = users.find((user) => user.email === email && user.password === password)

    userFind 
   ? respuesta.status(200).json({access: true})
   : respuesta.status(400).json({access: false})

};

module.exports = {login}