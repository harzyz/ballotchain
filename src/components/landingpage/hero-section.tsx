import Image from 'next/image'
import React from 'react'
import HeroImage from '@/assets/images/herosection-img.jpg'

const HeroSection = () => {
  return (
    <div className="wrapper bg-[#fff] md:pb-10 py-[30px] flex flex-col gap-8 md:flex-row">
    <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:pe-2 justify-center">
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="text-[37px] md:text-[35px] lg:text-[40px] font-bold text-primary"
      >
        Secure, Transparent, and Accessible Voting with Blockchain Technology
      </h1>
      <p
        data-aos="fade"
        data-aos-delay="500"
        className="text-xl"
      >
        Experience the Future of Voting on Your Mobile Device Anywhere, Anytime!
      </p>
      
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="500"
        data-aos-offset="0"
        className='flex gap-5 lg:mt-5'
      >
        <button className='btn'>Get Started</button>
        <button className="btn bg-white border border-primary text-primary hover:bg-primary hover:text-[#ffff]">Book a Demo</button>
      </div>
    </div>
    <div className="w-full lg:w-1/2 flex justify-end relative">
        <Image className='rounded-[8px]' src={HeroImage} alt="Streak Legend" />

      {/* <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="absolute p-2 text-xs font-nunito gap-2 flex items-center top-0 left-[-10px] md:left-[0px] bg-[white] border border-primary h-[33px] w-[173px] md:h-[56px] md:w-[221px] rounded-[5px] md:rounded-[8px]"
      >
        You unlocked a badge
      </div>
      <div
        className="absolute p-2 font-nunito gap-2 lg:flex items-center top-[27px] lg:right-[-55px] xl:right-[-65px] bg-[white] border border-secondary h-[80px] w-[229px] rounded-[8px] hidden"
      >
        
        You finished top 1 on the leaderboard
      </div> */}
    </div>
  </div>
  )
}

export default HeroSection
