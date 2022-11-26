import Image from "next/image";
import React from "react";
import { IoDownloadOutline, IoEarthOutline } from "react-icons/io5";
import Slider from "react-slick";
import data from "../data/data";

const BookSlider = () => {
  const dataValues = [
    {
      heading: "Holistic Learning Programme",
      icon: "",
      description:
        "We offers a holistic learning programme which explores Yoga not only as a physical practice but also as a lifestyle and spiritual practice.",
    },
    {
      heading: "Specialized Yoga Curriculum",
      icon: "",
      description:
        "Specializes in creating courses for small groups to ensure that each student gets the fullest individual attention from every teacher.",
    },
    {
      heading: "Yoga For Everyone",
      icon: "",
      description:
        "Strongly believes that Yoga is for everyone irrespective of ethnicity or age. It doesn't matter where you start; what matters is what you learn along the journey.",
    },
    {
      heading: "Importance of Yoga",
      icon: "",
      description:
        "We strives to convey the authenticity and importance of Yoga teachings on and off the mat and to create a space to practice the art of Yoga with a mindful, encouraging community.",
    },
    {
      heading: "Future Yoga Teacher",
      icon: "",
      description:
        "The purpose of YinYang Yoga Academy is to train future teachers and educate new students in the principles of Yoga.",
    },
    {
      heading: "Security First",
      icon: "",
      description:
        "This is the philosophy of the school and it is the reason why a great emphasis is put on the alignment classes.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div>
      <h2 className="flex w-full flex-col text-center text-[30px] font-bold md:text-[40px]">
        Find The Best Yoga Books Here
        <span>
          <Image
            src="/line-decor.png"
            width={550 / 2}
            height={63 / 2}
            alt="line-decor"
          />
        </span>
      </h2>

      <Slider {...settings}>
        {data.books.map((item, index) => {
          return (
            <div key={index} className="h-full p-4">
              <div className="relative">
                <Image
                  src={item.image}
                  className="rounded-lg"
                  layout="responsive"
                  height={240}
                  width={140}
                  alt="book"
                />
                <div className="absolute bottom-0 flex w-full flex-col items-center justify-center rounded-t-lg bg-[#32323290] p-4 text-center text-white ">
                  <p className="hidden text-sm font-semibold md:block md:text-base">
                    {item.title}
                  </p>
                  {/* <p className=" hidden text-sm md:block md:text-base">
                      -<em>{item.author}</em>
                    </p> */}
                  <label
                    htmlFor="my-modal"
                    className="modal-button  m-4 flex w-full justify-center rounded-lg bg-[#bd0006]  px-2 py-1 md:space-x-4 md:px-4 md:py-2"
                  >
                    <IoDownloadOutline color="white" size={20} />
                    <span>Download</span>
                  </label>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      {/* Modal Box opens here  */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal"
            className="btn btn-circle btn-sm absolute right-2 top-2 "
          >
            ✕
          </label>
          <h4 className="my-4 text-[24px] font-semibold">
            Fill this Form To Download the Book
          </h4>
          <form className="space-y-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <button className="btn btn-xs border-0 bg-[#bd0006] sm:btn-sm md:btn-md lg:btn-md">
              Download PDF
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookSlider;
