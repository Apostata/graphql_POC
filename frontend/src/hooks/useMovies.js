import React from 'react'
import axios from 'axios'

export const useMovies = () =>{
    const [movies, setMovies] = React.useState([])

    const getMovies = async (args=['name', 'genre', 'year']) =>{
        const queryString = `{
            movies{
                ${args.map((arg)=>arg).join(', ')}
            }
        }`
        
        try{
            const res = await axios.get(`http://localhost:4000/graphql?query=${queryString}`)
            const {data:{data:{movies}}} = res
            setMovies(movies)
            
        } catch(e){
            console.warn(e)
        }
    }

    const addMovie = async({name, genre, year})=>{
        const queryString = ` mutation {
            addMovie(name: "${name}", genre: "${genre}", year: "${year}"){
                name,
                genre,
                year
            }
        }`
        try{
            const res = await axios.post(`http://localhost:4000/graphql`, {query:queryString})
            const {data:{data:{addMovie}}} = res
            setMovies([...movies, addMovie])            
        } catch(e){
            console.warn(e)
        }
    }

    return{
        movies,
        getMovies,
        addMovie
    }
}