import Image from "next/image";
import React from "react";
import { FaCcDiscover, FaCcVisa } from "react-icons/fa";
import {
  IoCallOutline,
  IoLocateOutline,
  IoLogoPaypal,
  IoMailOutline,
  IoSendOutline,
} from "react-icons/io5";
import { RiMastercardFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div className="flex w-full flex-col items-center bg-orange-700 px-8 py-4 md:flex-row  md:space-x-4 md:py-8 md:px-32">
        <div className="w-full md:w-1/2">
          <p className="text-[14px] font-medium text-gray-100 md:text-[20px]">
            Want To know More About Us
          </p>
          <h2 className=" text-[26px] font-medium text-white md:text-[40px]">
            Subscribe To Our Newsletter
          </h2>
        </div>
        <div className="flex items-center  md:w-1/2 md:space-x-4">
          <input
            className="w-full border-0  py-2 md:rounded md:py-4"
            type="email"
            placeholder="Enter Email Address"
          />
          <button className="flex items-center space-x-2 bg-black px-2 py-2 font-medium text-white md:rounded md:px-4 md:py-4">
            <span>Subscribe</span>
            <IoSendOutline />
          </button>
        </div>
      </div>
      <div className=" footer-pattern px-8 py-4 md:px-32 md:py-16" id="footer">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brands Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/logo-icon.png"
                height={395 / 4}
                width={632 / 4}
                alt="logo"
              />
              <p className="text-[26px] font-bold leading-5 text-orange-600">
                Yin Yang <br />
                <span className="text-base text-yellow-500">Yoga Academy</span>
              </p>
            </div>
            <p className="text-sm text-white">
              Rishikesh Yogkulam exists to bring the authentic teachings of yoga
              back to yoga; both on and off the mat. And to create a physical
              and virtual place for a conscious community to practice the art,
              science, and philosophy of authentic yoga.
            </p>
            <Image
              src="https://www.yogkulam.org/images/rys.png"
              height={70}
              width={235}
              alt="affliation"
            />
          </div>
          {/* Quick Links */}
          <div className="flex flex-col justify-center">
            <p className="text-lg font-semibold text-white">Quick Link</p>
            <div className="mb-4 h-[2px] w-1/3 bg-orange-600"></div>
            <ul className="list-none space-y-4 text-white">
              <li className="cursor-pointer hover:text-orange-600"> Home</li>
              <li className="cursor-pointer hover:text-orange-600">
                Yoga Teacher Training
              </li>
              <li className="cursor-pointer hover:text-orange-600">
                Contact Us
              </li>
              <li className="cursor-pointer hover:text-orange-600">About Us</li>
              <li className="cursor-pointer hover:text-orange-600">
                Refund Policy
              </li>
              <li className="cursor-pointer hover:text-orange-600">
                Privacy Policy
              </li>
            </ul>
          </div>
          {/* Teacher Training Program  */}
          <div className="flex flex-initial flex-col">
            <p className="text-lg font-semibold text-white">
              Yoga Teacher Training
            </p>
            <div className="mb-4 h-[2px] w-1/3 bg-orange-600"></div>
            <ul className="list-none space-y-4 text-white">
              <li className="cursor-pointer hover:text-orange-600">
                100 hour yoga teacher training
              </li>
              <li className="cursor-pointer hover:text-orange-600">
                200 hour yoga teacher training
              </li>
              <li className="cursor-pointer hover:text-orange-600">
                300 hour yoga teacher training
              </li>
              <li className="cursor-pointer hover:text-orange-600">
                500 hour yoga teacher training
              </li>
              {/* <li className="cursor-pointer hover:text-orange-600">
                100 hour Ayurveda yoga teacher training
              </li>
              <li className="cursor-pointer hover:text-orange-600">
                200 hour Ayurveda yoga teacher training
              </li> */}
            </ul>
          </div>
          {/* Contact Information  */}
          <div className="flex flex-col justify-center">
            <p className="text-lg font-semibold text-white">Get In Touch</p>
            <div className="mb-4 h-[2px] w-1/3 bg-orange-600"></div>
            <ul className="list-none space-y-4 text-white">
              <li className="flex w-full cursor-pointer space-x-4 hover:text-orange-600 ">
                <IoLocateOutline className="w-1/6" size={25} />{" "}
                <span className="w-5/6">
                  Laxman Chowk Road, Near Anandham Ashram, Tapovan, Rishikesh,
                  Uttarakhand 249192
                </span>
              </li>
              <li className="flex w-full cursor-pointer space-x-4 hover:text-orange-600 ">
                <IoCallOutline className="w-1/6" size={25} />{" "}
                <span className="w-5/6">+91 8218114342, +918979596944</span>
              </li>
              <li className="flex w-full cursor-pointer space-x-4 hover:text-orange-600 ">
                <IoMailOutline className="w-1/6" size={25} />{" "}
                <span className="w-5/6">rishikeshyogkulam@gmail.com</span>
              </li>
            </ul>
            <p className="mt-4 text-lg font-semibold text-white">
              Payment Options
            </p>
            <div className="mb-4 h-[2px] w-1/3 bg-orange-600"></div>
            <div className="grid grid-cols-4 gap-2 text-white">
              <IoLogoPaypal size={26} />
              <RiMastercardFill size={26} />
              <FaCcVisa size={26} />
              <FaCcDiscover size={26} />
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="flex items-center justify-center space-x-2 bg-gray-900 p-3 text-white">
        <span>Copyright &copy; 2022</span>
        <a className="hover:text-orange-600"> YinYang Yoga Academy</a>
      </div>
    </footer>
  );
};

export default Footer;
