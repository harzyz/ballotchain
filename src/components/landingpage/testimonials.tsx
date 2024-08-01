import React from 'react'
import { FaStar } from "react-icons/fa";

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            text: '',
            imgUrl: 'https://myballotchain.com/dummy/dummy.png'
        }
    ]
    const star = [1, 2, 3, 4, 5]
  return (
    <div className='wrapper flex flex-col gap-[40px]'>
      <h1 className='text-center text-3xl text-primary font-bold'>Testimonials</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <div className='bg-primary text-white p-5 rounded-[8px] flex flex-col items-center'>
            <div className='w-[80px] h-[80px] border-[5px] border-white rounded-[50%]'>
                <img className='w-full h-full rounded-[50%]' src="https://myballotchain.com/dummy/dummy.png" alt="dummy" />
            </div>
            <h3 className='font-bold text-xl'>Joe Doe</h3>
            <p className='text-center text-lg font-[300]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, perferendis nemo aperiam porro illum reiciendis, commodi repudiandae sint doloremque voluptatibus sapiente. Doloribus, ipsum at animi maxime vitae hic id quaerat.</p>
            <div className='flex'>
                {star.map((star) => (
                    <FaStar key={star} color='#FFA500' />
                ))}
            </div>
        </div>
        <div className='bg-primary text-white p-5 rounded-[8px] flex flex-col items-center'>
            <div className='w-[80px] h-[80px] border-[5px] border-white rounded-[50%]'>
                <img className='w-full h-full rounded-[50%]' src="https://myballotchain.com/dummy/dummy.png" alt="dummy" />
            </div>
            <h3 className='font-bold text-xl'>Joe Doe</h3>
            <p className='text-center text-lg font-[300]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, perferendis nemo aperiam porro illum reiciendis, commodi repudiandae sint doloremque voluptatibus sapiente. Doloribus, ipsum at animi maxime vitae hic id quaerat.</p>
            <div className='flex'>
                {star.map((star) => (
                    <FaStar key={star} color='#FFA500' />
                ))}
            </div>
        </div>
        <div className='bg-primary text-white p-5 rounded-[8px] flex flex-col items-center'>
            <div className='w-[80px] h-[80px] border-[5px] border-white rounded-[50%]'>
                <img className='w-full h-full rounded-[50%]' src="https://myballotchain.com/dummy/dummy.png" alt="dummy" />
            </div>
            <h3 className='font-bold text-xl'>Joe Doe</h3>
            <p className='text-center text-lg font-[300]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, perferendis nemo aperiam porro illum reiciendis, commodi repudiandae sint doloremque voluptatibus sapiente. Doloribus, ipsum at animi maxime vitae hic id quaerat.</p>
            <div className='flex'>
                {star.map((star) => (
                    <FaStar key={star} color='#FFA500' />
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
