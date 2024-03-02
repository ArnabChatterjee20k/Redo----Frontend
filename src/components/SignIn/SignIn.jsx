import React, { useState } from 'react'
import batman from '../../assets/batman.png'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import heart1 from '../../assets/heart 4.png'
import heart3 from '../../assets/heart 5.png'
import heart2 from '../../assets/heart 6.png'
import bgImag from '../../assets/Oval Copy 2.png'
import axios from 'axios';


const SignIn = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [dob,setDate] = useState('');
    const [password,setPass] = useState('');
    const [confirmPassword,setConPass] = useState('');
    const [email,setEmail] = useState('');
    const [username,setUserName] = useState('');
    const signinHandler = async(e) =>{
        e.preventDefault();
        try {
          await axios.post('http://localhost:3000/api/v1/signin',{
            username:username,
            password:password,
            email:email,
            firstName:firstName,
            lastName:lastName,
            dob:dob,
            confirmPassword:confirmPassword

          }).then((res)=>{
            console.log(res.data.message)
          })
        } catch (error) {
          console.log(error);
        }
        // console.log("firstName : ", firstName);
        // console.log("lastName : ", lastName);
        // console.log("date : ", dob);
        // console.log("pass : ", password);
        // console.log("confirmPassword : ", confirmPassword);
        // console.log("email : ", email);
        // console.log("username : ", username);
    }
  return (
    <div className="pb-3 bg lg:w-[25vw] xl:w-[25vw] md:w-[100vw] w-[100vw] mx-auto h-full flex flex-col justify-between bg-[#fff] relative">
                <img src={bgImag} alt="img" className="absolute top-0 left-0 z-0 h-[200px]"/>

    <div className='h-[50%] flex relative mt-5'>
      <img src={heart1} alt="img" className='absolute right-24 top-0 h-[60px]'/>
      <img src={heart2} alt="img" className='absolute left-10 top-[5vh] h-[100px]'/>
      <img src={heart3} alt="img" className='absolute right-10 -bottom-8 h-[130px]'/>
      </div> 
   <div className="flex flex-col px-8 pt-6 gap-2 rounded-t-3xl h-full bg-white ">
      <div className="w-full flex flex-col gap-5">
      <h1 className="text-3xl font-bold w-full text-center text-[#333333]">Sign In</h1>
        <form onSubmit={signinHandler} className="flex flex-col justify-start items-start gap-3">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col gap-1 w-full">
              <input onChange={(e)=>setFirstName(e.target.value)} type="text" id="first" className="w-full py-[7px] px-2 border-[.5px] rounded-2xl border-black/25" placeholder='First Name'/>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <input onChange={(e)=>setLastName(e.target.value)} type="text" id="last" className="w-full py-[7px] px-2 border-[.5px] rounded-2xl border-black/25" placeholder='Last name'/>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <input onChange={(e)=>setDate(e.target.value)} type="date" id="dob" className="w-full text-black/50 py-[7px] px-2 border-[.5px] rounded-2xl border-black/25" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <input onChange={(e)=>setPass(e.target.value)} type="password" id="pass" className="w-full py-[7px] px-2 border-[.5px] rounded-2xl border-black/25" placeholder='Password'/>
            </div>
            <div className="flex flex-col gap-1">
              <input onChange={(e)=>setConPass(e.target.value)} id="conpass" type="password" className="w-full py-[7px] px-2 border-[.5px] rounded-2xl border-black/25" placeholder='Confirm Password'/>
            </div>
            <div className="flex flex-col gap-1">
              <input onChange={(e)=>setEmail(e.target.value)} id="email" type="email" className="w-full py-[7px] px-2 border-[.5px] rounded-2xl border-black/25" placeholder='Email'/>
            </div>
            <div className="flex flex-col gap-1">
              <input onChange={(e)=>setUserName(e.target.value)} id="username" type="text" className="w-full py-[7px] px-2 border-[.5px] rounded-2xl border-black/25" placeholder='Username'/>
            </div>
          </div>
          <button type='submit' className="w-full bg-[#7C50FF] py-3 rounded-2xl font-semibold text-white ">Signin</button>
        </form>
      </div>
      <div className="w-full flex flex-col gap-2">
        {/* <h1 className="w-full text-center text-black/60">Login with social accounts</h1> */}
        {/* <div className="flex justify-center items-center gap-12">
          <FaGoogle />
          <FaTwitter />
          <FaGithub />
        </div> */}
      </div>
      <div  className="w-full text-center text-black/60">Already have an account? <span className="text-blue-400">Login</span></div>
    </div>
  </div>
  )
}

export default SignIn