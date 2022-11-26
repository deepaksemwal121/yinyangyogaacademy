import Image from "next/image";
import React from "react";
import { BsArrowRight, BsWhatsapp } from "react-icons/bs";
import { MdHome, MdOutlineMapsHomeWork, MdPhone } from "react-icons/md";
import FAQ from "../../components/FAQ";

const Contact = () => {
  return (
    <div>
      <main>
        <section className=" hero-section flex h-[60vh] items-center  rounded-bl-[80px] py-8 px-4  md:px-6 lg:px-8 xl:px-32 ">
          <div className=" space-y-2 py-2">
            <p className=" text-xl font-semibold tracking-wide text-gray-200">
              We Will be more than happy to resolve your queries
            </p>
            <h2 className=" fancy-font text-5xl leading-[4rem] text-white drop-shadow">
              Contact Us
            </h2>
            <div className="breadcrumbs text-lg text-white">
              <ul>
                <li>
                  <a className="">
                    <MdHome size={20} />
                  </a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="py-8 px-4  md:px-6 lg:px-8 xl:px-32">
          <p className="text-center text-xl font-semibold text-[#bd0006] ">
            We are one step closer to answer all your queries
          </p>
          <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            Drop Your Queries To Us
            <span>
              <Image
                src="/line-decor.png"
                width={550 / 2}
                height={63 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
          <p className="text-center">
            We are here to answer any questions you may have about our yoga
            courses at Yin Yang Yoga. Reach out to us and we&apos;ll respond as
            soon as we can. Even if there is something you have always wanted to
            experience and can&apos;t find it on Yin Yang Yoga,let us know and
            we promise we&apos;ll do our best to find it for you and send you
            there.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="rounded-lg border-2 bg-white p-4 shadow">
              <div className="flex items-center justify-center space-x-4">
                <MdHome size={40} color="#bd0006" />
                <h3 className="text-xl font-semibold">Address</h3>
              </div>
              <p className="text-center text-lg">
                Laxman Chowk Road, Near Anandham Ashram, Tapovan, Rishikesh,
                Uttarakhand 249192
              </p>
            </div>
            <div className="rounded-lg border-2 bg-white p-4 shadow">
              <div className="flex items-center justify-center space-x-4">
                <MdPhone size={40} color="#bd0006" />
                <h3 className="text-xl font-semibold">Enquiry</h3>
              </div>
              <p className="text-center text-lg">
                +91 8218114342, +918979596944
              </p>
            </div>
            <div className="rounded-lg border-2 bg-white p-4 shadow">
              <div className="flex items-center justify-center space-x-4">
                <BsWhatsapp size={40} color="#bd0006" />
                <h3 className="text-xl font-semibold">Whatsapp</h3>
              </div>
              <p className="text-center text-lg">+91 1234567890</p>
            </div>
          </div>
        </section>
        <section className="py-8 px-4  md:px-6 lg:px-8 xl:px-32">
          <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            Enquiry Form
            <span>
              <Image
                src="/line-decor.png"
                width={550 / 2}
                height={63 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
          <div className="px-24 ">
            <form className="space-y-4">
              <div className="grid w-full grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent p-4 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-[#bd0006] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[#bd0006]"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#bd0006] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent p-4 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-[#bd0006] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[#bd0006]"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#bd0006] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                  >
                    Your Email
                  </label>
                </div>
              </div>
              <div className="grid w-full grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent p-4 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-[#bd0006] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[#bd0006]"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#bd0006] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                  >
                    Your Phone
                  </label>
                </div>
                <div className="relative">
                  <select
                    id="floating_outlined"
                    className="border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent p-4 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-[#bd0006] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[#bd0006]"
                  >
                    <option>Regarding Course Fee</option>
                    <option>Regarding Refund</option>
                    <option>Regarding Course</option>
                    <option>Other</option>
                  </select>
                  <label
                    htmlFor="floating_outlined"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#bd0006] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                  >
                    Type Of Enquiry
                  </label>
                </div>
              </div>
              <div className="relative">
                <textarea
                  id="floating_outlined"
                  className="border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent p-4 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-[#bd0006] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[#bd0006]"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#bd0006] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                >
                  Your Query
                </label>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex w-1/4 items-center justify-center space-x-4 rounded  bg-[#bd0006] px-4 py-2 text-white hover:bg-black"
                >
                  <span>Submit</span> <BsArrowRight />
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="py-8 px-4  md:px-6 lg:px-8 xl:px-32">
          <FAQ />
        </section>
      </main>
    </div>
  );
};

export default Contact;
