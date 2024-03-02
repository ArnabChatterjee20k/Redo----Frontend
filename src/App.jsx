import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login/Login'
import SignIn from './components/SignIn/SignIn'
import MyMap from './components/map/mapBox'
import Match from './components/match/matching'
import PersonalityTest from './components/personality_test/personality'

import ForgotPass from './components/Forgot password/ForgotPass'

function App() {
  const [personalityCategory, setPersonalityCategory] = useState(null);

  const handlePersonalityTestComplete = (personality) => {
    // Handle personality category
    setPersonalityCategory(personality);
  };

  return (
    <div>
      {/* <Login/> */}
    {/* <SignIn/> */}
    {/* <MyMap/> */}
    {/* <Match/> */}
    <PersonalityTest/>
    <div>
      {!personalityCategory ? (
        <PersonalityTest onComplete={handlePersonalityTestComplete} />
      ) : (
        <div>
          <h2>Your Personality Category: {personalityCategory}</h2>
          {/* Display other components based on personality category */}
        </div>
      )}
    </div>
    {/* <ForgotPass/> */}
    </div>
  )
}

export default App
