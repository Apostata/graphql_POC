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

    const execGraphqlQuery = async(type, queryString) =>{
        const query = JSON.stringify({
            query: queryString,
        });
        
        axiosGraphQlConfig.data = query
        try{
            const res = await axios(axiosGraphQlConfig)
            if(type === 'add'){
                const {data:{data:{addMovie}}} = res
                setMovies([...movies, addMovie])
            } else{
                const {data:{data:{movies}}} = res
                setMovies(movies)
            }
            
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
        execGraphqlQuery('get', queryString)
    }

    const addMovie = async({name, genre, year})=>{
        const queryString = ` mutation {
            addMovie(name: "${name}", genre: "${genre}", year: "${year}"){
                name,
                genre,
                year
            }
        }`
        execGraphqlQuery('add', queryString)
    }

    return{
        movies,
        getMovies,
        addMovie
    }
}