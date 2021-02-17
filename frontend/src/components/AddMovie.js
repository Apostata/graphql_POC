import React from 'react'
import { useMutation } from '@apollo/client' 
import { allMovies, addMovieMutation } from '../hooks/apolloQueries'


function AddMovie() {
    const nameRef = React.useRef('') 
    const genreRef = React.useRef('') 
    const yearRef = React.useRef('') 
    const [addMovie] = useMutation(addMovieMutation);

    return (
        <div className="addMovie">
            <form onSubmit={(e)=>{
                e.preventDefault()
                const name = nameRef.current.value; 
                const genre = genreRef.current.value
                const year = yearRef.current.value || String(new Date().getFullYear())
                addMovie({ 
                    variables: { name, genre, year },
                    refetchQueries:[{query: allMovies}]
                })
                console.log("Movie Added")
            }}>
                <label>Name</label>
                <input type="text" ref={nameRef} required/>
                <label>Genre</label>
                <input type="text" ref={genreRef} required/>
                <label>Year</label>
                <input type="text" ref={yearRef} placeholder="(optional)"/>
                <button type="submit">Add Movie</button>
            </form>    
        </div>
    )
}

export default AddMovie
