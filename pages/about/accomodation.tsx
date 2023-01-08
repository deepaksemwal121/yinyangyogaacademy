import Image from "next/image";
import React from "react";
import { IoBedOutline } from "react-icons/io5";
import {
  MdHome,
  MdOutlineChromeReaderMode,
  MdOutlineRiceBowl,
  MdOutlineShower,
  MdOutlineWaterDrop,
  MdOutlineWifi,
} from "react-icons/md";
import Slider from "react-slick";
import Button from "../../components/Button";
import Teacherprofile from "../../components/sections/Teacherprofile";
import TrustPilotReview from "../../components/sections/TrustPilotReview";

const accomodation = () => {
  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const facilitiesData = [
    {
      title: "Simple and clean accommodation",
      icon: (
        <IoBedOutline
          className=" rounded-full bg-white p-2  shadow-lg"
          size={70}
        />
      ),
    },
    {
      title: "Hot & Cold Showers",
      icon: (
        <MdOutlineShower
          className=" rounded-full bg-white p-2  shadow-lg"
          size={70}
        />
      ),
    },
    {
      title: "Pure Vegetarian Food",
      icon: (
        <MdOutlineRiceBowl
          className=" rounded-full bg-white p-2  shadow-lg"
          size={70}
        />
      ),
    },
    {
      title: "24X7 Wifi Available",
      icon: (
        <MdOutlineWifi
          className=" rounded-full bg-white p-2  shadow-lg"
          size={70}
        />
      ),
    },
    {
      title: "RO filtered safe drinking water",
      icon: (
        <MdOutlineWaterDrop
          className=" rounded-full bg-white p-2  shadow-lg"
          size={70}
        />
      ),
    },
    {
      title: "Course material is provided.",
      icon: (
        <MdOutlineChromeReaderMode
          className=" rounded-full bg-white p-2  shadow-lg"
          size={70}
        />
      ),
    },
  ];
  return (
    <main>
      <section className=" hero-section flex h-[60vh] items-center  rounded-bl-[80px] py-8 px-4  md:px-6 lg:px-8 xl:px-32 ">
        <div className=" space-y-2 py-2">
          <p className=" font-semibold tracking-wide text-gray-200 md:text-xl">
            Enjoy The Yogic Culture with Home Like Experience
          </p>
          <h2 className=" fancy-font text-2xl  text-white drop-shadow md:text-3xl md:leading-[6rem] lg:text-4xl xl:text-5xl">
            Faclities & Accomodation
          </h2>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 text-white md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium "
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <a href="#" className="ml-1 text-sm font-medium  md:ml-2">
                    About
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium   md:ml-2">
                    Accomodation
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="space-y-4 py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
        <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
          Faciliteis At Yin Yang Yoga Academy
          <span>
            <Image
              src="/line-decor.png"
              width={568 / 2}
              height={94 / 2}
              alt="line-decor"
            />
          </span>
        </h2>
        <p className="text-center text-sm md:text-base">
          At Rishikesh Yogkulam, we understand the importance of a conducive
          environment for a healthy mind, body and soul. In the lap of the
          Himalayas, on the banks of the river Ganga, our school is ideally
          located to help you embrace a yogic lifestyle.
          <b>
            Accommodation is available on private as well as shared basis while
            the food is prepared in-house itself, specially designed to nurture
            your body allowing you to focus on your practice.
          </b>
          All in all, we strive to provide the best possible accommodation
          facilities and delicious, satvik food to ensure that everyone feels
          absolutely comfortable, warm and as homely as possible.
        </p>
        <div className="flex w-full flex-col-reverse items-center space-x-4  md:flex-row ">
          <div className="relative md:w-1/2">
            <Image
              src="https://www.yogkulam.org/images/acc/ryk-2.jpg"
              height={450}
              width={600}
              alt="accomadate"
              className="rounded-lg"
            />
            <div className="top-[8z0%] h-auto w-[80%] rounded-tr-[50px]  bg-[#de4c11] p-3 md:absolute md:h-[150px] md:p-8">
              <h3 className="text-xl text-white md:text-2xl md:text-[30px]">
                Yin Yang Yoga Academy
              </h3>
              <p className="text-sm text-[#f1f1f1] md:text-base">
                We Provide the Best Acommodation in Rishikesh with All Faciliies
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3  md:w-1/2">
            {facilitiesData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-2"
                >
                  <div className="text-center">{item.icon}</div>
                  <p className="text-center text-sm font-semibold md:text-base">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 md:px-6 lg:mt-20 lg:px-8 xl:px-16 2xl:px-32 ">
        <div className="space-x-3 overflow-x-hidden ">
          <Slider {...settings}>
            {[
              "https://www.yogkulam.org/images/acc/ryk-1.jpg",
              "https://www.yogkulam.org/images/acc/ryk-4.jpg",
              "https://www.yogkulam.org/images/acc/ryk-5.jpg",
              "https://www.yogkulam.org/images/acc/ryk-2.jpg",
              "https://www.yogkulam.org/images/acc/ryk-1.jpg",
              "https://www.yogkulam.org/images/acc/ryk-4.jpg",
              "https://www.yogkulam.org/images/acc/ryk-5.jpg",
              "https://www.yogkulam.org/images/acc/ryk-2.jpg",
            ].map((item, index) => {
              return (
                <div key={index} className="  p-3 drop-shadow">
                  <Image
                    className="rounded-lg "
                    src={item}
                    height={300}
                    width={400}
                    alt={item}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      <section className="patternBg py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
        <Teacherprofile />
      </section>
      <section className="py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
        <p className=" text-center font-medium uppercase tracking-wide text-[#bd0006]">
          our social reviews
        </p>
        <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
          Why We are the First Choice For YTTC
          <span>
            <Image
              src="/line-decor.png"
              width={568 / 2}
              height={94 / 2}
              alt="line-decor"
            />
          </span>
        </h2>
        <TrustPilotReview />
      </section>
    </main>
  );
};

export default accomodation;
