import React from "react";

import Image from "next/image";
// Importing Font Awesome icon for clock
import { PiClockClockwiseBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-black">
      {/* Top Section of the Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-black px-[135px] py-[50px]">
        {/* Support Section */}
        <div className="text-white md:w-[50%] w-[100%]">
          {/* Heading */}
          <h2 className="text-[20px] md:text-[32px] font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill Need Our Support?
          </h2>
          {/* Description */}
          <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">
            Don&#39;t wait make a smart & logical quote here. Its pretty easy.
          </p>
        </div>

        {/* Subscription Input and Button */}
        <div className="flex md:mt-0 mt-[20px]">
          {/* Email Input */}
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-[5px] px-[10px] md:py-[10px] md:px-[20px] mr-2"
          />
          {/* Subscribe Button */}
          <button className="text-[#FF9F0D] bg-white py-[5px] md:py-[10px] px-[10px] md:px-[20px]">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="my-4 border-[#FF9F0D] mx-[135px]" />

      {/* Middle Section with Links and Information */}
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 md:gap-[50px] px-0 md:px-[135px] py-6 lg:py-8 md:grid-cols-4">
          {/* About Us Section */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold text-white">About Us.</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <p className="text-[#FFFFFF] text-[16px] font-normal hover:underline">
                  Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities worldwide.
                </p>
              </li>
              {/* Opening Hours Section */}
              <li className="flex gap-[16.5px]">
                <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
                  <PiClockClockwiseBold className="text-white text-[40px]" />
                </div>
                <div className="ml-1">
                  <h2 className="text-[16px] text-[#FFFFFF] font-normal">Opening Hours</h2>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">Mon - Sat (8.00 - 6.00)</h3>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">Sunday - Closed</h3>
                </div>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold text-white">Useful Links</h2>
            <ul className="text-[#FFFFFF] font-medium">
              {["About", "News", "Partner", "Team", "Menu", "Contact"].map((link) => (
                <li className="mb-4" key={link}>
                  <a href="#" className="hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold text-white">Help?</h2>
            <ul className="text-[#FFFFFF] font-medium">
              {["FAQ", "Terms & Conditions", "Reporting", "Documentation", "Support Policy", "Privacy"].map((link) => (
                <li className="mb-4" key={link}>
                  <a href="#" className="hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Post Section */}
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold text-white">Recent Post</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-[14px]">
              {/* Example Post */}
              <li className="flex gap-[16.5px]">
                <Image src={"/footr.png"} height={50} width={50} alt="Recent Post Thumbnail" />
                <div className="ml-1">
                  <h3>Keep Your Business</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="w-[100%] px-4 py-6 bg-[#FF9F0D] dark:bg-[#FF9F0D] md:flex md:items-center md:justify-between">
          {/* Copyright Information */}
          <span className="text-sm text-[#FFFFFF] sm:text-center">
            Copyright © 2024 by UROOJ MEMON. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
