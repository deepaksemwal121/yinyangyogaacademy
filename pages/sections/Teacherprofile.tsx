import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "./Teacherprofile.module.css";
import { data } from "../static/data";

const Teacherprofile = () => {
  const settings = {
    className: "center",
    arrows: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    dots: true,
    swipeToSlide: true,
    useCSS: true,
    cssEase: "linear",
  };
  return (
    <div className="w-full bg-gray-100 px-32 py-16">
      <h2 className="text-center text-[45px] font-bold">
        Best Yoga Teachers Rishikesh India
      </h2>
      <div>
        <Slider {...settings}>
          {data.guruProfile.map((item, index) => {
            return (
              <div key={index} className=" bg-white p-6 shadow">
                <Image
                  src={item.image}
                  height={100}
                  width={100}
                  alt="Dheeraj"
                  className="rounded-full border border-orange-400"
                />
                <h3 className="text-[24px] font-semibold">{item.name}</h3>
                <p>{item.expertise}</p>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Teacherprofile;
