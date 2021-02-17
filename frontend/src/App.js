import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Movies from './pages/Movies'
import AddMovie from './components/AddMovie'
import {useMovies} from './hooks/useMovies'

function App() {
  const {movies, getMovies, addMovie} = useMovies()
  return (
    <div>
      <Header />
      <Movies movies={movies} getMovies={getMovies} />
      <AddMovie addMovie={addMovie}/>
      <Footer />
    </div>
  )
}

export default App
