import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";

const MapProfile = () => {
  return (
    <div className="w-[85%] mx-auto bg-[#ffffffa4] border px-7 py-5 rounded-2xl absolute bottom-8">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-1">
          <span className="text-xl font-bold">Dubby</span>
          <span>
            <RiVerifiedBadgeFill className="text-green-500 text-xl"/>
          </span>
        </div>
        <div>
          <IoHeartOutline  className="text-2xl"/>
        </div>
      </div>
      <div className="flex justify-start items-center text-[#5F5F63]">
        <span className="text-xl"><CiLocationOn/></span>
        <span className="font-medium text-sm">1.2 km away from you</span>
      </div>
    </div>
  );
};

export default MapProfile;
