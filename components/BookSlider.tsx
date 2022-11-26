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
        "This is the philosophy of the school and it is the reason why a great emphasis is put on the alignment classNamees.",
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
                  {/* <p classNameName=" hidden text-sm md:block md:text-base">
                      -<em>{item.author}</em>
                    </p> */}
                  <button
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
        className="h-modal fixed top-0 right-0 left-0 z-50 hidden w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full"
      >
        <div className="relative h-full w-full max-w-2xl md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
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
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSlider;
