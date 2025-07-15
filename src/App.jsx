import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Books from './Books/Books'
import Signup from './components/Signup'
import { Contact } from './components/Contact'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'


const App = () => {
  
  const[authUser,setAuthUser]=useAuth();
  console.log(authUser);

  return (
    <>
      <div className='dark:bg-slate-900'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Books' element={authUser?<Books />:<Navigate to='/signup'/>} />
          <Route path='/signUp' element={<Signup />} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
