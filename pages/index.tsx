import Head from "next/head";
import Image from "next/image";
import SliderHero from "../components/sections/SliderHero";
import yogapose from "../public/yoga-pose.png";
import Button from "../components/Button";
import LeftImageCard from "../components/sections/LeftImageCard";
import { data } from "../data/data";
import CourseHomepage from "../components/sections/CourseHomepage";
import { BsArrowRight } from "react-icons/bs";
import Teacherprofile from "../components/sections/Teacherprofile";
import {
  IoCall,
  IoChevronForwardCircle,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yin Yang Yoga Academy</title>
        <meta name="description" content="Yin yang yoga academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Main Index Pages starts from Here  */}
      {/* Slider Component will go here */}
      {/* <SliderHero /> */}
      <section
        className="flex  h-screen flex-col justify-between text-white"
        style={{
          backgroundImage: `url(/landing_hero.jpg)`,
          backgroundPositionY: "bottom",
          backgroundPositionX: "center",
        }}
      >
        <div className="grid grid-cols-2 px-4 py-5 sm:px-32">
          <div className="">
            <h3 className="text-xl text-white sm:text-3xl">
              Yin Yang Yoga Academy
            </h3>
          </div>
          <div className="flex items-center justify-end">
            <div className="hidden rounded-xl bg-white py-2 px-8 text-black sm:block sm:text-xl">
              Apply Now
            </div>
          </div>
        </div>
        <div className="my-16 grid px-4 sm:grid-cols-2 sm:px-32">
          <div className="items-center space-y-6">
            <p className="text-orange-600">Know Yourself</p>
            <h2 className="text-xl text-white sm:text-4xl">
              Yoga Teacher Training
              <br />
              the art of self realization
            </h2>
            <p className=" text-gray-200">
              Yoga cultivates the ways of maintaining a balanced attitude in
              day-to-day <br /> life and endows skill in the performance of
              one&apos;s actions
            </p>
            <div className="flex items-center space-x-2">
              <IoChevronForwardCircle color="orange" size={40} />
              <p className="text-white">
                Discover yoga teacher training courses now
              </p>
            </div>
          </div>
          <div className=" hidden items-end sm:block ">
            <ul className="flex flex-col items-end space-y-4 font-semibold">
              <li className="flex items-center ">
                About
                <div className="mx-2 h-1 w-10 bg-white" />
              </li>
              <li className="flex items-center ">
                Our Teachers
                <div className="mx-2 h-1 w-10 bg-white" />
              </li>
              <li className="flex items-center ">
                Accommodation
                <div className="mx-2 h-1 w-10 bg-white" />
              </li>
              <li className="flex items-center ">
                Blogs
                <div className="mx-2 h-1 w-10 bg-white" />
              </li>
            </ul>
          </div>
        </div>
        <div className=" hidden justify-between px-32 py-12 sm:flex">
          <div className="grid w-2/3 grid-cols-4 space-x-8 border-t border-gray-50 pt-4">
            <div className="space-y-2">
              <h3 className="text-xl text-white">Teacher Training</h3>
              <div className="h-[1px] w-1/4 bg-white" />
              <ul className="space-y-1">
                <li>100 hours training course</li>
                <li>200 hours training course</li>
                <li className="text-orange-600">View More</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl text-white">Ayurveda Courses</h3>
              <div className="h-[1px] w-1/4 bg-white" />
              <ul className="space-y-1">
                <li>100 hours training course</li>
                <li>100 hours training course</li>
                <li className="text-orange-600">View More</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl text-white">Yoga Retreats</h3>
              <div className="h-[1px] w-1/4 bg-white" />
              <ul className="space-y-1">
                <li>5 day yoga retreat</li>
                <li>7 day yoga retreat</li>
                <li className="text-orange-600">View More</li>
              </ul>
            </div>
            <div className="space-y-2 ">
              <h3 className="text-xl text-white">Social</h3>
              <div className="h-[1px] w-1/4 bg-white" />
              <ul className="flex items-center space-y-1 space-x-4">
                <li className="text-blue-600">
                  <IoLogoFacebook size={28} />
                </li>
                <li className="text-pink-600">
                  <IoLogoInstagram size={25} />
                </li>
                <li className="text-blue-600">
                  <IoLogoTwitter size={28} />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="rounded-full bg-orange-600 p-5">
              <IoCall size={25} color="white" />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full items-center px-8 md:flex md:space-x-4 md:px-32 ">
        <div className="md:w-1/2">
          <Image src={yogapose} alt="yoga-pose" width={666} height={666} />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg font-medium text-orange-600">
            ONE DESTINATION, MANY PATHS, ONE JOURNEY
          </p>
          <h2 className="text-[30px] md:text-[40px]">
            YOGA TEACHER TRAINING IN RISHIKESH, INDIA
          </h2>
          <p>
            With each passing day, people are getting more and more engaged
            towards a better peaceful life. Amidst all the chaos all that
            everyone wants is a little time for oneself so that it leads them t
            grow. Thus comes yoga in the scene which is one short formula for
            such a life that gives one such peace and balances one’s life.{" "}
          </p>
          <br />
          <p>
            Today yoga teacher trainers are spread worldwide wide and a maximum
            of them are trained from Rishikesh.
          </p>
          <br />
          <Button
            style="w-[50%] bg-orange-600 mx-auto text-white px-6 py-4"
            title="Enroll Now"
            url="/"
          />
        </div>
      </div>
      {/* Section 2 Starts from here  */}
      <div className="mt-8 w-full flex-col-reverse items-center px-8 py-8 md:flex md:flex-row md:space-x-4 md:px-32 md:py-16">
        <div className="md:w-1/2">
          <p className="text-base font-medium text-orange-600 md:text-lg">
            ONE DESTINATION, MANY PATHS, ONE JOURNEY
          </p>
          <h2 className="text-[30px] md:text-[40px]">
            Why Yoga Teacher Training Programs And Retreats?
          </h2>
          {data.cardData.map((i, index) => {
            return (
              <LeftImageCard
                key={index}
                title={i.title}
                description={i.description}
                icon={i.icon}
              />
            );
          })}
        </div>
        <div className="md:w-1/2">
          <Image
            src="/../public/yoga-pose.png"
            alt="yoga-pose"
            height={666}
            width={666}
          />
        </div>
      </div>
      {/* Course Section on Homepage Starts from Here */}
      <CourseHomepage />
      {/* Best Teacher Section */}
      <div className="w-full px-8 py-4 md:px-32 md:py-16">
        <h2 className="text-center text-[25px] md:text-[45px]">
          BEST ONLINE YOGA TEACHER TRAINING INDIA
        </h2>
        <p className="text-center text-lg">
          There are online classes that are also there. There is no stop to
          spreading knowledge as thus like the entire world the yoga world has
          also chosen and taken part in online tutoring. From hatha yoga to the
          process of relaxation, breathing both active and passive, meditation,
          and other asanas everything is been taught. All the problems have been
          kept in mind and the classes are being conducted.
        </p>
        <br />
        <p className="text-center text-lg">
          All these classes are taken by none other than experienced teachers
          who have the experience of teaching both offline as well as online.
          Yes, these teachers are capable to teach online also as they are
          internationally renowned personalities in this field. All the
          faculties have their sort of achievement and are renowned
          professionals having deep knowledge in yoga.
        </p>
        <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {data.onlineCards.map((value, index) => {
            return (
              <div key={index} className="bg-[#f9d3af] p-8">
                <Image
                  src={value.image}
                  alt={value.title}
                  width={80}
                  height={80}
                />
                <h2 className="text-[20px] text-gray-800 md:text-[30px]">
                  {value.title}
                </h2>
                <p className="text-base md:text-lg">{value.content}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* What do we offer  Section starts  */}
      <div className="w-full px-8 py-4 md:px-32 md:py-16">
        <h2 className="text-[30px] md:text-[40px] ">What Do We Offer </h2>
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-4">
          {data.offer.map((value, index) => {
            return (
              <div key={index} className=" bg-gray-100 p-4 text-center ">
                <Image
                  src={value.image}
                  alt={value.title}
                  height={160}
                  width={160}
                />
                <h3 className="text-[24px]">{value.title}</h3>
                <p>{value.content}</p>
                <a
                  className="float-right flex items-center space-x-4 text-orange-600"
                  href={value.url}
                >
                  <BsArrowRight />
                  <span> Read More</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      {/* Teachers Section  */}
      <Teacherprofile />
    </div>
  );
}
