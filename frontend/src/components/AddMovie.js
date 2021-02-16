import React from 'react'

function AddMovie() {
    return (
        <div className="addMovie">
            <form onSubmit={(e)=>{
                e.preventDefault()
                console.log("Movie Added")
            }}>
                <label>Name</label>
                <input type="text" required/>
                <label>Genre</label>
                <input type="text" required/>
                <label>Year</label>
                <input type="text" placeholder="(optional)"/>
                <button type="submit">Add Movie</button>
            </form>    
        </div>
    )
}

export default AddMovie
