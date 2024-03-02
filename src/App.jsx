import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login/Login'
import SignIn from './components/SignIn/SignIn'
import ForgotPass from './components/Forgot password/ForgotPass'
import DownNavBar from './components/DownNavBar/DownNavBar'
import MapComponents from './components/map components/MapComponents'
import GetStarted from './components/Get Started/GetStarted'

function App() {

  return (
    <div className='bg-black h-[100vh] w-[100vw] xl:py-5 lg:py-5 md:py-0 py-0'>
      <Login/>
    {/* <SignIn/> */}
    {/* <MapComponents/> */}
    {/* <DownNavBar/> */}
    {/* <ForgotPass/> */}
    {/* <GetStarted/> */}
    </div>
  )
}

export default App
