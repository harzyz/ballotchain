import Image from 'next/image'
import React from 'react'
import HeroImage from '@/assets/images/herosection-img.jpg'
import manImage from "@/assets/images/dummy.png";

const HeroSection = () => {
  return (
    <div id='home' className="wrapper bg-[#fff] md:pb-10 py-[30px] flex flex-col gap-8 md:flex-row">
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
        <button className='btn w-[150px]'>Get Started</button>
        <button className="btn w-[150px] bg-white border border-primary text-primary hover:bg-primary hover:text-[#ffff]">Book a Demo</button>
      </div>
    </div>
    <div className="w-full lg:w-1/2 flex justify-end relative">
        <Image className='rounded-[8px]' src={HeroImage} alt="Streak Legend" />

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="absolute p-2 text-xs font-nunito gap-2 lg:flex items-center top-[20%] lg:right-[-55px] xl:right-[-65px] bg-[white] border border-primary h-[33px] w-[173px] md:h-[56px] md:w-[221px] rounded-[5px] md:rounded-[8px] hidden"
      >
        <div className='flex items-center'>
        <Image className='w-[30px] h-[30px] rounded-full' src={manImage} alt='dummy' />
        <Image className='w-[30px] h-[30px] rounded-full -ml-[8px]' src={manImage} alt='dummy' />
        <Image className='w-[30px] h-[30px] rounded-full -ml-[8px]' src={manImage} alt='dummy' />
        <Image className='w-[30px] h-[30px] rounded-full -ml-[8px]' src={manImage} alt='dummy' />
        <div className='bg-primary rounded-full w-[30px] text-white text-[10px] -ml-[8px] h-[30px] flex items-center justify-center'>
          300+
        </div>
        </div>
        <p className='text-primary w-[30px] text-[10px]'>Active Users</p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="absolute p-2 text-xs font-nunito gap-2 lg:flex items-center top-[50%] left-[-10px] md:left-[-70px] bg-[white] border border-primary h-[33px] w-[173px] md:h-[56px] md:w-[221px] rounded-[5px] md:rounded-[8px] hidden"
      >
        <div className='flex items-center'>
        <Image className='w-[30px] h-[30px] rounded-full' src={manImage} alt='dummy' />
        <Image className='w-[30px] h-[30px] rounded-full -ml-[8px]' src={manImage} alt='dummy' />
        <Image className='w-[30px] h-[30px] rounded-full -ml-[8px]' src={manImage} alt='dummy' />
        <Image className='w-[30px] h-[30px] rounded-full -ml-[8px]' src={manImage} alt='dummy' />
        <div className='bg-primary rounded-full w-[30px] text-white text-[10px] -ml-[8px] h-[30px] flex items-center justify-center'>
          300+
        </div>
        </div>
        <p className='text-primary w-[30px] text-[10px]'>Active Users</p>
      </div>
      <div
        className="absolute p-2 font-nunito gap-2 lg:flex items-center top-[80%] lg:right-[-55px] xl:right-[-65px] bg-[white] border border-primary h-[56px] w-[229px] rounded-[8px] hidden"
      >
        
        <div className='flex items-center'>
        <Image className='w-[30px] h-[30px] rounded-full' src={manImage} alt='dummy' />
        <Image className='w-[30px] h-[30px] rounded-full -ml-[8px]' src={manImage} alt='dummy' />
        <Image className='w-[30px] h-[30px] rounded-full -ml-[8px]' src={manImage} alt='dummy' />
        <Image className='w-[30px] h-[30px] rounded-full -ml-[8px]' src={manImage} alt='dummy' />
        <div className='bg-primary rounded-full w-[30px] text-white text-[10px] -ml-[8px] h-[30px] flex items-center justify-center'>
          300+
        </div>
        </div>
        <p className='text-primary w-[30px] text-[10px]'>Active Users</p>
      </div>
    </div>
  </div>
  )
}

export default HeroSection
