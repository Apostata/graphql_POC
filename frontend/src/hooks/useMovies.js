import React from 'react'
import axios from 'axios'

export const useMovies = () =>{
    const [movies, setMovies] = React.useState([])

    const getMovies = async ()=>{
        const graphQlQuery = JSON.stringify({
            query:`{
                movies:{
                    name,
                    genre,
                    year
                }
            }`
        })

        var config = {
            method: 'get',
            url: 'http://localhost:4000/graphql',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : graphQlQuery
        };

        const res = await axios.get(config)
        console.log(JSON.stringify(res.data))
        setMovies(JSON.stringify(res.data))
    }

    return{
        movies,
        getMovies
    }
}