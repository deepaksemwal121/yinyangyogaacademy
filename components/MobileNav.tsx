import { useState } from "react";
import {
  IoChevronDown,
  IoChevronUp,
  IoCloseCircleOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
  IoMenu,
} from "react-icons/io5";
import Button from "./Button";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(-1);
  return (
    <div className="md:hidden">
      <label className="swap-rotate swap z-20  rounded-full bg-orange-600 p-1">
        <input
          onChange={() => setOpen(!open)}
          type="checkbox"
          className="opacity-0"
        />
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
      <div
        className={`fixed left-0 top-0 z-10 h-screen w-screen bg-gray-900 px-8 py-16  ${
          open ? "" : "hidden"
        }`}
      >
        <ul className="relative space-y-4 text-xl">
          <li>Home</li>
          <li className=" flex items-center space-x-2 ">
            <div onClick={() => setDrop(0)}>About </div>
            <div className="">
              {drop === 0 ? (
                <div onClick={() => setDrop(-1)} className="">
                  <IoChevronUp color="white" />
                </div>
              ) : (
                <div onClick={() => setDrop(0)}>
                  <IoChevronDown color="white" className="" />
                </div>
              )}
            </div>
          </li>
          <ul className={`space-y-2 text-base ${drop === 0 ? "" : "hidden"}`}>
            <li className="pl-4">100Hrs Hours Yoga Teacher Training</li>
            <li className="pl-4">200Hrs Hours Yoga Teacher Training</li>
            <li className="pl-4">300Hrs Hours Yoga Teacher Training</li>
            <li className="pl-4">500Hrs Hours Yoga Teacher Training</li>
          </ul>
          <li className=" flex items-center space-x-2 ">
            <div onClick={() => setDrop(1)}>Yoga Teacher Training </div>
            <div className="">
              {drop === 1 ? (
                <div onClick={() => setDrop(-1)} className="">
                  <IoChevronUp color="white" />
                </div>
              ) : (
                <div onClick={() => setDrop(1)}>
                  <IoChevronDown color="white" className="" />
                </div>
              )}
            </div>
          </li>
          <ul className={`space-y-2 text-base ${drop === 1 ? "" : "hidden"}`}>
            <li className="pl-4">100Hrs Hours Yoga Teacher Training</li>
            <li className="pl-4">200Hrs Hours Yoga Teacher Training</li>
            <li className="pl-4">300Hrs Hours Yoga Teacher Training</li>
            <li className="pl-4">500Hrs Hours Yoga Teacher Training</li>
          </ul>
          <li className=" flex items-center space-x-2 ">
            <div onClick={() => setDrop(2)}>Yoga Retreat </div>
            <div className="">
              {drop === 2 ? (
                <div onClick={() => setDrop(-1)} className="">
                  <IoChevronUp color="white" />
                </div>
              ) : (
                <div onClick={() => setDrop(2)}>
                  <IoChevronDown color="white" className="" />
                </div>
              )}
            </div>
          </li>
          <ul className={`space-y-2 text-base ${drop === 2 ? "" : "hidden"}`}>
            <li className="pl-4">100Hrs Hours Yoga Teacher Training</li>
            <li className="pl-4">200Hrs Hours Yoga Teacher Training</li>
            <li className="pl-4">300Hrs Hours Yoga Teacher Training</li>
            <li className="pl-4">500Hrs Hours Yoga Teacher Training</li>
          </ul>
          <li>Contact Us</li>
          <li>Blogs</li>
          <Button
            title="Apply Now"
            style="bg-orange-600 px-6 py-2 rounded text-sm"
            url="/apply"
          />
          <Button
            title="Pay Now"
            style="border border-orange-600 text-orange-600 px-8 py-2 rounded text-sm"
            url="/pay"
          />
        </ul>
        <div className="absolute bottom-6 left-[5%]  w-[90%] space-y-2 text-center  ">
          <div>Follow us on social media</div>
          <div className="flex justify-center space-x-4">
            <IoLogoFacebook size={20} />
            <IoLogoInstagram size={20} />
            <IoLogoPinterest size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
