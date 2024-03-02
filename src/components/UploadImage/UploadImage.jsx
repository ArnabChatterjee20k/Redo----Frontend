import React from "react";
// import { Send2 } from "./Send2";
// import { Share2 } from "./Share2";
import img1 from "../../assets/Ellipse 1202.png";
import img2 from "../../assets/Ellipse 1203.png";
import { FiUpload } from "react-icons/fi";
import "./style.css";
import { IoIosSend } from "react-icons/io";

export const UploadImage = () => {
  return (
    <div className="android-large lg:w-[25vw] xl:w-[25vw] md:w-[100vw] w-[100vw] mx-auto h-full overflow-hidden">
      <div className="div">
        <div className="overlap">
          <div className="ellipse" />
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <img className="img" alt="Rectangle" src={img2} />
          {/* <img className="img" alt="Ellipse" src="ellipse-1203.png" /> */}
          <div className="ellipse-4" />
          <img className="img-2" alt="Rectangle" src={img1} />
          {/* <img className="img-2" alt="Ellipse" src="ellipse-1202.png" /> */}
        </div>
        <div className="overlap-group">
          <img className="line" alt="Line" src="line-2.svg" />
          <div className="overlap-2">
            <div className="button-sign-in rounded-2xl">
              <div className="div-wrapper bg-[#7C50FF] rounded-2xl">
                <div className="text-wrapper">Upload an Image</div>
              </div>
            </div>
            <div className="ellipse-5 bg-black flex justify-center items-center text-xl relative">
              <input type="file" className="absolute left-0 opacity-0 z-0" />
              <FiUpload className="text-black/40 z-10" />
            </div>
            {/* <Share2 className="outline-share" color="#ABABAB" /> */}
          </div>
          <div className="text-wrapper-2">or</div>
          <div className="overlap-3 w-full flex justify-between items-center gap-2">
            <input className="py-3 text-wrap w-full px-2"
             placeholder=" Write a little description about yourself to generate your Avatar"
            />
            <button className="p-3 rounded-full text-2xl shadow-2xl"><IoIosSend/></button>
          </div>
          <img className="line-2" alt="Line" src="line-1.svg" />
        </div>
      </div>
    </div>
  );
};
