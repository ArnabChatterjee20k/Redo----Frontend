import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import img1 from "../../assets/Ellipse 1202.png";
import img2 from "../../assets/Ellipse 1203.png";
import "./style.css";

export const UploadImage = () => {
  const [file, setFile] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // State to hold the URL of the uploaded image

  function fileHandler() {
    const url = URL.createObjectURL(file);
    setImageUrl(url); // Set the URL of the uploaded image
  }

  return (
    <div className="android-large lg:w-[25vw] xl:w-[25vw] md:w-[100vw] w-[100vw] mx-auto h-full overflow-hidden">
      <div className="div">
        <div className="overlap">
          <div className="ellipse" />
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <img className="img" alt="Rectangle" src={img2} />

          <div className="ellipse-4" />
          {/* Use the imageUrl state to dynamically change the image source */}
          <img className="img-2" alt="Rectangle" src={imageUrl || img1} />
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
              <input
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  fileHandler(); // Call fileHandler when file changes
                }}
                type="file"
                className="absolute left-0 opacity-0 z-0"
              />
              <FiUpload className="text-black/40 z-10" />
            </div>
          </div>
          <button className="overlap-3 w-full flex justify-between items-center gap-2 text-center">
            Send
          </button>
          <img className="line-2" alt="Line" src="line-1.svg" />
        </div>
      </div>
    </div>
  );
};
