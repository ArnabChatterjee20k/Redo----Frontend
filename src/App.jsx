import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login/Login'
import SignIn from './components/SignIn/SignIn'
import ForgotPass from './components/Forgot password/ForgotPass'

function App() {

  return (
    <div className='bg-black h-[100vh] w-[100vw] py-5'>
      {/* <Login/> */}
    <SignIn/>
    {/* <ForgotPass/> */}
    </div>
  )
}

export default App
