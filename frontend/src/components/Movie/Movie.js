import React from 'react'

function Movie({name, genre, year, image}) {
    return (
        <div className="card">
            <div className="container">
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <h4>{genre} - {year}</h4>
            </div>
        </div>
    )
}

export default Movie
