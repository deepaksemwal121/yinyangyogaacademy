import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import Teacherprofile from "../../components/sections/Teacherprofile";
import TestimonialCarousel from "../../components/sections/TestimonialCarousel";
import TrustPilotReview from "../../components/sections/TrustPilotReview";

const Pay = () => {
  return (
    <main>
      <section className=" hero-section flex h-[60vh] items-center  rounded-bl-[80px] py-8 px-4  md:px-6 lg:px-8 xl:px-32 ">
        <div className=" space-y-2 py-2">
          <p className="text-sm font-semibold tracking-wide text-gray-200 md:text-xl">
            Come and join us for the unforgettable experience of a lifetime
          </p>
          <h2 className=" fancy-font text-2xl  text-white drop-shadow md:text-3xl lg:text-4xl xl:text-5xl">
            Course Fee For Yoga Teacher Training
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
                    Course Registration Fee
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="py-8 px-4  md:px-6 lg:px-8 xl:px-32">
        <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
          Course Fee For Yoga Teacher Training / Retreats
          <span>
            <Image
              src="/line-decor.png"
              width={550 / 2}
              height={63 / 2}
              alt="line-decor"
            />
          </span>
        </h2>
        <p className="text-sm md:text-base">
          Yin Yang Yoga Academy offers you paypal payment options. Our courses
          the
          <b>
            {" "}
            100-200-300-500 Yoga Teacher Trainings, 5 Days 7 Days 10 Days Yoga
            Retreats{" "}
          </b>
          are having uniformly the same payment methods.{" "}
        </p>
        <p className="text-sm md:text-base">
          {" "}
          The reservation of your chosen course is require a deposit of 200 USD
          Please find all payment options to complete your deposit fee
          transaction below.
        </p>
        <div className="mt-6 flex  flex-col-reverse justify-between space-y-4 lg:flex-row">
          <div className="space-y-4 lg:w-2/3">
            <h2 className="group mt-4 flex w-full flex-col text-xl md:text-3xl  lg:mt-0">
              Refund Policy
              <span className=" mt-2 h-[2px] w-[10%] bg-[#bd0006] duration-200 hover:ease-in-out group-hover:w-[20%] "></span>
            </h2>
            <p className="text-sm md:w-[90%] md:text-base">
              All aspirants are advised to carefully consider the time and
              resources required for the course before forwarding the
              application for the teacher training course. The deposit submitted
              with the application is not refundable. only in the case of
              emergency students can join us on other schedules. therefore we
              recommend that all applicants carefully examine their upcoming
              obligations so that they may be able to devote their full
              attention to the teacher training program.
            </p>
          </div>
          <div className="patternBg space-y-4 rounded-lg border-2 p-4 shadow lg:w-1/3 ">
            <h2 className="group flex w-full flex-col text-xl  md:text-3xl">
              Registration Fee
              <span className=" mt-2 h-[2px] w-[30%] bg-[#bd0006] duration-200 hover:ease-in-out group-hover:w-[40%] "></span>
            </h2>
            <form
              target="paypal"
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              className="space-y-4 "
            >
              <div>
                <label className="text-sm font-medium md:text-base">
                  Advance Course Fee{" "}
                </label>
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="EGK5AWT86AQQQ"
                />

                <select
                  name="os0"
                  className="w-[90%] rounded-md ring-0 focus:ring-[#bd0006]  md:w-full"
                >
                  <option value="100 Hour YTTC">
                    100 Hour YTTC $200.00 USD
                  </option>
                  <option value="200 Hour YTTC">
                    200 Hour YTTC $300.00 USD
                  </option>
                  <option value="300 Hour YTTC">
                    300 Hour YTTC $400.00 USD
                  </option>
                  <option value="500 Hour YTTC">
                    500 Hour YTTC $500.00 USD
                  </option>
                  <option value="5 Days Yoga Retreat">
                    5 Days Yoga Retreat $60.00 USD
                  </option>
                  <option value="10 Days Yoga Retreat">
                    10 Days Yoga Retreat $99.00 USD
                  </option>
                  <option value="7 Chakras Yoga Retreat">
                    7 Chakras Yoga Retreat $99.00 USD
                  </option>
                  <option value="100 Hour Ayurveda YTTC">
                    100 Hour Ayurveda YTTC $200.00 USD
                  </option>
                  <option value="200 Hour Ayurveda YTTC">
                    200 Hour Ayurveda YTTC $300.00 USD
                  </option>
                  <option value="Online 200 Hour YTTC">
                    Online 200 Hour YTTC $499.00 USD
                  </option>
                </select>
              </div>

              <input type="hidden" name="currency_code" value="USD" />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif"
                name="submit"
                alt="PayPal – The safer, easier way to pay online!"
              />
              <img
                alt=""
                src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>

            <p className="text-lg font-semibold text-[#bd0006] md:text-xl">
              Courses Registration Fees + 6% Handling Fee
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center py-8 px-4  md:px-6 lg:px-8 xl:px-32">
        <div className="flex flex-col  items-center justify-between rounded-lg border-[1px] border-[#bd0006] bg-white p-4 shadow-lg lg:w-[80%] lg:flex-row ">
          <div className="space-y-2 p-4 text-center lg:w-3/4">
            <h2 className="fancy-font w-full text-xl md:text-2xl">
              {" "}
              Want To Know More About The Yoga Teacher Training Courses
            </h2>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              nihil illum iure consequuntur,
            </p>
          </div>
          <div className="lg:w-1/4">
            <button className="flex items-center space-x-2 rounded-lg bg-[#bd0006] p-4 font-bold text-white">
              <span>Learn More</span>
              <BsArrowRight />
            </button>
          </div>
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
  );
};

export default Pay;
