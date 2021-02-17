import React from 'react'
import Movie from '../components/Movie/Movie'
import image from '../assets/jhon_wik_parabellum.jpg'
import {useMovies} from '../hooks/useMovies';

const Movies = () => {
    const {movies, getMovies} = useMovies()

    React.useEffect(()=>{
        getMovies()
    },[])
    
    return (
        <div>
            {movies.length>0 && movies.map(movie=>{
                const {id, name, genre, year} = movie
                return(
                    <Movie 
                        key={id}
                        name={name}
                        genre={genre}
                        year={year}
                        image={image}
                    />
                )
            }
            )}
        </div>
    )
}

export default Movies
