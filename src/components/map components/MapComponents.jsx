import React from 'react'
import DownNavBar from '../DownNavBar/DownNavBar'
import MapProfile from './MapProfile'
import filter from '../../assets/filter.png'
import profilePic from '../../assets/pin-selected.png'

const MapComponents = () => {
  return (
    <div className='lg:w-[25vw] xl:w-[25vw] md:w-[100vw] w-[100vw] h-full bg-white mx-auto flex flex-col justify-end items-end'>
        <div className='relative w-full h-full flex flex-col justify-start items-center'>
            <div className='bg-[#fff] flex gap-2 justify-center items-center mt-4 px-3 py-1 w-[100px] rounded-2xl' style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <img src={filter} alt="img" />
                <span className='text-lg font-medium'>Filter</span>
            </div>
            <div className=''>
                <img src={profilePic} alt="img" className='h-[150px]' />
            </div>
            <div className=''>
                <img src={profilePic} alt="img" className='h-[150px]' />
            </div>
            <div className=''>
                <img src={profilePic} alt="img" className='h-[150px]' />
            </div>
            <MapProfile/> 
        </div>
        <DownNavBar/>
    </div>
  )
}

export default MapComponents