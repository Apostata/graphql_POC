import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
// import Movies from './pages/Movies'
import MoviesApollo from './pages/Movies_apollo'
// import AddMovie from './components/AddMovie'
import AddMovieApollo from './components/AddMovie_apollo'
// import {useMovies} from './hooks/useMovies'

function App() {
  // const {movies, getMovies, addMovie} = useMovies()
  return (
    <div>
      <Header />
      {/* <Movies movies={movies} getMovies={getMovies} /> */}
      <MoviesApollo />
      {/* <AddMovie addMovie={addMovie}/> */}
      <AddMovieApollo />
      <Footer />
    </div>
  )
}

export default App
