import React, { useState } from 'react'
import batman from '../../assets/batman.png'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SignIn = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [date,setDate] = useState('');
    const [pass,setPass] = useState('');
    const [conPass,setConPass] = useState('');
    const signinHandler = (e) =>{
        e.preventDefault();
        console.log("firstName : ", firstName);
        console.log("lastName : ", lastName);
        console.log("date : ", date);
        console.log("pass : ", pass);
        console.log("conPass : ", conPass);
    }
  return (
    <div className=" lg:w-[25vw] xl:w-[25vw] md:w-[100vw] w-[100vw] mx-auto h-full flex flex-col justify-between bg-[#3586FF]">
    <img src={batman} alt="img" className="w-[70%] mx-auto h-[50%]" />
    <div className="flex flex-col px-8 pt-6 gap-2 rounded-t-3xl h-full bg-white ">
      <div className="w-full">
      <h1 className="text-3xl font-bold w-full text-center">Sign In</h1>
        <form onSubmit={signinHandler} className="flex flex-col justify-start items-start gap-3">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="first" className="text-black/60 text-xs">First Name</label>
              <input onChange={(e)=>setFirstName(e.target.value)} type="text" id="first" className="w-full py-[1px] px-1 border-[1px] rounded border-black" placeholder='enter your first name'/>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="last" className="text-black/60 text-xs">Last Name</label>
              <input onChange={(e)=>setLastName(e.target.value)} type="text" id="last" className="w-full py-[1px] px-1 border-[1px] rounded border-black" placeholder='enter your last name'/>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="dob" className="text-black/60 text-xs">Date of Birth</label>
              <input onChange={(e)=>setDate(e.target.value)} type="date" id="dob" className="w-full py-[1px] px-1 border-[1px] rounded border-black" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="pass" className="text-black/60 text-xs">Password</label>
              <input onChange={(e)=>setPass(e.target.value)} type="text" id="pass" className="w-full py-[1px] px-1 border-[1px] rounded border-black" placeholder='enter your password'/>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="conpass" className="text-black/60 text-xs">Confirm Password</label>
              <input onChange={(e)=>setConPass(e.target.value)} id="conpass" type="password" className="w-full py-[1px] px-1 border-[1px] rounded border-black" placeholder='confirm your password'/>
            </div>
          </div>
          <button type='submit' className="w-full bg-[#7C50FF] py-1 rounded font-semibold text-white">Signin</button>
        </form>
      </div>
      <div className="w-full flex flex-col gap-2">
        <h1 className="w-full text-center text-black/60">Login with social accounts</h1>
        <div className="flex justify-center items-center gap-12">
          <FaGoogle />
          <FaTwitter />
          <FaGithub />
        </div>
      </div>
      <div  className="w-full text-center text-black/60">Already have an account? <span className="text-blue-400">Login</span></div>
    </div>
  </div>
  )
}

export default SignIn