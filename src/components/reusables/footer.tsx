import React from "react";
import BallotChainLogo from "@/assets/images/ballotchain-logo.png";
import XIcon from "@/assets/icons/x-icon.svg";
import LinkedInIcon from "@/assets/icons/linkedin-icon.svg";
import InstagramIcon from "@/assets/icons/instagram-icon.svg";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {

  const date = new Date
  const year = date.getFullYear()
  const company = [
    {
      id: 1,
      text: "Our Portfolio",
    },
    {
      id: 2,
      text: "About us",
    },
  ];
  const resources = [
    {
      id: 1,
      text: "Login",
    },
    {
      id: 2,
      text: "FAQ",
    },
    {
      id: 3,
      text: "Our services",
    },
    {
      id: 4,
      text: "Latest article",
    },
  ];
  const support = [
    {
      id: 1,
      text: "Contact us",
    },
    {
      id: 2,
      text: "Blog",
    },
    {
      id: 3,
      text: "Book a demon",
    },
    {
      id: 4,
      text: "Getting started",
    },
    {
      id: 5,
      text: "Help center",
    },
  ];
  return (
    <footer className="wrapper py-[50px]">
      <div className="w-full flex flex-col gap-[30px] ps-[20px] md:flex-row md:justify-between">
        <div className="flex flex-col gap-5">
          <div className="w-[100px] h-[150px]">
            <Image
              className="w-full h-full"
              src={BallotChainLogo}
              alt="BallotChainLogo"
            />
          </div>
          <div className="flex gap-[20px]">
            <Image src={XIcon} alt="BallotChainLogo" />
            <Image src={LinkedInIcon} alt="BallotChainLogo" />
            <Image src={InstagramIcon} alt="BallotChainLogo" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <FaLocationDot size={20} />
              <span className="w-[180px]">
                {" "}
                7a Christ Avenue Lekki Lagos, Nigeria
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone size={20} /> <span>+234 123 1234 56</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-0 md:grid-cols-3">
          <div className=" flex flex-col md:px-[10px] lg:px-[40px]">
            <h4 className="text-2xl font-bold text-primary">Company</h4>
            <ul className="">
              {company.map((item) => (
                <li className="text-md cursor-pointer" key={item.id}>{item.text}</li>
              ))}
            </ul>
          </div>
          <div className=" flex flex-col md:px-[10px] lg:px-[40px]">
            <h4 className="text-2xl font-bold text-primary">Resources</h4>
            <ul className="">
              {resources.map((item) => (
                <li className="text-md cursor-pointer" key={item.id}>{item.text}</li>
              ))}
            </ul>
          </div>
          <div className=" flex flex-col md:px-[10px] lg:px-[40px]">
            <h4 className="text-2xl font-bold text-primary">Support</h4>
            <ul className="">
              {support.map((item) => (
                <li className="text-md cursor-pointer" key={item.id}>{item.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center pt-[30px]">
        Copyright {year} All Rights Reserved {" "}
        <span className="font-bold">Terms and Conditions Privacy Policy</span>
      </p>
    </footer>
  );
};

export default Footer;
