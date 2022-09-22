import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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
  const [hover, setHover] = useState(true);

  return (
    <div className="w-full">
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
      <nav className="navigation flex items-center justify-between bg-white px-32 py-4">
        <div className="brand">
          <Link href="/">
            <Image
              src="/../public/logo.png"
              width={118}
              height={37}
              alt="logo"
            />
          </Link>
        </div>
        <div className="menu">
          <ul className="flex items-center justify-between space-x-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="relative">
              <span onMouseEnter={() => setHover(false)}>
                About <FiChevronDown />
              </span>
              <div
                className={`absolute top-[70px] z-10 flex w-[250px] flex-col border-t-2 border-orange-700 bg-white p-0`}
              >
                <div className="z-20 py-3">
                  <div className=" absolute left-6 top-[-5px]  h-4 w-4 rotate-45 bg-white"></div>
                </div>
                <ul className="w-full">
                  <li className=" border-b-[1px] hover:bg-orange-300">
                    <Link href="/about">Yin Yang Yoga Academy</Link>
                  </li>
                  <li className="border-b-[1px]  hover:bg-orange-300">
                    <Link href="/about">Our Teachers</Link>
                  </li>
                  <li className="border-b-[1px]  hover:bg-orange-300">
                    <Link href="/about">Acommodation</Link>
                  </li>
                  <li className="border-b-[1px]  hover:bg-orange-300">
                    <Link href="/about">Reviews</Link>
                  </li>
                  <li className="  hover:bg-orange-300">
                    <Link href="/about">Blogs</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span onMouseEnter={() => setHover(false)}>
                Yoga Teacher Training <FiChevronDown />
              </span>
            </li>
            <li>
              <span onMouseEnter={() => setHover(false)}>
                Yoga Retreat <FiChevronDown />
              </span>
            </li>
            <li>Contact Us</li>
            <li>Pay Now</li>
            <li>Apply Now</li>
          </ul>

          <div
            className={`absolute left-[45%] top-28 z-10 hidden w-[300px] border-t-2 border-orange-700 bg-white `}
          >
            <ul>
              <li className=" border-b-[1px] py-2 px-2 hover:bg-orange-300">
                100 hours Yoga Teacher Training
              </li>
              <li className="border-b-[1px] py-2 px-2 hover:bg-orange-300">
                200 hours Yoga Teacher Training
              </li>
              <li className="border-b-[1px] py-2 px-2 hover:bg-orange-300">
                300 hours Yoga Teacher Training
              </li>
              <li className=" py-2 px-2 hover:bg-orange-300">
                500 hours Yoga Teacher Training
              </li>
            </ul>
          </div>
          <div
            className={`absolute left-[60%] top-28 z-10 w-[300px] border-t-2 border-orange-700 bg-white `}
          >
            <ul>
              <li className=" border-b-[1px] py-2 px-2 hover:bg-orange-300">
                5 Day Yoga Retreat
              </li>
              <li className="border-b-[1px] py-2 px-2 hover:bg-orange-300">
                7 Chakra Yoga Retreat
              </li>
              <li className="border-b-[1px] py-2 px-2 hover:bg-orange-300">
                10 Day Yoga Retreat
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
