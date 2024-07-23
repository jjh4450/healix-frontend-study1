import { useState } from 'react'
import Header from '../../widgets/Header'
import Home from '../../widgets/Home'
import About from '../../widgets/About'
import Price from '../../widgets/Price'
import Footer from '../../widgets/Footer'
import { Route,Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Price' element={<Price/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App