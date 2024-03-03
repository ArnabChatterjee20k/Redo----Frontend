import React, { useEffect, useState } from 'react'
import { MdVerified } from "react-icons/md";

const Profile = () => {
    const [profileLink, setProfileLink] = useState('')
    useEffect(() => {
       try {
        async()=>{
            await axios.get('http://localhost:3000/api/v1/profile').then((res)=>{
                setProfileLink(res.data.data.profileLink)
            })
        }
       } catch (error) {
        console.log(error);
       }
    })
  return (
    <div className='pb-3 bg lg:w-[25vw] xl:w-[25vw] md:w-[100vw] w-[100vw] mx-auto h-full'>
        <img src={profileLink} alt="img" className='w-full h-[60%]'/>
        <div className='bg-white w-full overflow-y-auto'>
            <div>
                {localStorage.getItem("id")}
            </div>
        </div>
    </div>
  )
}

export default Profile