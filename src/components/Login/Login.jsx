import React, { useState } from "react";
import loginimg from "../../assets/image.png";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const loginHandler = (e) =>{
        e.preventDefault();
        console.log("username : ", userName);
        console.log("password : ", password);
    }
  return (
    <div className="bg-[#FFDD2D] w-[25vw] mx-auto h-full flex flex-col justify-between">
      <img src={loginimg} alt="img" className="w-[70%] mx-auto" />
      <div className="flex flex-col px-8 pt-6 gap-2 h-full bg-white rounded-t-3xl">
        <div className="w-full">
        <h1 className="text-3xl font-bold w-full text-center">Login</h1>
          <form  onSubmit={loginHandler} className="flex flex-col justify-start items-start gap-3">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="username" className="text-black/60 text-xs">Username</label>
                <input onChange={(e) => setUserName(e.target.value)} type="text" id="username" className="w-full py-[1px] px-1 border-[1px] rounded border-black" placeholder="enter your username"/>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="pass" className="text-black/60 text-xs">Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} id="pass" type="password" className="w-full py-[1px] px-1 border-[1px] rounded border-black" placeholder="enter your password"/>
              </div>
            </div>
            <button type="submit" className="w-full bg-[#7C50FF] py-1 rounded font-semibold text-white">Log in</button>
          </form>
          <div className="w-full text-sm text-center text-blue-400 mt-1">Forgot password</div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <h1 className="w-full text-center text-black/60">Login with social accounts</h1>
          <div className="flex justify-center items-center gap-12">
            <FaGoogle />
            <FaTwitter />
            <FaGithub />
          </div>
        </div>
        <div  className="w-full text-center text-black/60">Don't have an account? <span className="text-blue-400">Sign up</span></div>
      </div>
    </div>
  );
};

export default Login;
