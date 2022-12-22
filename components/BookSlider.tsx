import Image from "next/image";
import React, { useState } from "react";
import { IoDownloadOutline, IoEarthOutline } from "react-icons/io5";
import Slider from "react-slick";
import data from "../data/data";

const BookSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
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

  // State Variables here

  const [isOpen, setIsopen] = useState(false);
  const [formInfo, setFormInfo] = useState({
    email: "",
    fullName: "",
    isNewsletterSubscribed: true,
    bookIndex: 0,
  });

  // Define All helper Functions Below This

  const handleBookPdf = async () => {
    try {
      const res = await fetch("/api/bookemailer", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInfo),
      });
      res.status === 200
        ? alert(`Book has been sent to ${formInfo.email}`)
        : null;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
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
                  {/* <p classNameName=" hidden text-sm md:block md:text-base">
                      -<em>{item.author}</em>
                    </p> */}
                  <button
                    onClick={() => {
                      setFormInfo({ ...formInfo, bookIndex: index });
                      setIsopen(true);
                    }}
                    type="button"
                    className=" m-4 flex w-full justify-center rounded-lg bg-[#bd0006]  px-2 py-1 md:space-x-4 md:px-4 md:py-2"
                    data-modal-toggle="defaultModal"
                  >
                    <IoDownloadOutline color="white" size={20} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      {/* Modal Box opens here  */}

      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          isOpen ? "" : "hidden"
        } fixed top-0 right-0 z-50  h-screen  w-full overflow-y-auto overflow-x-hidden p-4 backdrop-blur-sm md:inset-0 md:h-full`}
      >
        <div className="relative h-full w-full max-w-2xl md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg bg-white shadow ">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between rounded-t border-b p-4 ">
              <h3 className="text-xl font-semibold text-gray-900 ">
                Fill Out the Form To Download the Book
              </h3>
              <button
                onClick={() => {
                  setIsopen(false);
                }}
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 "
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="space-y-6 p-6">
              <form className="w-full max-w-sm">
                <div className="mb-6 md:flex md:items-center">
                  <div className="md:w-1/3">
                    <label
                      className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                      htmlFor="inline-full-name"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      placeholder="Anna Doe"
                      className="w-full appearance-none rounded  border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) => {
                        setFormInfo({ ...formInfo, fullName: e.target.value });
                      }}
                      value={formInfo.fullName}
                    />
                  </div>
                </div>
                <div className="mb-6 md:flex md:items-center">
                  <div className="md:w-1/3">
                    <label
                      className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                      htmlFor="inline-email"
                    >
                      Email Id
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      onChange={(e) => {
                        setFormInfo({ ...formInfo, email: e.target.value });
                      }}
                      className="w-full appearance-none rounded  border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 "
                      id="inline-email"
                      type="email"
                      placeholder="annadoe@youremail.com"
                    />
                  </div>
                </div>
                <div className="mb-6 md:flex md:items-center">
                  <div className="md:w-1/3"></div>
                  <label className="block font-bold text-gray-500 md:w-2/3">
                    <input
                      onChange={() =>
                        setFormInfo({
                          ...formInfo,
                          isNewsletterSubscribed:
                            !formInfo.isNewsletterSubscribed,
                        })
                      }
                      className="mr-2 leading-tight"
                      type="checkbox"
                      checked={formInfo.isNewsletterSubscribed}
                    />
                    <span className="text-sm">Send me your newsletter!</span>
                  </label>
                </div>
                <div className="md:flex md:items-center">
                  <div className="md:w-1/3"></div>
                  <div className="md:w-2/3">
                    <button
                      onClick={handleBookPdf}
                      className="focus:shadow-outline rounded bg-[#bd0006] py-2 px-4 font-bold text-white shadow hover:bg-black focus:outline-none"
                      type="button"
                    >
                      Send Pdf
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSlider;
