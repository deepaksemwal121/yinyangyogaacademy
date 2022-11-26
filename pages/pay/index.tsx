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
          <p className=" text-xl font-semibold tracking-wide text-gray-200">
            Come and join us for the unforgettable experience of a lifetime
          </p>
          <h2 className=" fancy-font text-5xl leading-[4rem] text-white drop-shadow">
            Course Fee For Yoga Teacher Training
          </h2>
          <div className="breadcrumbs text-lg text-white">
            <ul>
              <li>
                <a className="">
                  <MdHome size={20} />
                </a>
              </li>
              <li>
                <a>Course Fee </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-8 px-4  md:px-6 lg:px-8 xl:px-32">
        <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
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
        <p>
          Yin Yang Yoga Academy offers you paypal payment options. Our courses
          the
          <b>
            {" "}
            100-200-300-500 Yoga Teacher Trainings, 5 Days 7 Days 10 Days Yoga
            Retreats{" "}
          </b>
          are having uniformly the same payment methods.{" "}
        </p>
        <p>
          {" "}
          The reservation of your chosen course is require a deposit of 200 USD
          Please find all payment options to complete your deposit fee
          transaction below.
        </p>
        <div className="mt-6 flex justify-between">
          <div className="space-y-4">
            <h2 className="group flex w-full flex-col  text-3xl">
              Refund Policy
              <span className=" mt-2 h-[2px] w-[20%] bg-[#bd0006] duration-200 hover:ease-in-out group-hover:w-[30%] "></span>
            </h2>
            <p className="w-[90%]">
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
          <div className="patternBg w-1/3 space-y-4 rounded-lg border-2 p-4 shadow ">
            <h2 className="group flex w-full flex-col  text-3xl">
              Registration Fee
              <span className=" mt-2 h-[2px] w-[30%] bg-[#bd0006] duration-200 hover:ease-in-out group-hover:w-[40%] "></span>
            </h2>
            <form
              target="paypal"
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              className="space-y-4"
            >
              <div>
                <label className="font-medium">Advance Course Fee </label>
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="EGK5AWT86AQQQ"
                />

                <select
                  name="os0"
                  className="rounded-md ring-0  focus:ring-[#bd0006]"
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

            <p className="text-xl font-semibold text-[#bd0006]">
              Courses Registration Fees + 6% Handling Fee
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center py-8 px-4  md:px-6 lg:px-8 xl:px-32">
        <div className="flex w-[80%]  items-center justify-between rounded-lg border-[1px] border-[#bd0006] bg-white p-4 shadow-lg ">
          <div className="w-3/4 space-y-2 p-4">
            <h2 className="fancy-font w-full text-2xl">
              {" "}
              Want To Know More About The Yoga Teacher Training Courses
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              nihil illum iure consequuntur,
            </p>
          </div>
          <div className="w-1/4">
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
