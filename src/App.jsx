import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login/Login'
import SignIn from './components/SignIn/SignIn'
import MyMap from './components/map/mapBox'
import Match from './components/match/matching'

import ForgotPass from './components/Forgot password/ForgotPass'

function App() {

  return (
    <div>
      {/* <Login/> */}
    {/* <SignIn/> */}
    <MyMap/>
    <Match/>
    {/* <ForgotPass/> */}
    </div>
  )
}

export default App
