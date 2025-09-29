import React from 'react'
import Signup from './signup'  
import Login from './Login'
import Home from './Home'
import {Routes , Route , BrowserRouter ,Link } from "react-router-dom" 
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/register' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
