import React from "react";
import beachVid from "../assets/beachVid.mp4";
import MyImage from "../assets/backImg.jpg";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      />
      {/* <img src={MyImage} alt="beach" className='w-full h-full object-cover'/> */}
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio
            aut sit voluptatibus ipsum odit! Fugit, non error? Ratione quia sunt
            odio perferendis asperiores unde accusamus harum placeat ad odit?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
