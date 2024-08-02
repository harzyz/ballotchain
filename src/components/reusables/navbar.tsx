"use client"
import Image from "next/image";
import React, { useState } from "react";
import BallotChainLogo from "@/assets/images/ballotchain-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    {
      id: 1,
      navItem: "Home",
    },
    {
      id: 2,
      navItem: "About Us",
    },
    {
      id: 3,
      navItem: "Pricing",
    },
    {
      id: 4,
      navItem: "Who we serve",
    },
    {
      id: 5,
      navItem: "Contact",
    },
    {
      id: 6,
      navItem: "FAQ",
    },
  ];
  return (
    <div className="wrapper bg-[#ffffffb3] z-20 sticky top-0 flex gap-[100px] justify-between items-center h-[100px]">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`toggle lg:hidden transition-all duration-500 ${isOpen ? 'change' : ''} `}
      >
        <div className="toggler"></div>
        <div className="toggler"></div>
        <div className="toggler"></div>
      </div>
      
      <div className="w-[64px] mt-[-10px] h-[84px]">
        <Image
          className="w-full h-full"
          src={BallotChainLogo}
          alt="BallotChain Logo"
        />
      </div>
      <nav className="h-full hidden w-full justify-end lg:flex items-center">
        <ul className="flex xl:gap-5 gap-4 w-full justify-end items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="py-2 px-3 xl:text-sm text-xs rounded-[8px] hover:bg-primary hover:text-[#ffff]"
            >
              {item.navItem}
            </li>
          ))}

          <li className="btn xl:text-sm text-xs bg-white border border-primary text-primary hover:bg-primary hover:text-[#ffff]">Sign In</li>
          <li className="btn xl:text-sm text-xs">Create Account</li>
        </ul>
      </nav>

      <div
        className={`absolute top-[100%] h-[100vh] left-0 bg-[#FCFCFE] transition-all duration-500 lg:hidden ${isOpen ? 'w-full' : 'w-0'}`}
        
      >
        <ul
          className={`flex flex-col gap-[20px] p-5 justify-between ${isOpen ? 'block' : 'hidden'}`}
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className="py-2 px-3 text-sm rounded-[8px] hover:bg-primary hover:text-[#ffff]"
            >
              {item.navItem}
            </li>
          ))}

          <li className="btn bg-white border border-primary text-primary hover:bg-primary hover:text-[#ffff]">Sign In</li>
          <li className="btn">Create Account</li>
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
