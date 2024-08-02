import React from "react";

const Analytics = () => {
  const analytics = [
    {
      id: 1,
      digit: "400+",
      text: "Active events hosted across our platform",
    },
    {
      id: 2,
      digit: "50+",
      text: "Active hosts",
    },
    {
      id: 3,
      digit: "1k+",
      text: "Active users",
    },
  ];
  return (
    <div className="wrapper flex justify-center py-[30px]">
      <div className="bg-primary rounded-[8px] w-full md:w-[80%] flex flex-col gap-[50px] sm:gap-0 sm:flex-row sm:justify-between p-[30px] lg:p-[50px] text-white">
        {analytics.map((item) => (
          <div key={item.id} className="flex flex-col text-center items-center">
            <h1 className="text-3xl font-bold">{item.digit}</h1>
            <p className="md:w-[200px] w-[150px]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
