import Image from "next/image";
import React from "react";
// import ReactPlayer from "react-player/youtube";
import Slider from "react-slick";

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-12  w-full  px-8 py-4 md:mt-6 md:px-32 md:py-16">
      <h2 className="text-center text-[30px] md:text-[45px]">
        Rishikesh Yogakulam&apos;s Video Reviews
      </h2>
      <div>
        <Slider {...settings}>
          <div>
            <div className="testimonial-bg flex w-full items-center rounded-lg p-6 shadow">
              <div className="w-2/3">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/iAtSeoqTFaI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-1/3 text-center">
                <Image
                  className=" rounded-full object-cover"
                  src="/testimonial-1.jpeg"
                  alt="testimonial-1"
                  width={150}
                  height={150}
                />
                <h3 className="text-[35px]">Jennifer Winget</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                  repudiandae odio odit eos modi consequatur unde inventore
                  ipsam incidunt voluptatibus.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-bg flex w-full items-center rounded-lg p-6 shadow">
              <div className="w-2/3">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/iAtSeoqTFaI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-1/3 text-center">
                <Image
                  className=" rounded-full object-cover"
                  src="/testimonial-1.jpeg"
                  alt="testimonial-1"
                  width={150}
                  height={150}
                />
                <h3 className="text-[35px]">Jennifer Winget</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                  repudiandae odio odit eos modi consequatur unde inventore
                  ipsam incidunt voluptatibus.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
