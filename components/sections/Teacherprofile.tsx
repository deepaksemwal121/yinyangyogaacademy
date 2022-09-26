import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "./Teacherprofile.module.css";
import { data } from "../../static/data";

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
      <h2 className="text-center text-[45px]">
        Best Yoga Teachers Rishikesh India
      </h2>
      <div>
        <Slider {...settings}>
          {data.guruProfile.map((item, index) => {
            return (
              <div key={index} className="p-4">
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
