import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./swipe.css";
import img1 from "../../assets/Image about girl in Fashion by Wranga on We Heart It.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import { MdVerified } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const data = [
  { name: "RIya", imgUrl: img1, place: "Raipur", age: 25, active: true },
  { name: "Sonu", imgUrl: img2, place: "Jharkhand", age: 30, active: false },
  { name: "Shivam", imgUrl: img3, place: "Dhanbad", age: 22, active: true },
];

// Array of soft colors
const softColors = ["#FFD2D2", "#FFE5D9", "#FFF9C4", "#DCF1FF", "#E3D4FF"];

const InterestSwipe = () => {
  const [cards, setCards] = useState(data);

  const swiped = (direction, nameToDelete) => {
    console.log(`Removed ${nameToDelete} to the ${direction}`);
    // Handle swipes here
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="card-container relative pb-3 bg lg:w-[25vw] xl:w-[25vw] md:w-[100vw] w-[100vw] mx-auto h-full">
      {cards.map((card, index) => (
        <TinderCard
          className="swipe w-full h-full"
          key={card.name}
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, card.name)}
          onCardLeftScreen={() => outOfFrame(card.name)}
        >
          <div
            style={{
              backgroundImage: `url(${card.imgUrl})`,
              backgroundColor: softColors[index % softColors.length], // Assigning soft colors dynamically
            }}
            className="card h-full w-full flex flex-col justify-end items-start px-6"
          >
            <div className="flex justify-start items-baseline gap-2 text-white">
              <div className="text-3xl font-bold text-white">{card.name}</div>
              <div className="text-2xl font-medium text-white">{card.age}</div>
              <MdVerified />
            </div>
            <div className="flex justify-start items-center text-2xl text-white">
              <IoLocationOutline />
              <div>{card.place}</div>
            </div>
            <div className="text-2xl text-green-500">Active</div>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default InterestSwipe;
