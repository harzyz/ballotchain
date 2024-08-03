import Link from 'next/link';
import React from 'react'
import { FaArrowUp } from "react-icons/fa";

const Arrow = () => {
  return (
    <div className='fixed bottom-[20px] right-[20px] bg-primary text-white flex items-center justify-center w-[50px] h-[50px] rounded-full'>
      <Link className='text-white' href='#home'>
            <FaArrowUp />
      </Link>
    </div>
  )
}

export default Arrow
