import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import './app.css';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      {/* <div>
        <video autoPlay loop muted className="background-video">
          <source src="src/assets/encryption.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <Routes>
      <Route path= '/' element={<Home/>} /> 
      <Route path= '/coin/:coinId' element={<Coin/>} /> 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
