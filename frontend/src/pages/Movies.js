import React from 'react'
import Movie from '../components/Movie/Movie'
import image from '../assets/jhon_wik_parabellum.jpg'
const Movies = () => {
    const [movies, setMovies] = React.useState([
        { id:1, name: "John Wick Parabellum", genre:"Action", year:2019, image },
        { id:2, name: "John Wick Parabellum", genre:"Action", year:2019, image },
        { id:3, name: "John Wick Parabellum", genre:"Action", year:2019, image },
        { id:4, name: "John Wick Parabellum", genre:"Action", year:2019, image },
        { id:5, name: "John Wick Parabellum", genre:"Action", year:2019, image },
        { id:6, name: "John Wick Parabellum", genre:"Action", year:2019, image },
        { id:7, name: "John Wick Parabellum", genre:"Action", year:2019, image },
        { id:8, name: "John Wick Parabellum", genre:"Action", year:2019, image },
        { id:9, name: "John Wick Parabellum", genre:"Action", year:2019, image },
        { id:10, name: "John Wick Parabellum", genre:"Action", year:2019, image },
    ])
    return (
        <div>
            {movies.map(movie=>{
                const {id, name, genre, year, image} = movie
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
