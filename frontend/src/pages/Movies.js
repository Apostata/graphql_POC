import React from 'react'
import Movie from '../components/Movie/Movie'
import image from '../assets/jhon_wik_parabellum.jpg'

const Movies = ({movies, getMovies}) => {
    
    React.useEffect(()=>{
        getMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return (
        <div>
            {movies && movies.length> 0 ? movies.map((movie, idx)=>{
                const { name, genre, year} = movie
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
