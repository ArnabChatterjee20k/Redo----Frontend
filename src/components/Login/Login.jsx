import React, { useState } from "react";
import loginimg from "../../assets/login.png";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import bgImag from '../../assets/Oval Copy 2.png'
import axios from 'axios'

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async(e) => {
    e.preventDefault();
     try {
      await axios.post('http://localhost:3000/api/v1/login', {username, password}).then((res)=>{
        console.log(res.data.message)
      })
     } catch (error) {
      console.log(error);
     }
  
    
    console.log("username : ", username);
    console.log("password : ", password);
  };
  return (
    <div className="login relative bg-white lg:w-[25vw] xl:w-[25vw] md:w-[100vw] w-[100vw] mx-auto h-full flex flex-col justify-between pt-[30vh]">
          
          <img src={bgImag} alt="img" className="absolute top-0 left-0 z-0"/>
        <div className="w-full text-center text-3xl font-extrabold">Log in</div>
      <button className="flex px-8 pt-6 gap-2">
        <div className="w-full flex gap-2 justify-center items-center  bg-[#7C50FF] py-2 rounded-xl font-semibold text-white">
          <FaGoogle className="text-xl"/> <span>With Google</span>
        </div>
        <div className="p-2 border rounded-xl hover:bg-black/10">
          <FaTwitter className="text-xl"/>
        </div>
        <div className="p-2 border rounded-xl hover:bg-black/10">
          <FaFacebook className="text-xl"/>
        </div>
      </button>
      <h1 className="w-full text-center text-black/60 mt-6">
            Or with Email
          </h1>
      <div className="flex flex-col px-8 gap-2 h-full bg-white rounded-t-3xl">
        <div className="w-full">
          <form
            onSubmit={loginHandler}
            className="flex flex-col justify-start items-start gap-3"
          >
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="username" className="text-black/60 text-xs">
                  Username
                </label>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  id="username"
                  className="w-full  py-2 px-2 border-[1px] rounded-lg border-black"
                  placeholder="Username"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="pass" className="text-black/60 text-xs">
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="pass"
                  type="password"
                  className="w-full py-2 px-2 border-[1px] rounded-lg border-black"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#7C50FF] py-2 rounded-xl font-semibold text-white"
            >
              Log in
            </button>
          </form>
          <div className="w-full text-sm text-center text-blue-400 mt-1">
            Forgot password
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
        
        </div>
        <div className="w-full text-center text-black/60">
          Don't have an account? <span className="text-blue-400">Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
