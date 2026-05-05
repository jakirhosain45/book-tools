
import { useState } from 'react'
import './App.css'
import AllTools from './components/AllTools'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

function App() {
  const [carts,setcarts] =useState([])
  return (
    <div>
      <Navbar carts={carts}/>
      <Banner/>
      <AllTools carts={carts} setcarts={setcarts}/>
      <Toaster></Toaster>
      <Footer></Footer>
    </div>
  )
}

export default App
