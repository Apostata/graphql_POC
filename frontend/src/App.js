import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Movies from './pages/Movies'
import AddMovie from './components/AddMovie'

function App() {
  return (
    <div>
      <Header />
      <Movies />
      <AddMovie />
      <Footer />
    </div>
  )
}

export default App
