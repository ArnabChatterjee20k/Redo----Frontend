import React from 'react'
import loginimg from '../../assets/login.png'

const GetStarted = () => {
  return (
    <div className="bg-[#fff] lg:w-[25vw] xl:w-[25vw] md:w-[100vw] w-[100vw] mx-auto h-full flex flex-col justify-between">
      <img src={loginimg} alt="img" className="w-[100%] h-[90%] mx-auto" />
      <h1 className='text-4xl font-bold'>Find your <span className=''>Tribe</span></h1>
      <button className='px-6 py-1 mx-auto bg-[#7C50FF] text-3xl'>Get Started</button>
    </div>
  )
}

export default GetStarted