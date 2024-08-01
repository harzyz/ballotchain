import React from 'react'

const Subscribe = () => {
  return (
    <div className='wrapper flex justify-center py-[50px]'>
      <div className='bg-primary text-center px-5 lg:px-[50px] py-[30px] rounded-[8px] flex lg:w-1/2 flex-col items-center text-white gap-5'>

        <h3 className='font-bold text-2xl'>Subscribe for exclusive updates</h3>
        <p className='text-center w-[85%] text-sm md:text-lg'>Stay informed with the latest advancements and news from BallotChain. Join our community for exclusive insights and updates straight to your inbox</p>
        <form className='flex flex-col gap-3 w-full'>
            <input placeholder='Enter your mail' className='bg-white h-[50px] text-[#000] flex-grow ps-5' type="text" name="" id="" />
            <button className='lg:w-130px py-3 px-5 bg-white text-primary font-semibold hover:bg-[#6681A1] hover:text-white'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
