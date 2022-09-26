import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../public/logo.png";
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

const Header = () => {
  const [hover, setHover] = useState({
    about: false,
    yogaTeacher: false,
    yogaTreat: false,
  });

  return (
    <div className="">
      <div className="topbar flex justify-between bg-gray-800 px-32 py-2">
        <div className="flex w-2/6 items-center justify-end space-x-3  px-2 text-white">
          <BiLocationPlus size={20} color="orange" />
          <span className="text-sm">
            Near Anandham Ashram, Tapovan, Rishikesh
          </span>
        </div>
        <div className="flex w-1/6 items-center justify-end space-x-3  px-2 text-white">
          <BiPhoneCall size={20} color="orange" />
          <span className="text-sm">+91 123 456 789</span>
        </div>
        <div className="flex w-2/6 items-center justify-end space-x-3  px-2 text-white">
          <BiEnvelope size={20} color="orange" />
          <span className="text-sm">rishikeshyogkulam@gmail.com </span>
        </div>
        <div className="flex w-1/6 items-center justify-center space-x-3  text-white">
          <FaFacebook size={20} color="orange" />
          <FaInstagram size={20} color="orange" />
          <FaTwitter size={20} color="orange" />
          <FaYoutube size={20} color="orange" />
          <FaPinterest size={20} color="orange" />
          <FaTripadvisor size={20} color="orange" />
        </div>
      </div>
      <nav className=" flex w-full items-center justify-between bg-white px-32 py-4 shadow">
        <div className="brand">
          <Link href="/">
            <Image src={logo} width={130} height={45} alt="logo" />
          </Link>
        </div>
        <div className="menu">
          <ul className="flex items-center justify-between space-x-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="relative">
              <span onMouseEnter={() => setHover({ ...hover, about: true })}>
                About <FiChevronDown />
              </span>
              <div
                onMouseLeave={() => setHover({ ...hover, about: !hover.about })}
                className={`${
                  hover.about ? "inline-block" : "hidden"
                } absolute top-[70px] z-10 flex w-[250px] flex-col border-t-2 border-orange-700 bg-white p-0`}
              >
                <div className="z-20 py-3">
                  <div className=" absolute left-6 top-[-5px]  h-4 w-4 rotate-45 bg-white"></div>
                </div>
                <ul className="w-full">
                  <li className=" border-b-[1px] hover:bg-orange-300">
                    <Link href="/about">Yin Yang Yoga Academy</Link>
                  </li>
                  <li className="border-b-[1px]  hover:bg-orange-300">
                    <Link href="/about/our-teachers">Our Teachers</Link>
                  </li>
                  <li className="border-b-[1px]  hover:bg-orange-300">
                    <Link href="/about/accomodation">Acommodation</Link>
                  </li>
                  <li className="border-b-[1px]  hover:bg-orange-300">
                    <Link href="/about/reviews">Reviews</Link>
                  </li>
                  <li className="  hover:bg-orange-300">
                    <Link href="/about/blogs">Blogs</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span
                onMouseEnter={() => setHover({ ...hover, yogaTeacher: true })}
              >
                Yoga Teacher Training <FiChevronDown />
              </span>
              <div
                onMouseLeave={() =>
                  setHover({ ...hover, yogaTeacher: !hover.yogaTeacher })
                }
                className={`${
                  hover.yogaTeacher ? "inline-block" : "hidden"
                } absolute top-[70px] z-10 flex w-[270px] flex-col border-t-2 border-orange-700 bg-white p-0`}
              >
                <div className="z-20 py-3">
                  <div className=" absolute left-6 top-[-5px]  h-4 w-4 rotate-45 bg-white p-0"></div>
                </div>
                <ul className="w-full">
                  <li className=" border-b-[1px]   hover:bg-orange-300">
                    <Link href="/yoga-teacher-training/100-hours">
                      100 hours Yoga Teacher Training
                    </Link>
                  </li>
                  <li className="border-b-[1px]   hover:bg-orange-300">
                    <Link href="/yoga-teacher-training/200-hours">
                      200 hours Yoga Teacher Training
                    </Link>
                  </li>
                  <li className="border-b-[1px]  hover:bg-orange-300">
                    <Link href="/yoga-teacher-training/300-hours">
                      300 hours Yoga Teacher Training
                    </Link>
                  </li>
                  <li className="   hover:bg-orange-300">
                    <Link href="/yoga-teacher-training/500-hours">
                      500 hours Yoga Teacher Training
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span
                onMouseEnter={() => setHover({ ...hover, yogaTreat: true })}
              >
                Yoga Retreat <FiChevronDown />
              </span>
              <div
                onMouseLeave={() =>
                  setHover({ ...hover, yogaTreat: !hover.yogaTreat })
                }
                className={`${
                  hover.yogaTreat ? "inline-block" : "hidden"
                } absolute top-[70px] z-10 flex w-[270px] flex-col border-t-2 border-orange-700 bg-white p-0`}
              >
                <div className="z-20 py-3">
                  <div className=" absolute left-6 top-[-5px]  h-4 w-4 rotate-45 bg-white p-0"></div>
                </div>
                <ul className="w-full">
                  <li className=" border-b-[1px]  hover:bg-orange-300">
                    <Link href="/retreat/5-days"> 5 Day Yoga Retreat</Link>
                  </li>
                  <li className="border-b-[1px]   hover:bg-orange-300">
                    <Link href="/retreat/chakra">7 Chakra Yoga Retreat</Link>
                  </li>
                  <li className="border-b-[1px]  hover:bg-orange-300">
                    <Link href="/retreat/10-days"> 10 Day Yoga Retreat</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>Contact Us</li>
            <li>Pay Now</li>
            <li>Apply Now</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
