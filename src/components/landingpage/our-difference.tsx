import React from "react";

const OurDifference = () => {
  const difference = [
    {
      id: 1,
      title: "Transparency",
      text: "Experience true transparency in the voting process. Our process offers a crystal-clear audit trail for every vote cast, ensuring integrity confidence, and trust that your vote counts",
      textColor: '#008000'
    },
    {
      id: 2,
      title: "Security",
      text: "Our top priority is ensuring the security of your vote. With cutting-edge encryption and authentication measures, blockchain encryption protects your vote",
      textColor: '#00FFFF'
    },
    {
      id: 3,
      title: "Accessibility",
      text: "Our Website app breaks down barriers by allowing you to vote from any device, anywhere, at any time",
      textColor: '#FF0000'
    },
    {
      id: 4,
      title: "Convenience",
      text: "You can cast your vote with just a few taps on your device with our user-friendly interface which makes voting simple and convenient",
      textColor: '#8B0000'
    },
  ];
  return (
    <div className="wrapper flex flex-col gap-[30px] lg:gap-0 lg:flex-row py-[30px]">
      <div className="flex lg:w-1/2">
        <div className="flex flex-col lg:w-[70%] gap-5">
          <h1 className="text-4xl font-bold text-primary">
            What makes us different?
          </h1>
          <p className="text-md">
            BallotChain is here to fix the problems of old-school voting, making
            it simple, fair and safe for everyone to participate. With
            BallotChain, voting is an easy as sending a text securely from the
            comfort of your homes, anytime, everywhere!
          </p>
          <button className="btn rounded-[99px] w-[120px]">See more</button>
        </div>
        <div className="w-[30%] hidden lg:block">
          <img
            className="w-full"
            src="https://myballotchain.com/arrow/arrow.svg"
            alt="arrow"
          />
        </div>
      </div>
      <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-1 gap-5">
        {difference.map((item) => (
          <div key={item.id} className="w-full flex flex-col gap-2 h-[fit-content]">
            <p style={{ color: item.textColor }} className="border-b border-[#000] text-lg pb-2 ">{`0${item.id}.`}</p>
            <h6 className="font-bold text-md">{item.title}</h6>
            <p className="font-[300] text-md text-[#000]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurDifference;
