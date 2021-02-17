import React from 'react'
import Movie from '../components/Movie/Movie'
import image from '../assets/jhon_wik_parabellum.jpg'
import {useQuery} from '@apollo/client' 
import { allMovies } from '../hooks/apolloQueries'

const Movies = (props) => {
    const { data } = useQuery(allMovies);
    const [movies, setMovies] = React.useState([])
    
    React.useEffect(()=>{
        if(data){
            setMovies(data.movies)
        }
    },[data])

    return (
        <div>
            {movies.length> 0 ? movies.map((movie, idx)=>{
                const {name, genre, year} = movie
                return(
                    <Movie 
                        key={`${name}-${idx}`}
                        name={name}
                        genre={genre}
                        year={year}
                        image={image}
                    />
                )
            }
            ):
            <h2>No movies to Display! Please add some movies!</h2>
            }
        </div>
    )
}

export default Movies
