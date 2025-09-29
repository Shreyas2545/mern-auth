import React from 'react'
import Signup from './signup'  
import Login from './Login'
import Home from './Home'
import {Routes , Route , BrowserRouter ,Link } from "react-router-dom" 
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route 
          path='/' 
          element={
            <div className="flex min-h-screen items-center justify-center text-center">
              <p className="text-5xl text-gray-700">
                Welcome! Please <Link to="/register" className="text-indigo-600 font-semibold hover:text-indigo-500">register</Link> to continue.
              </p>
            </div>
          } 
        />
    <Route path='/register' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
