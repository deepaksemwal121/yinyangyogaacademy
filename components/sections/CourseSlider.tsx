import { url } from "inspector";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import { courseCard } from "../../data/coursesData";
import CourseCardLayout from "../CourseCardLayout";

const CourseSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    autolay: true,
    autoplaySpeed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {courseCard.map((item, index) => {
        return (
          <CourseCardLayout
            key={index}
            title={item.title}
            desc={item.desc}
            featureImg={item.featureImg}
            syllabus={item.syllabus}
          />
        );
      })}
    </Slider>
  );
};

export default CourseSlider;
