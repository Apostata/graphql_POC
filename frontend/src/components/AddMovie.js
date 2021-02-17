import React from 'react'

function AddMovie({addMovie}) {
    const nameRef = React.useRef('') 
    const genreRef = React.useRef('') 
    const yearRef = React.useRef('') 

    return (
        <div className="addMovie">
            <form onSubmit={(e)=>{
                e.preventDefault()
                const name = nameRef.current.value; 
                const genre = genreRef.current.value
                const year = yearRef.current.value || new Date().getFullYear()
                console.log({name, genre, year})
                addMovie({name, genre, year})
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
