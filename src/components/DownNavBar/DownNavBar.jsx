import React from 'react'
import { FiHome } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import plusButton from '../../assets/Group 23.png' 
const DownNavBar = () => {
  return (
    <div className='relative lg:w-[25vw] xl:w-[25vw] md:w-[100vw] w-[100vw] mx-auto rounded-t-xl shadow-md flex justify-center gap-[3vw] items-center bg-white py-6 px-7' style={{ boxShadow: '0 -6px 12px -6px rgba(0, 0, 0, 0.5)' }}>
        <div className='flex justify-between items-center w-full'>
            <div className='text-3xl text-[#B0C3CE]'>
                <FiHome/>
            </div>
            <div className='text-3xl text-[#B0C3CE] mr-6'>
                <FiMessageSquare/>
            </div>
            <div className='text-3xl text-[#B0C3CE] ml-6'>
                <FaRegHeart/>
            </div>
            <div className='text-3xl text-[#B0C3CE]'>
                <CgProfile/>
            </div>
        </div>
        <div className='  -top-8 absolute flex justify-center items-center text-[#fff] text-3xl rounded-[30px]'>
            <img src={plusButton} alt="img" />
        </div>
       
    </div>
  )
}

export default DownNavBar