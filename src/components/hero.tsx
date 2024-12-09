import React from "react";
import Image from "next/image"; 

function Hero() {
  return (
    // Main section container with a black background and responsive layout
    <section className="bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px]">
      
      {/* Text Content Section */}
      <div className="text-white w-full md:w-[50%]">
        
        {/* Small heading with custom styles */}
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] whitespace-nowrap">
          Its Quick & Amusing!
        </h1>

        {/* Main heading with bold and highlighted styles */}
        <h1 className="text-[25px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <p>
            <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food
            Quality
          </p>
        </h1>

        {/* Description paragraph with responsive font size */}
        <p className="text-[10px] md:text-[16px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </p>

        {/* Call-to-action button */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Button with hover effect */}
          <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
            See More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-[50px] md:mt-0">
        {/* Hero image with responsive dimensions */}
        <Image
          src={"/hero.jpg"} // Image source
          alt="Hero Image" // Alternative text for accessibility
          className="" // Additional classes (currently none)
          height={500} // Height of the image
          width={500} // Width of the image
        />
      </div>
    </section>
  );
}

export default Hero;
