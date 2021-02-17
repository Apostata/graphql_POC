import React from 'react'
import axios from 'axios'

const axiosGraphQlConfig = {
    method: 'post',
    url: 'http://localhost:4000/graphql',
    headers: { 
        'Content-Type': 'application/json'
    }
};

export const useMovies = () =>{
    const [movies, setMovies] = React.useState([])

    const execGraphqlQuery = async(queryString) =>{
        const query = JSON.stringify({
            query: queryString,
        });
        
        axiosGraphQlConfig.data = query
        try{
            const res = await axios(axiosGraphQlConfig)
            const {data:{data:{movies}}} = res
            setMovies(movies)
            
        } catch(e){
            console.warn(e)
        }
    }

    const getMovies = async (args=['name', 'genre', 'year']) =>{
        const queryString = `{
            movies{
                ${args.map((arg)=>arg).join(', ')}
            }
        }`
        execGraphqlQuery(queryString)
    }

    const addMovie = async({name, genre, year})=>{
        const queryString = ` mutation {
            addMovie(name: "${name}", genre: "${genre}", year: "${year}"){
                name,
                genre,
                year
            }
        }`
        console.log()
        execGraphqlQuery(queryString)
    }

    return{
        movies,
        getMovies,
        addMovie
    }
}