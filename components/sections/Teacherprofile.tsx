import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "./Teacherprofile.module.css";
import { data } from "../../data/data";

const Teacherprofile = () => {
  const settings = {
    className: "center",
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    swipeToSlide: true,
    useCSS: true,
    cssEase: "linear",
    responsive: [
      // {
      //   breakpoint: 1440,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2,
      //   },
      // },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-12  w-full bg-gray-100 px-8 py-4 md:mt-6 md:px-32 md:py-16">
      <h2 className="text-center text-[30px] md:text-[45px]">
        Best Yoga Teachers Rishikesh India
      </h2>
      <div>
        <Slider {...settings}>
          {data.guruProfile.map((item, index) => {
            return (
              <div key={index} className="p-2 md:p-4">
                <div className="rounded bg-white p-4">
                  <Image
                    src={item.image}
                    height={100}
                    width={100}
                    alt="Dheeraj"
                    className="rounded-full border border-orange-400"
                  />
                  <h3 className="text-[24px] ">{item.name}</h3>
                  <p className="font-medium text-orange-600">
                    {item.expertise}
                  </p>
                  <p>{item.desc}</p>
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
