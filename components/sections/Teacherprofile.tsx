import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "./Teacherprofile.module.css";

import { BsArrowRight, BsArrowRightCircleFill } from "react-icons/bs";
import data from "../../data/data";
import Link from "next/link";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#de4c11",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#de4c11",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
}

const Teacherprofile = () => {
  const settings = {
    className: "center",
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    swipeToSlide: true,
    useCSS: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="mt-12 ">
      <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
        Best Yoga Teachers Rishikesh India
        <span>
          <Image
            src="/line-decor.png"
            width={568 / 2}
            height={94 / 2}
            alt="line-decor"
          />
        </span>
      </h2>
      <div>
        <Slider {...settings}>
          {data.guruProfile.map((item, index) => {
            return (
              <div key={index} className="p-2  md:p-4">
                <div className="rounded-lg bg-white p-4">
                  <div className="flex flex-col items-center space-x-4 md:flex-row ">
                    <div className="md:w-1/3">
                      <Image
                        src={item.image}
                        height={150}
                        width={150}
                        alt="Dheeraj"
                        className="rounded-br-[30%] rounded-tl-[30%] border border-solid border-[#de4c11]"
                      />
                    </div>
                    <div className="space-y-3 text-center md:w-2/3">
                      <h3 className="fancy-font text-lg md:text-xl ">
                        {item.name}
                      </h3>
                      <p className="rounded-br-[20px] rounded-tl-[20px] bg-[#de4c11] p-2 text-sm font-medium text-white  md:text-base">
                        {item.expertise}
                      </p>
                      <p className="text-sm md:text-base">
                        {item.summary?.substring(0, 180)}...
                      </p>
                    </div>
                  </div>
                  <Link href="/about/our-teachers">
                    <p className="flex cursor-pointer items-center text-[#de4c11] hover:space-x-4 hover:duration-300 hover:ease-linear">
                      <span className="tracking-wider">Read More</span>
                      <BsArrowRight />
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Teacherprofile;
