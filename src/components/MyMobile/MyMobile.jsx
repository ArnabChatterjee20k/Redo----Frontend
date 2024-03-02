import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const MyMobile = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className="pt-36 pb-3 bg lg:w-[25vw] xl:w-[25vw] md:w-[100vw] w-[100vw] mx-auto h-full flex flex-col gap-10 justify-start bg-[#fff] relative px-6 py-6">
      <div className='flex flex-col gap-1'>
        <h1 className='text-3xl text-[#7C50FF] font-bold'>My mobile</h1>
        <p className='text-[#7C50FF] font-medium'>
            Please enter your valid phone number. We will send you a 4-digit code to verify your account.
        </p>
      </div>
      <PhoneInput
        country={'us'}
        value={phone}
        onChange={(value) => setPhone(value)}
        inputStyle={{ width: "100%", height: "50px", borderRadius: "90px 90px" }}      />
      <button className='w-full bg-[#7C50FF] text-2xl py-2 rounded-3xl font-semibold text-white'>Submit</button>
    </div>
  );
};

export default MyMobile;
