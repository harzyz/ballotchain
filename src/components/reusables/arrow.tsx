"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Arrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      {isVisible && (
        <div className='fixed bottom-[20px] right-[20px] bg-primary text-white flex items-center justify-center w-[50px] h-[50px] rounded-full'>
          <Link className='text-white' href='#home'>
            <FaArrowUp />
          </Link>
        </div>
      )}
    </>
  );
};

export default Arrow;
