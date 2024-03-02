import React from 'react'

const ForgotPass = () => {
  return (
    <div className=" w-[25vw] mx-auto h-full  px-8 pt flex flex-col pt-10 bg-[#fff]">
        <h1 className=' w-full text-center font-bold text-3xl'>Forgot Password</h1>
        <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email" className="text-black/60 text-sm">Date of Birth</label>
              <input type="email" id="email" className="w-full py-[1px] px-1 border-[1px] rounded border-black" placeholder='enter your email'/>
        </div>
        <button className="w-full mt-2 bg-[#000] py-1 rounded font-semibold text-white">Send Email</button>
        <div  className="w-full text-center mt-2 text-black/60">Don't have an account? <span className="text-blue-400">Sign up now</span></div>

    </div>
  )
}

export default ForgotPass