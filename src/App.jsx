
import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login/Login'
import SignIn from './components/SignIn/SignIn'
import ForgotPass from './components/Forgot password/ForgotPass'
import DownNavBar from './components/DownNavBar/DownNavBar'
import MapComponents from './components/map components/MapComponents'
import GetStarted from './components/Get Started/GetStarted'
import { UploadImage } from './components/UploadImage/UploadImage'
import MyMobile from './components/MyMobile/MyMobile'
import Profile from './components/Profile/Profile'
import InterestSwipe from './components/InterestSwipe/InterestSwipe'

function App() {
  return (
    <div className='bg-black h-[100vh] w-[100vw] xl:py-5 lg:py-5 md:py-0 py-0 overflow-x-hidden' style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* <Login/> */}
    {/* <SignIn/> */}
    {/* <MapComponents/> */}
    {/* <DownNavBar/> */}
    {/* <ForgotPass/> */}
    {/* <GetStarted/> */}
    {/* <UploadImage/> */}
    {/* <MyMobile/> */}
    {/* <Profile/> */}
    <InterestSwipe/>
    </div>
  );
}

export default App;
