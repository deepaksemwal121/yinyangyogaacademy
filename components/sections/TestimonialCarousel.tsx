import Image from "next/image";
import React from "react";
// import ReactPlayer from "react-player/youtube";
import Slider from "react-slick";
import { ImQuotesLeft, ImStarFull } from "react-icons/im";

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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
  };

  return (
    <div>
      <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
        What Our Students say About Us
        <span>
          <Image
            src="/line-decor.png"
            width={550 / 2}
            height={63 / 2}
            alt="line-decor"
          />
        </span>
      </h2>
      <div>
        <Slider {...settings}>
          {[1, 2, 3].map((item, index) => {
            return (
              <div key={index} className=" p-4 drop-shadow">
                <div className="relative rounded-tl-3xl bg-[#bd0006] p-4  text-center drop-shadow-md">
                  <ImQuotesLeft
                    size={90}
                    color="#f5f5f540"
                    className="absolute top-[10%]"
                  />
                  <Image
                    className=" rounded-full object-cover"
                    src="/testimonial-1.jpeg"
                    alt="testimonial-1"
                    width={150}
                    height={150}
                  />
                  <div className="flex w-full justify-center space-x-1">
                    {[1, 2, 3, 4].map((item, index) => {
                      return <ImStarFull key={index} color="#fbb404" />;
                    })}
                  </div>

                  <h3 className="text-xl text-white">Jennifer Winget</h3>
                  <p className="text-gray-200">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iure repudiandae odio odit eos modi consequatur unde
                    inventore ipsam incidunt voluptatibus.
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
