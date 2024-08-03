import React from 'react'
import { FaArrowUp } from "react-icons/fa";

const Arrow = () => {
  return (
    <div className='absolute bottom-[20px] right-[20px] bg-primary text-white flex items-center justify-center w-[150px] h-[150px] rounded-full'>
      <FaArrowUp />
    </div>
  )
}

export default Arrow
