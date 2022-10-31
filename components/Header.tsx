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
    <div className="fixed z-[100] hidden w-full bg-white md:block">
      <div className="topbar flex justify-between bg-gray-800 px-32 py-2 text-white">
        <div className="flex w-2/6 items-center justify-end space-x-3  px-2">
          <BiLocationPlus size={20} color="orange" />
          <span className="text-sm">
            Near Anandham Ashram, Tapovan, Rishikesh
          </span>
        </div>
        <div className="flex w-1/6 items-center justify-end space-x-3  px-2 ">
          <BiPhoneCall size={20} color="orange" />
          <span className="text-sm">+91 123 456 789</span>
        </div>
        <div className="flex w-2/6 items-center justify-end space-x-3  px-2 ">
          <BiEnvelope size={20} color="orange" />
          <span className="text-sm">rishikeshyogkulam@gmail.com </span>
        </div>
        <div className="flex w-1/6 items-center justify-center space-x-3 ">
          <FaFacebook size={20} color="orange" />
          <FaInstagram size={20} color="orange" />
          <FaTwitter size={20} color="orange" />
          <FaYoutube size={20} color="orange" />
          <FaPinterest size={20} color="orange" />
          <FaTripadvisor size={20} color="orange" />
        </div>
      </div>
      <nav className=" flex w-full items-center justify-between  px-32 py-2 shadow">
        <div className="brand">
          <Link href="/">
            <Image src={logo} width={130} height={45} alt="logo" />
          </Link>
        </div>
        <div className="menu">
          <ul className="flex items-center justify-between space-x-8">
            <li className="hover:bg-[#bd0006] hover:text-white">
              <Link href="/">Home</Link>
            </li>
            <li
              className="relative hover:bg-[#bd0006] hover:text-white "
              onMouseLeave={() =>
                setHover({
                  ...hover,
                  about: false,
                })
              }
              onMouseEnter={() => setHover({ ...hover, about: true })}
            >
              <span>
                About <FiChevronDown />
              </span>
              <div
                className={`${
                  hover.about ? "" : "hidden"
                } absolute top-[50px] z-10 flex w-[250px] flex-col border-t-2 border-orange-700 bg-white p-0`}
              >
                <div className="z-40">
                  <div className=" absolute left-6 top-[-5px]  h-4 w-4 rotate-45 bg-white"></div>
                </div>
                <ul className="w-full">
                  <li className=" border-b-[1px] text-black hover:bg-orange-300  hover:text-white">
                    <Link href="/about">Yin Yang Yoga Academy</Link>
                  </li>
                  <li className="border-b-[1px]  text-black hover:bg-orange-300  hover:text-white">
                    <Link href="/about/our-teachers">Our Teachers</Link>
                  </li>
                  <li className="border-b-[1px] text-black hover:bg-orange-300 hover:text-white">
                    <Link href="/about/accomodation">Acommodation</Link>
                  </li>
                  <li className="border-b-[1px] text-black hover:bg-orange-300 hover:text-white">
                    <Link href="/about/reviews">Reviews</Link>
                  </li>
                  <li className=" text-black hover:bg-orange-300 hover:text-white">
                    <Link href="/about/blogs">Blogs</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="relative hover:bg-[#bd0006] hover:text-white"
              onMouseLeave={() =>
                setHover({
                  ...hover,
                  yogaTeacher: false,
                })
              }
              onMouseEnter={() =>
                setTimeout(() => {
                  setHover({
                    ...hover,
                    yogaTeacher: true,
                  });
                }, 500)
              }
            >
              <span
                onMouseEnter={() => setHover({ ...hover, yogaTeacher: true })}
              >
                Yoga Teacher Training <FiChevronDown />
              </span>
              <div
                onMouseEnter={() => setHover({ ...hover, yogaTeacher: true })}
                onMouseLeave={() =>
                  setTimeout(() => {
                    setHover({ ...hover, yogaTeacher: false });
                  }, 300)
                }
                className={`${
                  hover.yogaTeacher ? "inline-block" : "hidden"
                } absolute top-[50px] z-10 flex w-[270px] flex-col border-t-2 border-orange-700 bg-white p-0 shadow`}
              >
                <div className="z-20">
                  <div className=" absolute left-6 top-[-5px]  h-4 w-4 rotate-45 bg-white p-0"></div>
                </div>
                <ul className="w-full">
                  <li className=" border-b-[1px]  text-black hover:bg-orange-300 hover:text-white">
                    <Link href="/yoga-teacher-training/100-hours">
                      100 hours Yoga Teacher Training
                    </Link>
                  </li>
                  <li className="border-b-[1px] text-black  hover:bg-orange-300   hover:text-white">
                    <Link href="/yoga-teacher-training/200-hours">
                      200 hours Yoga Teacher Training
                    </Link>
                  </li>
                  <li className="border-b-[1px]  text-black hover:bg-orange-300  hover:text-white">
                    <Link href="/yoga-teacher-training/300-hours">
                      300 hours Yoga Teacher Training
                    </Link>
                  </li>
                  <li className="   text-black hover:bg-orange-300 hover:text-white">
                    <Link href="/yoga-teacher-training/500-hours">
                      500 hours Yoga Teacher Training
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="relative hover:bg-[#bd0006] hover:text-white"
              onMouseLeave={() =>
                setHover({
                  ...hover,
                  yogaTreat: false,
                })
              }
            >
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
                } absolute top-[50px] z-10 flex w-[270px] flex-col border-t-2 border-orange-700 bg-white p-0`}
              >
                <div className="z-20">
                  <div className=" absolute left-6 top-[-5px]  h-4 w-4 rotate-45 bg-white p-0"></div>
                </div>
                <ul className="w-full">
                  <li className=" border-b-[1px] text-black hover:bg-orange-300 hover:text-white">
                    <Link href="/retreat/5-days-retreat">
                      5 Day Yoga Retreat
                    </Link>
                  </li>
                  <li className="border-b-[1px] text-black  hover:bg-orange-300  hover:text-white">
                    <Link href="/retreat/chakra">7 Chakra Yoga Retreat</Link>
                  </li>
                  <li className="border-b-[1px] text-black  hover:bg-orange-300 hover:text-white">
                    <Link href="/retreat/10-days-retreat">
                      10 Day Yoga Retreat
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="hover:bg-[#bd0006] hover:text-white">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="hover:bg-[#bd0006] hover:text-white">Pay Now</li>
            <li className="animated-btn cursor-pointer bg-orange-600 px-4 py-2 font-[700] text-white">
              Apply Now
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
