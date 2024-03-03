import React from 'react';

const InterestButton = ({ icon, interest, selectedInterest, setSelectedInterest }) => {
  return (
    <button className={selectedInterest.includes(`${interest}`) ? `w-[9vw] px-2 py-2 border-2 border-black rounded-2xl  font-bold bg-[#7C50FF] ` : `w-[9vw] px-2 py-2  rounded-2xl  font-bold border`} onClick={() => { if (selectedInterest.includes(`${interest}`) === false) { setSelectedInterest([...selectedInterest, `${interest}`]) } else { setSelectedInterest(selectedInterest.filter(item => item !== `${interest}`)) } }}>
      <div className='flex justify-center items-center gap-2'>
        <div className={selectedInterest.includes(`${interest}`) ? `text-[#fff] font-extrabold text-2xl` : `text-[#7C50FF] font-extrabold text-2xl`}>{icon}</div>
        <span className={selectedInterest.includes(`${interest}`) ? `text-[#fff] font-extrabold` : `text-[#7C50FF] font-extrabold`}>{interest}</span>
      </div>
    </button>
  );
};

export default InterestButton;
