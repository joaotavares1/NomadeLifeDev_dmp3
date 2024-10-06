import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CreatePost from './pages/CreatePost/CreatePost'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import { useState } from 'react'

function App() {
<<<<<<< HEAD


=======
>>>>>>> 4f60d93407daf47d9191db4437a782aef5dbd9d7
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
