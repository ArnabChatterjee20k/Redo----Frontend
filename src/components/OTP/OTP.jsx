import React, { useState } from 'react'
import axios from 'axios';

const OTP = () => {
  const [searchSong,setSearchSong] = useState('')
  const search = async () => {
        
      const options = {
      method: 'GET',
      url: `https://spotify23.p.rapidapi.com/search/${searchSong}`,
      params: {
        q: '<REQUIRED>',
        type: 'multi',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5'
      },
      headers: {
        'X-RapidAPI-Key': '0d94ba254bmsh068191b8c3ffb02p113c81jsn35fa5ed1c141',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    
      try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='pb-3 bg lg:w-[25vw] xl:w-[25vw] md:w-[100vw] w-[100vw] mx-auto h-full'>
        <div>
            <input type="text" onChange={e => setSearchSong(e.target.value)}/>
        </div>
        <button className='text-white' onClick={search}>submit</button>
    </div>
  )
}

export default OTP