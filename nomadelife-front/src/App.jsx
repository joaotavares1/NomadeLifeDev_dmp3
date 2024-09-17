import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CreatePost from './pages/CreatPost/CreatePost'

function App() {
  return (
    <>
      <NavBar />
      <CreatePost />
      <Footer />

    </>
  )
}

export default App
