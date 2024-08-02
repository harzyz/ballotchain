import Image from "next/image";
import React from "react";
import muzi from '@/assets/images/partner-1.png'

const Partners = () => {
  const levels = [
    {
      id: 1,
      title: "Get started",
      text: "Visit our user-friendly website and embark on your journey towards secure and transparent voting with BallotChain",
    },
    {
      id: 2,
      title: "Sign up",
      text: "Create your account by providing basic information. Your privacy and security are out top priorities, rest assured your data is protected.",
    },
    {
      id: 3,
      title: "Select event",
      text: "Explores a variety of events available for participation. From local community decisions to global initiatives, and engaging entertainment contests.",
    },
    {
      id: 4,
      title: "Host events",
      text: "Host your event effortlessly through BallotChain. BallotChain helps you engage your audience and make their voices heard in entertainment and beyound",
    },
  ];

  const logos = [1, 2, 3, 4]

  return (
    <div className="wrapper flex flex-col gap-[30px]">
      <h1 className="text-3xl text-center text-primary font-bold">
        Our Partners
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[70px] justify-center">
        {logos.map((item) => (
            <div key={item}>
            <Image className="w-[100px] h-[30px]" src={muzi}
              alt="muzi" />
            </div>
        ))}
      </div>

      <div className="w-full flex flex-col-reverse lg:flex-row py-[50px] gap-[30px]">
        <div className="lg:w-1/2">
          {levels.map((item) => (
            <div key={item.id} className="w-full flex gap-5 p-5">
              <span className="w-[50px] text-lg font-semibold">{`0${item.id}`}</span>
              <div className="flex-grow flex flex-col gap-[20px]">
                <h1 className="text-2xl text-primary font-bold">{item.title}</h1>
                <div className="flex gap-5">
                  <div className="border-b-[5px] border-primary w-[60px] rounded-[99px]"></div>
                  <div className="border-b-[5px] border-primary w-[30px] rounded-[99px]"></div>
                </div>
                <p className="text-md">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 flex flex-col gap-5">
            <button className="btn w-[200px] bg-[#6681A1]">How it works</button>
            <h1 className="text-3xl text-primary font-bold">Four simple steps to get started with BallotChain</h1>
            <p className="text-md">Whether picking the next blockbluster or voting for your favorite artist and lots more, find your voice on our platform</p>
            <button className="btn w-[200px]">Start voting</button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
