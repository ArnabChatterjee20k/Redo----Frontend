import React, { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { BsCamera } from "react-icons/bs";
import InterestButton from './InterestButton';
import { AiOutlineShopping } from "react-icons/ai";
import { interestData } from '../../../interesData';


const Interest = () => {
    const [selectedInterest, setSelectedInterest] = useState([]);
  return (
    <div className='pb-3 bg lg:w-[25vw] xl:w-[25vw] md:w-[100vw] w-[100vw] mx-auto h-full bg-white p-6 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
            <div className='p-2 border rounded-lg text-[#7C50FF]'>
                <FaChevronLeft/>
            </div>
            <div className='text-xl text-[#7C50FF] font-bold'>
                skip
            </div>
        </div>
        <div className=' text-[#7C50FF]'>
            <h1 className='text-4xl font-bold'>Your interests</h1>
            <p className='text-lg'>Select a few of your interests and let everyone
know what you're passionate about.</p>
        </div>
        <div className='flex flex-col flex-wrap justify-center items-center gap-4 h-[60%]'>
            {/* <button className={selectedInterest.includes('Photography') ? `px-2 py-2 border-2 border-black rounded-2xl  font-bold bg-[#7C50FF] ` : `px-2 py-2  rounded-2xl  font-bold border`} onClick={() => {if(selectedInterest.includes('Photography') == false){setSelectedInterest([...selectedInterest, 'Photography'])} else{setSelectedInterest(selectedInterest.filter(item => item !== 'Photography'))}}}>
                <div className='flex justify-center items-center gap-2'>
                    <BsCamera className={selectedInterest.includes('Photography') ? `text-[#fff] font-extrabold text-2xl` : `text-[#7C50FF] font-extrabold text-2xl`}/><span className={selectedInterest.includes('Photography') ? `text-[#fff] font-extrabold` : `text-[#7C50FF] font-extrabold`}>Photography</span>
                </div>
            </button> */}
            
            {
                interestData.map(item => {
                    return <InterestButton icon={item.icon} interest={item.interest} selectedInterest={selectedInterest} setSelectedInterest={setSelectedInterest}/>
                })
            }
        
            
        </div>
        <button className='text-lg w-full rounded-3xl px-6 py-2 bg-[#7C50FF] text-white font-bold'>Continue</button>
    </div>
  )
}

export default Interest