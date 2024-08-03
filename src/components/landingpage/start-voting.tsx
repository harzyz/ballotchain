import React from 'react'

const StartVoting = () => {
  return (
    <div id='start' className='wrapper py-[30px]'>
      <div className="bg-primary text-center rounded-[8px] flex flex-col lg:flex-row justify-between p-5 lg:p-[50px] text-white">
        <p className='text-3xl'>🥳</p>
        <div className='flex lg:w-1/2 flex-col items-center text-white gap-5'>
            <h3 className='font-bold text-2xl'>Start Voting with BallotChain</h3>
            <p className='text-center text-sm lg:text-lg'>Start Voting with BallotChain Experience secure, transparent, and accessible voting with BallotChain&apos;s blockchain technology. Trusted by communities worldwide, BallotChain ensures every vote counts. Get started</p>
            <button className="btn bg-white text-primary">
                Get Started
            </button>
        </div>
        <p className='text-3xl'>🎉</p>
      </div>
    </div>
  )
}

export default StartVoting
