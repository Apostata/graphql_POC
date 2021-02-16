import React from 'react'

function Header() {
    return (
        <div className="topnav">
            <a className="logo" href="/">Movie Maker</a>
            <div className="search-container">
                <form>
                    <a href="/">Add Movies</a>
                    <input  type="text" placeholder="search..." name="search" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
        </div>
    )
}

export default Header
