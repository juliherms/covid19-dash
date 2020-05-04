import React, { memo, useState, useEffect, useCallback } from 'react'
import Api from '../../api'


//Pagina responsável pelo conteúdo.
function Main() {

    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
        .then(data => console.log(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    return (
        <div>
            Teste
        </div>
    )

}

export default memo(Main)