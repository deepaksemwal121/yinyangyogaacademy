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
            <p className=" text-xl font-semibold tracking-wide text-gray-200">
              Please Ensure your Advance Booking For the YTTC
            </p>
            <h2 className=" fancy-font text-5xl leading-[4rem] text-white drop-shadow">
              YTTC | Reservation Form
            </h2>
            <div className="breadcrumbs text-lg text-white">
              <ul>
                <li>
                  <a className="">
                    <MdHome size={20} />
                  </a>
                </li>

                <li>
                  <a>Application Form</a>
                </li>
              </ul>
            </div>
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
          <p className="my-4 mx-10 text-center text-lg">
            <b> Namaste! </b> We are so delighted to welcome you to the{" "}
            <span className="font-semibold text-[#bd0006]">
              Yin Yang Yoga Academy!{" "}
            </span>
            We hope you are as excited as we are for you to embark on this
            life-changing and trans-formative journey.{" "}
          </p>
          <div className="patternBg mx-10 rounded-lg p-4">
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
                <div className="mt-2 grid grid-cols-2 gap-4">
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
                <div className="mt-2 grid grid-cols-2 gap-4">
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
                      className="absolute top-5 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#bd0006] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
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
                      className="absolute top-5 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#bd0006] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      Will you be staying in a shared or a private room
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
