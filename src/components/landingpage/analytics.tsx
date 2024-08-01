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
    <div className="wrapper py-[30px]">
      <div className="bg-primary rounded-[8px] flex flex-col gap-5 lg:flex-row lg:justify-between p-[30px] lg:p-[50px] text-white">
        {analytics.map((item) => (
          <div key={item.id} className="flex flex-col text-center items-center">
            <h1 className="text-3xl font-bold">{item.digit}</h1>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
