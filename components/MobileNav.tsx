import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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

interface Props {
  displayLogo: boolean;
}

const MobileNav = ({ displayLogo }: Props) => {
  const [open, setOpen] = useState<string | number | boolean | string[]>(false);
  const [drop, setDrop] = useState(-1);

  return (
    <div className=" fixed z-50 flex w-full items-center justify-between px-8  md:hidden">
      <div>
        <Image
          className={`${displayLogo ? "opacity-100" : "opacity-0"}`}
          src="/logotrans.png"
          alt="logo trans"
          width={240 / 2}
          height={150 / 2}
        />
      </div>
      <label className="swap-rotate swap z-20  rounded-full bg-orange-600 p-1">
        <input
          onChange={() => setOpen(!open)}
          type="checkbox"
          className="opacity-0"
          value={open}
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
        <ul className="relative space-y-4 text-xl text-white">
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
            <Link href="/about">
              <li className="pl-4">About Yin Yoga Academy</li>
            </Link>
            <Link href="/about/accomodation">
              <li className="pl-4">Accomodations</li>
            </Link>
            <Link href="/about/our-teachers">
              <li className="pl-4">Our Teachers</li>
            </Link>
          </ul>
          <li className=" flex items-center space-x-2 ">
            <div onClick={() => setDrop(2)}>Yoga Teacher Training </div>
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
            <Link href="/yoga-teacher-training/100-hours-yttc">
              <li className="pl-4">100Hrs Hours Yoga Teacher Training</li>
            </Link>
            <Link href="/yoga-teacher-training/100-hours-yttc">
              <li className="pl-4">200Hrs Hours Yoga Teacher Training</li>
            </Link>
            <Link href="/yoga-teacher-training/200-hours-yttc">
              <li className="pl-4">300Hrs Hours Yoga Teacher Training</li>
            </Link>
            <Link href="/yoga-teacher-training/300-hours-yttc">
              <li className="pl-4">500Hrs Hours Yoga Teacher Training</li>
            </Link>
            <Link href="/yoga-teacher-training/500-hours-yttc">
              <li className="pl-4">
                100Hrs Hours Ayurveda Yoga Teacher Training
              </li>
            </Link>
            <Link href="/yoga-teacher-training/ayurveda">
              <li className="pl-4" onClick={() => setOpen("false")}>
                200Hrs Hours Ayurveda Yoga Teacher Training
              </li>
            </Link>
          </ul>
          <li className=" flex items-center space-x-2 ">
            <div onClick={() => setDrop(1)}>Yoga Retreat </div>
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
            <Link href="/retreat/5-days-retreat">
              <li className="pl-4">5 Day Yoga Retreat</li>
            </Link>
            <Link href="/retreat/chakra">
              <li className="pl-4">7 Day Chakra Yoga Retreat</li>
            </Link>
            <Link href="/retreat/10-days-retreat">
              <li className="pl-4">10 Day Yoga Retreat</li>
            </Link>
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
