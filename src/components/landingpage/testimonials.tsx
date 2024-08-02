import React from "react";
import { FaStar } from "react-icons/fa";
import manImage from "@/assets/images/dummy.png";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, perferendis nemo aperiam porro illum reiciendis, commodi repudiandae sint doloremque voluptatibus sapiente. Doloribus, ipsum at animi maxime vitae hic id quaerat.",
      text: "Joe Doe",
      imgUrl: manImage,
    },
    {
      id: 2,
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, perferendis nemo aperiam porro illum reiciendis, commodi repudiandae sint doloremque voluptatibus sapiente. Doloribus, ipsum at animi maxime vitae hic id quaerat.",
      text: "Joe Doe",
      imgUrl: manImage,
    },
    {
      id: 3,
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, perferendis nemo aperiam porro illum reiciendis, commodi repudiandae sint doloremque voluptatibus sapiente. Doloribus, ipsum at animi maxime vitae hic id quaerat.",
      text: "Joe Doe",
      imgUrl: manImage,
    },
  ];
  const star = [1, 2, 3, 4, 5];
  return (
    <div className="wrapper flex flex-col gap-[40px]">
      <h1 className="text-center text-3xl text-primary font-bold">
        Testimonials
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {testimonials.map((item) => (
          <div key={item.id} className="bg-primary text-white p-5 rounded-[8px] flex flex-col items-center">
            <div className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] border-[5px] border-white rounded-[50%]">
              <Image
                className="w-full h-full rounded-[50%]"
                src={item.imgUrl}
                alt="dummy"
              />
            </div>
            <h3 className="font-bold text-xl">{item.text}</h3>
            <p className="text-center text-xs md:text-sm xl:text-lg font-[300]">{item.testimonial}</p>
            <div className="flex">
              {star.map((star) => (
                <FaStar key={star} color="#FFA500" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
