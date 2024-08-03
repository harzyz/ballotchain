"use client";
import Image from "next/image";
import React, { useState } from "react";
import BallotChainLogo from "@/assets/images/ballotchain-logo.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const navItems = [
    {
      id: 0,
      navItem: "Home",
      link: '#home'
    },
    {
      id: 2,
      navItem: "About Us",
      link: '#about-us'
    },
    {
      id: 3,
      navItem: "Pricing",
      subMenu: ["Pricing", "How It Works"],
      link: ''
    },
    {
      id: 4,
      navItem: "Who we serve",
      link: '#start'
    },
    {
      id: 5,
      navItem: "Contact",
      subMenu: ["Contact Us", "Support"],
      link: ''
    },
    {
      id: 6,
      navItem: "FAQ",
      link: '#faq'
    },
  ];

  const toggle = (id: number) => {
    if (isActive == id) {
      setIsActive(0);
    } else {
      setIsActive(id);
    }
  };
  return (
    <div className="wrapper bg-[#ffffffb3] z-20 sticky top-0 flex gap-[100px] justify-between items-center h-[100px]">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`toggle lg:hidden transition-all duration-500 ${
          isOpen ? "change" : ""
        } `}
      >
        <div className="toggler"></div>
        <div className="toggler"></div>
        <div className="toggler"></div>
      </div>

      <div className="w-[64px] mt-[-10px] h-[84px]">
        <Image
          className="w-full h-full"
          src={BallotChainLogo}
          alt="BallotChain Logo"
        />
      </div>
      <nav className="h-full hidden w-full justify-end lg:flex items-center">
        <ul className="flex xl:gap-5 gap-4 w-full justify-end items-center">
          {navItems.map((item) => (
            <div key={item.id}>
              {item.navItem !== "Pricing" && item.navItem !== "Contact" ? (
                <Link href={item.link}>
                  <li
                    onClick={() => toggle(item.id)}
                    className={`py-2 px-3 xl:text-sm text-xs rounded-[8px] hover:bg-primary hover:text-[#ffff] ${
                      isActive === item.id ? "bg-primary text-[#fff]" : ""
                    }`}
                  >
                    {item.navItem}
                  </li>
                </Link>
              ) : (
                <Menu>
                  <MenuButton
                    onClick={() => toggle(item.id)}
                    className={`py-2 flex items-center gap-2 px-3 xl:text-sm text-xs rounded-[8px] hover:bg-primary hover:text-[#ffff] ${
                      isActive === item.id ? "bg-primary text-[#fff]" : ""
                    }`}
                  >
                    {item.navItem} <FaCaretDown />
                  </MenuButton>
                  <MenuItems
                    className="z-20 flex flex-col gap-1 p-2 "
                    anchor="bottom"
                  >
                    {item?.subMenu?.map((menu) => (
                      <MenuItem key={menu}>
                        <a className="block px-3 py-2 bg-primary text-white data-[focus]:bg-[#6681A1]">
                          {menu}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              )}
            </div>
          ))}

          <div>
            {/* <Menu>
              <MenuButton className="py-2 px-3 xl:text-sm text-xs rounded-[8px] hover:bg-primary hover:text-[#ffff]">
                My account
              </MenuButton>
              <MenuItems className="z-20" anchor="bottom">
                <MenuItem>
                  <a
                    className="block data-[focus]:bg-blue-100"
                    href="/settings"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block data-[focus]:bg-blue-100" href="/support">
                    Support
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block data-[focus]:bg-blue-100" href="/license">
                    License
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu> */}
          </div>

          <li className="btn xl:text-sm text-xs bg-white border border-primary text-primary hover:bg-primary hover:text-[#ffff]">
            Sign In
          </li>
          <li className="btn xl:text-sm text-xs">Create Account</li>
        </ul>
      </nav>

      <div
        className={`absolute top-[100%] h-[100vh] left-0 bg-[#FCFCFE] transition-all duration-500 lg:hidden ${
          isOpen ? "w-full" : "w-0"
        }`}
      >
        <ul
          className={`flex flex-col gap-[20px] p-5 justify-between ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className="py-2 px-3 text-sm rounded-[8px] hover:bg-primary hover:text-[#ffff]"
            >
              {item.navItem}
            </li>
          ))}

          <li className="btn bg-white border border-primary text-primary hover:bg-primary hover:text-[#ffff]">
            Sign In
          </li>
          <li className="btn">Create Account</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
