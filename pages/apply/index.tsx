import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import Teacherprofile from "../../components/sections/Teacherprofile";
import TestimonialCarousel from "../../components/sections/TestimonialCarousel";
import TrustPilotReview from "../../components/sections/TrustPilotReview";

const ApplyForm = () => {
  return (
    <div>
      <main>
        <section className=" hero-section flex h-[60vh] items-center  rounded-bl-[80px] py-8 px-4  md:px-6 lg:px-8 xl:px-32 ">
          <div className=" space-y-2 py-2">
            <p className=" text-lg font-semibold tracking-wide text-gray-200 md:text-xl">
              Please Ensure your Advance Booking For the YTTC
            </p>
            <h2 className=" fancy-font text-2xl  leading-[6rem] text-white drop-shadow md:text-3xl lg:text-4xl xl:text-5xl">
              YTTC | Reservation Form
            </h2>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 text-white md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium "
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="h-6 w-6 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <a href="#" className="ml-1 text-sm font-medium  md:ml-2">
                      Application Form
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="py-8 px-4  md:px-6 lg:px-8 xl:px-32 ">
          <p className="text-center text-xl font-semibold text-[#bd0006] ">
            Complete the Registration Form For Enrollment
          </p>
          <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            Enrollment Form
            <span>
              <Image
                src="/line-decor.png"
                width={550 / 2}
                height={63 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
          <p className="my-4 text-center text-lg md:mx-10">
            <b> Namaste! </b> We are so delighted to welcome you to the{" "}
            <span className="font-semibold text-[#bd0006]">
              Yin Yang Yoga Academy!{" "}
            </span>
            We hope you are as excited as we are for you to embark on this
            life-changing and trans-formative journey.{" "}
          </p>
          <div className="patternBg rounded-lg p-4 md:mx-10">
            <div className="mt-4">
              <h3 className="fancy-font  text-xl font-bold">
                Please fill out this form to complete your enrollment at
                Rishikesh Yogkulam
              </h3>
              <p>
                Complete This Enrollment form to enroll yourself in the YTTC
                Course / Yoga Retreats and reserve yur seats for the course in
                advance{" "}
              </p>
            </div>
            <form>
              <div className="mt-4">
                <h3 className="text-xl">Personal Inforamtion</h3>
                <div className="mt-2 grid gap-4 md:grid-cols-2">
                  <div className="relative rounded-lg bg-white p-2">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="peer block w-full appearance-none rounded-lg border-0 bg-transparent  px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-[#bd0006] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[#bd0006]"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute top-5 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#bd0006] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      Student Name
                    </label>
                  </div>
                  <div className="relative rounded-lg bg-white p-2">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="peer block w-full appearance-none rounded-lg border-0 bg-transparent  px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-[#bd0006] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[#bd0006]"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute top-5 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#bd0006] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative rounded-lg bg-white p-2">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="peer block w-full appearance-none rounded-lg border-0 bg-transparent  px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-[#bd0006] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[#bd0006]"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute top-5 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#bd0006] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      Whatsapp/ Phone Number with Country Code
                    </label>
                  </div>
                  <div className="relative rounded-lg bg-white p-2">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="peer block w-full appearance-none rounded-lg border-0 bg-transparent  px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-[#bd0006] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[#bd0006]"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute top-5 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#bd0006] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      Your Country
                    </label>
                  </div>
                  <div className="relative rounded-lg bg-white p-2">
                    <select
                      id="floating_outlined"
                      className="peer block w-full appearance-none rounded-lg border-0 bg-transparent  px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-[#bd0006] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[#bd0006]"
                      placeholder=" "
                      required
                    >
                      <option>Choose Your Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                    <label
                      htmlFor="floating_outlined"
                      className="absolute top-5 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#bd0006] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      Select Your Gender
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl">Course Inforamtion</h3>
                <div className="mt-2 grid gap-4 md:grid-cols-2">
                  <div className="relative rounded-lg bg-white p-2">
                    <select
                      id="floating_outlined"
                      className="peer block w-full appearance-none rounded-lg border-0 bg-transparent  px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-[#bd0006] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[#bd0006]"
                      placeholder=" "
                      required
                    >
                      <option value="100 Hour YTTC">100 Hour YTTC</option>
                      <option value="200 Hour YTTC">200 Hour YTTC</option>
                      <option value="300 Hour YTTC">300 Hour YTTC</option>
                      <option value="500 Hour YTTC">500 Hour YTTC</option>
                      <option value="5 Days Yoga Retreat">
                        5 Days Yoga Retreat
                      </option>
                      <option value="10 Days Yoga Retreat">
                        10 Days Yoga Retreat
                      </option>
                      <option value="7 Chakras Yoga Retreat">
                        7 Chakras Yoga Retreat
                      </option>
                      <option value="100 Hour Ayurveda YTTC">
                        100 Hour Ayurveda YTTC
                      </option>
                      <option value="200 Hour Ayurveda YTTC">
                        200 Hour Ayurveda YTTC
                      </option>
                      <option value="Online 200 Hour YTTC">
                        Online 200 Hour YTTC
                      </option>
                    </select>
                    <label
                      htmlFor="floating_outlined"
                      className="absolute top-5 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#bd0006] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      Select Course you want to apply
                    </label>
                  </div>
                  <div className="relative rounded-lg bg-white p-2">
                    <input
                      type="date"
                      id="floating_outlined"
                      className="peer block w-full appearance-none rounded-lg border-0 bg-transparent  px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-[#bd0006] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[#bd0006]"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute top-5 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#bd0006] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      Course Date
                    </label>
                  </div>
                  <div className="relative rounded-lg bg-white p-2">
                    <select
                      id="floating_outlined"
                      className="peer block w-full appearance-none rounded-lg border-0 bg-transparent  px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-[#bd0006] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[#bd0006]"
                      placeholder=" "
                      required
                    >
                      <option>Choose Your Room Type</option>
                      <option>Shared Room</option>
                      <option>Private Room</option>
                    </select>
                    <label
                      htmlFor="floating_outlined"
                      className="absolute top-5 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform  px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#bd0006] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      Select Your Room Type
                    </label>
                  </div>
                  <div className="relative rounded-lg bg-white p-2">
                    <select
                      id="floating_outlined"
                      className="peer block w-full appearance-none rounded-lg border-0 bg-transparent  px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-[#bd0006] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[#bd0006]"
                      placeholder=" "
                      required
                    >
                      <option>Select Medium </option>
                      <option>Facebook / Instagram Advertisement</option>
                      <option>Social Media</option>
                      <option>Google Search</option>
                      <option>Existing Student</option>
                      <option>Refernce</option>
                    </select>
                    <label
                      htmlFor="floating_outlined"
                      className="absolute top-5 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#bd0006] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      Where did you hear about us?
                    </label>
                  </div>
                </div>
                <div className="relative mt-4 rounded-lg bg-white p-2">
                  <textarea
                    id="floating_outlined"
                    className="peer block w-full appearance-none rounded-lg border-0 bg-transparent  px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-[#bd0006] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[#bd0006]"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="absolute top-5 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#bd0006] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                  >
                    Your Message For Us
                  </label>
                </div>
              </div>
              <button className=" mt-4 flex items-center space-x-4 rounded bg-[#bd0006] p-4 text-lg font-semibold text-white duration-200 ease-linear hover:space-x-6 hover:bg-black">
                <span>Submit Your Form </span>
                <BsArrowRight />
              </button>
            </form>
          </div>
        </section>
        <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <TestimonialCarousel />
        </section>
        <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <TrustPilotReview />
        </section>
        <section className="patternBg mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <Teacherprofile />
        </section>
      </main>
    </div>
  );
};
export default ApplyForm;
