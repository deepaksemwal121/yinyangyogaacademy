import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Button from "../Button";
import { data } from "./data";

const SliderHero = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideLength = data.length;
  const autoScroll = true;
  let intervalTime = 5000;

  let slideInterval: any;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="relative mb-10 flex h-[80vh] w-full items-center overflow-hidden md:h-[90vh]">
      <MdOutlineKeyboardArrowLeft
        size={40}
        color="white"
        className=" z-10 ml-2 rounded-full  p-2 hover:scale-125 hover:shadow"
        onClick={prevSlide}
      />
      <MdOutlineKeyboardArrowRight
        color="white"
        size={40}
        className=" absolute right-0 z-10 mr-2 rounded-full  p-2 hover:scale-125 hover:shadow"
        onClick={nextSlide}
      />
      {data.map((slide, index) => {
        return (
          <div
            className={
              index === currentSlide
                ? " absolute top-0 left-0 h-full w-full opacity-100"
                : "opacity-0"
            }
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <div className="animate-text flex h-screen flex-col items-center justify-center bg-[#33333360] px-8 py-8 text-white md:px-32">
                  <h3 className="fancy-font text-center text-[30px] font-bold text-white drop-shadow-lg md:text-[60px] ">
                    {slide.title}
                  </h3>
                  <em className=" text-center text-[16px] md:text-[24px]">
                    &quot; {slide.para} &quot;
                  </em>
                  <Button
                    style=" bg-[#de4c11] md:px-8 md:py-3 px-3 py-2 text-sm  md:text-[18px] rounded hover:border-[#de4c11] "
                    title="Apply Now"
                    url="/apply"
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SliderHero;
