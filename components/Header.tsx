import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../public/logo-white.png";
import { BiEnvelope, BiLocationPlus, BiPhoneCall } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTripadvisor,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";
import { useRouter } from "next/router";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const MenuHover = [
    {
      title: " About",
      subtitle: [
        "Yin Yang Yoga Academy",
        "Our Teachers",
        "Acommodation",
        "Reviews",
        "Blogs",
      ],
      links: [
        "/about",
        "/about/our-teachers",
        "/about/accomodation",
        "/about/reviews",
        "/about/blogs",
      ],
    },
    {
      title: "Yoga Teacher Training",
      subtitle: [
        "100 Hours YTTC",
        "200 Hours YTTC",
        "300 Hours YTTC",
        "500 Hours YTTC",
        "100 Hours Ayurveda YTTC",
        "200 Hours Ayurveda YTTC",
      ],
      links: [
        "/yoga-teacher-training/100-hour-yttc",
        "/yoga-teacher-training/200-hour-yttc",
        "/yoga-teacher-training/300-hour-yttc",
        "/yoga-teacher-training/200-hour-yttc",
        "/yoga-teacher-training/ayurveda",
        "/yoga-teacher-training/ayurveda",
      ],
    },
    {
      title: "Yoga Retreat",
      subtitle: [
        "5 Day Yoga Retreat",
        "10 Day Yoga Retreat ",
        "7 Day Chakra Yoga Retreat",
      ],
      links: [
        "/retreat/5-days-retreat",
        "/retreat/10-days-retreat",
        "/retreat/chakra",
      ],
    },
  ];

  return (
    <div className=" sticky top-0  z-50 w-full bg-white md:block ">
      <div className="topbar z-10 hidden justify-between bg-gray-800 py-2 px-4 text-white md:flex md:px-6 lg:px-4 xl:px-8">
        <div className="flex w-2/6 items-center  space-x-3  px-2">
          <BiLocationPlus size={20} color="lightgray" />
          <span className="text-sm">
            Near Anandham Ashram, Tapovan, Rishikesh
          </span>
        </div>
        <div className="flex w-1/6 items-center justify-end space-x-3  px-2 ">
          <BiPhoneCall size={20} color="lightgray" />
          <span className="text-sm">+91 123 456 789</span>
        </div>
        <div className="flex w-2/6 items-center justify-end space-x-3  px-2 ">
          <BiEnvelope size={20} color="lightgray" />
          <span className="text-sm">rishikeshyogkulam@gmail.com </span>
        </div>
        <div className="flex w-1/6 items-center justify-center space-x-3 ">
          <FaFacebook size={20} color="lightgray" />
          <FaInstagram size={20} color="lightgray" />
          <FaTwitter size={20} color="lightgray" />
          <FaYoutube size={20} color="lightgray" />
          <FaPinterest size={20} color="lightgray" />
          <FaTripadvisor size={20} color="lightgray" />
        </div>
      </div>
      <nav className=" relative z-50 flex w-full items-center justify-around py-2 shadow md:px-8 lg:space-x-24 lg:px-8 xl:space-x-20 xl:px-32">
        <div className="absolute top-2 left-4">
          <div className="  z-50 flex h-full  cursor-pointer items-center justify-center rounded-tl-3xl rounded-br-3xl bg-[#bd0006] p-4 drop-shadow-lg  ">
            <Link href="/">
              <Image src={logo} width={880 / 7} height={283 / 7} alt="logo" />
            </Link>
          </div>
        </div>
        <div
          className=" flex w-full justify-end p-4  lg:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className={`font-semibold  tracking-[0.3rem] text-[#bd0006]`}>
            {openMenu ? "CLOSE" : "MENU"}
            <div className="h-[2px] w-1/2 bg-[#bd0006] duration-300 ease-linear hover:w-3/4"></div>
          </span>
        </div>

        <div className="hidden h-max w-full   lg:block">
          <ul className=" flex cursor-pointer items-center justify-center  space-x-4 font-semibold  ">
            <li
              className={`${
                router.pathname === "/" ? "text-[#bd0006]" : "text-black"
              } hover:text-[#bd0006] lg:p-3 xl:p-4`}
            >
              <Link href="/">Home</Link>
            </li>
            {MenuHover.map((item, index) => {
              return (
                <DropdownMenu
                  openMenu={openMenu}
                  setOpenMenu={setOpenMenu}
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  links={item.links}
                  router={router.pathname}
                />
              );
            })}
            <li
              className={`${
                router.pathname === "/contact" ? "text-[#bd0006]" : "text-black"
              } hover:text-[#bd0006] lg:p-3 xl:p-4`}
            >
              <Link href="/contact">Contact Us</Link>
            </li>
            <li
              className={`${
                router.pathname === "/pay" ? "text-[#bd0006]" : "text-black"
              } hover:text-[#bd0006] lg:p-3 xl:p-4`}
            >
              <Link href="/pay">Pay Now</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu  */}
      <div className={`${openMenu ? "" : "hidden"}  mt-5 h-screen  p-3`}>
        <ul className=" flex flex-col items-center space-y-4 space-x-4   md:text-base lg:justify-around lg:text-lg ">
          <li className="  hover:text-[#bd0006] lg:p-4">
            <Link href="/">Home</Link>
          </li>
          {MenuHover.map((item, index) => {
            return (
              <DropdownMenu
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                links={item.links}
                router={router.pathname}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />
            );
          })}
          <li className="p-4 hover:text-[#bd0006]">
            <Link href="/contact">Contact Us</Link>
          </li>
          <li className="p-4 hover:text-[#bd0006]">
            <Link href="/pay">Pay Now</Link>
          </li>
          <li className="rounded bg-[#bd0006] p-2 text-white">
            <Link href="/apply">Apply Now</Link>
          </li>
        </ul>
      </div>
      <div className=" swingBtn fixed top-0 right-7 z-50 hidden cursor-pointer lg:block">
        <Link href="/apply">
          <Image
            src={"/applynow.png"}
            height={200}
            width={200}
            alt="apply now "
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
