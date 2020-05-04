//API responsável pelos dados do corona virus
const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

/**
 * retorna o total de casos por país informado.
 * @param {*} country 
 */
function getCountry(country){
    return fetch(`${path}/${country}`,headers)
        .then((response) => response.json())
}

export default {
    getCountry
}