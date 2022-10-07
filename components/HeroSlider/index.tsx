import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import Button from "../Button";
import { data } from "./data";

const SliderHero = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideLength = data.length;
  const autoScroll = false;
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
    <div className="relative mb-10 flex h-screen w-full items-center overflow-hidden md:h-[90vh]">
      <AiOutlineCaretLeft
        size={40}
        className=" z-10 ml-4 rounded-full bg-white p-2 hover:scale-125 hover:shadow"
        onClick={prevSlide}
      />
      <AiOutlineCaretRight
        size={40}
        className=" absolute right-0 z-10 mr-4 rounded-full bg-white p-2 hover:scale-125 hover:shadow"
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
                  <h3 className="fancy-font text-[30px] font-bold text-white md:text-[60px] ">
                    {slide.title}
                  </h3>
                  <em className=" text-center text-[16px] md:text-[24px]">
                    {" "}
                    &quot; {slide.para} &quot;
                  </em>
                  <Button
                    style=" bg-orange-600 md:px-8 md:py-4 px-4 py-2 md:text-[24px] text-[16px] hover:bg-black  "
                    title="Enroll Now"
                    url="/"
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
