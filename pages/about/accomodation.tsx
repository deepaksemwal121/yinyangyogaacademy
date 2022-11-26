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
          <div className="breadcrumbs text-lg text-white">
            <ul>
              <li>
                <a className="">
                  <MdHome size={20} />
                </a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li className="">Accomodation</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="space-y-4 py-8 px-4  md:px-6 lg:px-8 xl:px-32 ">
        <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
          Faciliteis At Yin Yang Yoga Academy
          <span>
            <Image
              src="/line-decor.png"
              width={550 / 3}
              height={63 / 3}
              alt="line-decor"
            />
          </span>
        </h2>
        <p className="text-center">
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
            <div className="top-[80%] h-auto w-[80%] rounded-tr-[50px]  bg-[#bd0006] p-8 md:absolute md:h-[150px]">
              <h3 className="text-[24px] text-white md:text-[30px]">
                Yin Yang Yoga Academy
              </h3>
              <p className="text-[#f1f1f1]">
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
                  <p className="text-center font-semibold">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8 px-4  md:px-6 lg:px-8 xl:px-32 ">
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
                    height={400}
                    width={300}
                    alt={item}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      <section className="patternBg  py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <Teacherprofile />
      </section>
      <section className=" py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <p className=" text-center font-medium uppercase tracking-wide text-[#bd0006]">
          our social reviews
        </p>
        <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
          Why We are the First Choice For YTTC
          <span>
            <Image
              src="/line-decor.png"
              width={550 / 2}
              height={63 / 2}
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
