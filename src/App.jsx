import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link, NavLink, Navigate, useNavigate, useLocation, useParams, useSearchParams, useOutlet } from  'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import store from './redux/Store'

function App() {
  return (
    <>   
     <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App