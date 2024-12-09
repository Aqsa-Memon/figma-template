import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

function AboutUs() {
  return (
    // Main section container with a black background, padding, and responsive layout
    <section className="bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px]">
      
      {/* Text Content Section */}
      <div className="text-white w-full md:w-[50%]">
        
        {/* "About Us" heading with custom styles */}
        <h1 className="md:text-[32px] text-[24px] font-normal text-[hashtag#FF9F0D] text-[#FF9F0D] font-greatVibes">
          About Us
        </h1>

        {/* Main title with bold and highlighted text */}
        <h1 className="text-[20px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">We</span> Create the Best Foody Product
        </h1>

        {/* Paragraph providing a description of the brand */}
        <p className="text-[10px] md:text-[16px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>

        {/* List of key points with icons */}
        <ul>
          {/* List Item 1 */}
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
            {/* Check icon */}
            <span className="mr-[10px]">
              <FaCheck />
            </span>
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </li>
          
          {/* List Item 2 */}
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
            <span className="mr-[10px]">
              <FaCheck />
            </span>
            Quisque diam pellentesque bibendum non dui volutpat fringilla
          </li>
          
          {/* List Item 3 */}
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
            <span className="mr-[10px]">
              <FaCheck />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </li>
        </ul>

        {/* Call-to-action button */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
            See More
          </button>
        </div>
      </div>

      {/* Image Content Section */}
      <div className="mt-[50px] md:mt-0">
        {/* Main large image */}
        <Image
          src={"/about2.jpeg"}
          alt="About Us Image 1"
          className=""
          height={400}
          width={400}
        />

        {/* Row of smaller images */}
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[0]">
          {/* First smaller image */}
          <Image
            src={"/about1.jpeg"}
            alt="About Us Image 2"
            className="mr-[16px] pt-[40px]"
            height={200}
            width={200}
          />
          {/* Second smaller image */}
          <Image
            src={"/about3.jpeg"}
            alt="About Us Image 3"
            className="pt-[40px]"
            height={200}
            width={200}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
