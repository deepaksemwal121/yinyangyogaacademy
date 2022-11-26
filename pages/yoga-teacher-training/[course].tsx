import Image from "next/image";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import {
  MdArrowRight,
  MdHome,
  MdOutlineChromeReaderMode,
  MdOutlineRiceBowl,
  MdOutlineShower,
  MdOutlineWaterDrop,
  MdOutlineWifi,
} from "react-icons/md";
import Slider from "react-slick";
import BookSlider from "../../components/BookSlider";
import CourseAccordian from "../../components/CourseAccordian";
import FAQ from "../../components/FAQ";
import CourseCard from "../../components/sections/CourseCard";
import Teacherprofile from "../../components/sections/Teacherprofile";
import TestimonialCarousel from "../../components/sections/TestimonialCarousel";
import TrustPilotReview from "../../components/sections/TrustPilotReview";
import { syllabus } from "../../data/detailedSyllabus";
import ActivityCourse from "../../widgets/reusable/ActivityCourse";

const CoursePage = () => {
  const [tab, setTab] = useState(0);

  const settingsAccomodation = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    arrow: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const timeTable = [
    {
      title: "MORNING BELL",
      time: "5:30 Am",
    },
    {
      title: "HATHA YOGA",
      time: "6:00 to 7:30 Am",
    },
    {
      title: "PRANAYAMA",
      time: "7:45 to 8:45 Am",
    },
    {
      title: "BREAKFAST",
      time: "8:45 to 9:45 Am",
    },
    {
      title: "YOGA PHILOSOPHY",
      time: "10:00 to 11:00 Am",
    },
    {
      title: "ALIGNMENT AND ADJUSTMENT",
      time: "11:15 to 12:15 Pm",
    },
    {
      title: "YOGA ANATOMY AND PHYSIOLOGY",
      time: "12:30 to 1:30 Pm",
    },
    {
      title: "LUNCH",
      time: "1:30 to 2:30 Pm",
    },
    {
      title: "REST",
      time: "2:30 to 4:30 Pm",
    },
    {
      title: "ASHTANGA VINYASA",
      time: "4:30 to 6:00 Pm",
    },
    {
      title: "MEDITATION",
      time: "6:15 to 7:15 Pm",
    },
    {
      title: "DINNER",
      time: "7:30 to 8:30 Pm",
    },
    {
      title: "LIGHTS OFF",
      time: "9:00 Pm",
    },
  ];

  const courseStructure = [
    {
      title: "Anatomy & Physiology",
      desc: "Deep insights into the inner workings of the human body",
    },
    {
      title: "Sanskrit",
      desc: "Deep insights into the inner workings of the human body",
    },
    {
      title: "Asana Lab",
      desc: "Deep insights into the inner workings of the human body",
    },
    {
      title: "Meditation",
      desc: "Deep insights into the inner workings of the human body",
    },
    {
      title: "Restorative Yoga",
      desc: " How to practice and teach restorative Yoga",
    },
    {
      title: "Chants and Mantra",
      desc: "  Proper recitation of chants and mantras can transform energy in different areas of the body as well as improve concentration, memory and focus",
    },
    {
      title: "Philosophy",
      desc: "The broader set of Vedic ideas that have influenced the development of modern Yoga",
    },
    {
      title: "Asana",
      desc: "Understanding the right way to practice them and their benefits",
    },
    {
      title: "Postural Integration",
      desc: "Advanced methodology",
    },
    {
      title: "Prop usage",
      desc: " Using physical props to support postural understanding, enhance the benefits of the pose and facilitate healing",
    },
    {
      title: "Anatomy of the subtle body",
      desc: "Chakras, Pranas, Nadis – and how these unseen energy structures play a role in our health",
    },
    {
      title: "Pranayama",
      desc: "Learn to interpret breathing patterns and provide practices to correct and improve physical condition",
    },
    {
      title: "Yoga philosophy",
      desc: " Theoretical and Applied",
    },
    {
      title: "Yoga Sutras",
      desc: "The spiritual framework of all Yogic practice",
    },
  ];

  const facilitiesData = [
    {
      title: "Simple and clean accommodation",
      icon: (
        <IoBedOutline
          className=" rounded-full bg-white p-2  shadow-lg"
          size={70}
        />
      ),
    },
    {
      title: "Hot & Cold Showers",
      icon: (
        <MdOutlineShower
          className=" rounded-full bg-white p-2  shadow-lg"
          size={70}
        />
      ),
    },
    {
      title: "Pure Vegetarian Food",
      icon: (
        <MdOutlineRiceBowl
          className=" rounded-full bg-white p-2  shadow-lg"
          size={70}
        />
      ),
    },
    {
      title: "24X7 Wifi Available",
      icon: (
        <MdOutlineWifi
          className=" rounded-full bg-white p-2  shadow-lg"
          size={70}
        />
      ),
    },
    {
      title: "RO filtered safe drinking water",
      icon: (
        <MdOutlineWaterDrop
          className=" rounded-full bg-white p-2  shadow-lg"
          size={70}
        />
      ),
    },
    {
      title: "Course material is provided.",
      icon: (
        <MdOutlineChromeReaderMode
          className=" rounded-full bg-white p-2  shadow-lg"
          size={70}
        />
      ),
    },
  ];

  const included = [
    {
      item: "11 nights shared in accommodation and an attached bathroom.",
    },
    {
      item: "Course material.",
    },
    {
      item: "Three organic delicious meals per day, plus morning herbal tea.",
    },
    {
      item: "Outdoor excursions that include some of the caves, temples, waterfalls, or local mountain villages.",
    },
    {
      item: "24/7 free WiFi available",
    },
    {
      item: "On-call Doctor.",
    },
    {
      item: "Complementary astrology session.",
    },
  ];

  const notIncluded = [
    {
      item: "Private Accommodation - 100 USD additional.",
    },
    {
      item: "The air conditioner is already provided in the rooms. However, there is an additional cost of 75 USD to use it.",
    },
  ];

  const accomodation = [
    {
      item: "Simple and clean accommodation.",
    },
    {
      item: "Accommodation comprises single rooms and double shared rooms. All rooms have attached bathrooms. The bathrooms are equipped with western toilet seats and cold showers. Hot water is also available during the winter season.",
    },
    {
      item: "Absenting oneself from the scheduled program without prior permission of the teacher or manager concerned would be construed as a gross breach of discipline",
    },
    {
      item: "Three highly nutritious, pure vegetarian meals per day (breakfast, lunch, dinner). These are freshly prepared at the school and are specially designed to nurture your body allowing you to focus on your practice. Refreshing herbal tea is also provided every morning.",
    },
    {
      item: "RO-filtered drinking water.",
    },
  ];

  const instructions = [
    {
      item: "Discipline is an integral part of the training program and so the course routine must be strictly observed.",
    },
    {
      item: "All classes are mandatory. Only in case of an emergency or illness can one take leave with the respected teacher’s permission. Uninformed leaves won’t be accepted, will be considered a gross breach of discipline and will affect the student’s monthly performance.",
    },
    {
      item: " Ensure you are on time for class since you will not be permitted to enter any class once it has commenced.",
    },
    {
      item: "Disobeying the rules and regulations could result in termination of studentship with no refund of fees.",
    },
    {
      item: "A student must give advance intimation if they intend to skip a meal so that there is no wastage of food.",
    },
    {
      item: "Rishikesh Yogkulam does not make arrangements for guests of students. Any activity that is not related to the course is not permitted.",
    },
    {
      item: "Smoking and alcohol are not permitted during the training.",
    },
  ];
  const seatAvailability = [
    {
      start: "23 Jul 2022",
      end: "29 Jul 2022",
      availability: "Available",
      shared: "499 USD",
      private: "599 USD",
      booking: "Apply Now",
    },
    {
      start: "23 Jul 2022",
      end: "29 Jul 2022",
      availability: "Available",
      shared: "499 USD",
      private: "599 USD",
      booking: "Apply Now",
    },
    {
      start: "23 Jul 2022",
      end: "29 Jul 2022",
      availability: "Available",
      shared: "499 USD",
      private: "599 USD",
      booking: "Apply Now",
    },
    {
      start: "23 Jul 2022",
      end: "29 Jul 2022",
      availability: "Available",
      shared: "499 USD",
      private: "599 USD",
      booking: "Apply Now",
    },
    {
      start: "23 Jul 2022",
      end: "29 Jul 2022",
      availability: "Available",
      shared: "499 USD",
      private: "599 USD",
      booking: "Apply Now",
    },
    {
      start: "23 Jul 2022",
      end: "29 Jul 2022",
      availability: "Available",
      shared: "499 USD",
      private: "599 USD",
      booking: "Apply Now",
    },
  ];

  const whatGet = [
    {
      title: "Transformational",
      image: "/icons-home/pose-1.png",
      desc: "This form seeks to create a transformation or a great change in a positive way. Our 100 Hour Yoga Teacher Training in Rishikesh is designed to help you rejuvenate your mind and soul and transform yourself. In our course, you will be able to nurture yourself and connect your spirit with the universe to bring out the best in you.",
    },
    {
      title: "Comprehensive",
      image: "/icons-home/pose-2.png",
      desc: "One of the best parts of the 100 Hour Yoga Teacher Training in Rishikesh is that it is very comprehensive and has a wide scope. The course through its wide variety of exposure to knowledge and experience affects every individual differently. With the help of certified and well-reputed instructors, students can gain the maximum benefit and work on their self-development and improvement.",
    },
    {
      title: "Professional",
      image: "/icons-home/pose-3.png",
      desc: "The course is designed to be extremely professional and has a very practical approach. The instructors in the course are not only Master teachers but also have ample experience and are highly reputed in the industry. We give maximum importance to professional conduct and make sure that you receive the training that makes you capable of becoming a professional yoga teacher.",
    },
    {
      title: "Body Wisdom",
      image: "/icons-home/pose-4.png",
      desc: "Another aim of the 100 Hour Yoga Teacher Training in Rishikesh is to open the pathway to your body’s internal intellect or wisdom. Our body is nothing but a storehouse that keeps account of all the knowledge and wisdom acquired. Thus we here make sure to empower the storehouse wisdom through various activities, asanas, alignments, physiology, etc.",
    },
    {
      title: "Mind Mastery",
      image: "/icons-home/pose-5.png",
      desc: "Understanding the mind opens numerous doors and helps you understand yourself better, make perfect choices for yourself, and govern your behavior. This kind of mind mastery and self-discovery can be attained through meditation and other effective powerful techniques. The 100 Hour Yoga Teacher Training in Rishikesh ensures that you achieve the mastery of mind and build a strong foundation for other asanas.",
    },
    {
      title: "Soulful Discovery",
      image: "/icons-home/pose-6.png",
      desc: "Just like the mastery of the mind, the discovery of the soul opens doors to establish a true and healthy relationship with your soul. It helps you to be aware of your inner conscious and can be achieved through meditations, techniques of deep breathing, asanas. We through this course have designed a perfect module to achieve soul discovery to help you increase your quality of living.",
    },
  ];

  return (
    <div>
      <main>
        <section className=" hero-section flex h-[60vh] items-center  rounded-bl-[80px] py-8 px-4  md:px-6 lg:px-8 xl:px-32 ">
          <div className=" space-y-2 py-2">
            <p className=" text-xl font-semibold tracking-wide text-gray-200">
              Come and join us for the unforgettable experience of a lifetime
            </p>
            <h2 className=" fancy-font text-2xl  text-white drop-shadow md:text-3xl md:leading-[6rem] lg:text-4xl xl:text-5xl">
              100 Hour Yoga Teacher Training <br />
              In Rishikesh, India
            </h2>
            <div className="breadcrumbs text-sm text-white md:text-lg">
              <ul>
                <li>
                  <a className="">
                    <MdHome size={20} />
                  </a>
                </li>
                <li>
                  <a>Yoga Teacher Training </a>
                </li>
                <li>
                  <a>100 Hour YTTC</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="py-8 px-4  md:px-6 lg:px-8 xl:px-32">
          <p className="text-center text-xl font-semibold text-[#bd0006] ">
            The attitude of gratitude is the highest yoga
          </p>
          <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            100 Hour Yoga Teacher Training Rishikesh,India
            <span>
              <Image
                src="/line-decor.png"
                width={550 / 2}
                height={63 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 lg:space-x-4">
            <div>
              <Image
                className="rounded-lg drop-shadow"
                src="/100hr-2.jpg"
                height={400}
                width={600}
                alt="100 hours "
              />
            </div>
            <div className="flex flex-col justify-center">
              <p>
                <b>100 Hour Yoga Teacher Training in Rishikesh</b> , India is
                for seekers who wish to learn about and experience Yoga in its
                most authentic and purest form. Our school, Rishikesh Yogkulam,
                situated in the heart of Rishikesh offers <b>100 Hour YTTCs</b>,
                200 Hour YTTC., 300 Hour YTTC. and 500 Hour YTTC. The 100 Hour
                course is specially designed for novices and is a breakdown of
                the 200 Hour YTTC. It is a two-week long, complete immersion
                beginner course for individuals aspiring to step into the world
                of Yoga and begin their journey. <br />
                The course focuses on expounding and strengthening the
                understanding of various basic concepts and fundamentals of Yoga
                and simultaneously helps you slow down, live in the present
                moment and connect to your true self, inspiring self-discovery
                on a physical and spiritual level.
              </p>
            </div>
          </div>
        </section>
        <section className="patternBg mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <div className=" grid gap-4 space-y-2 lg:grid-cols-3 ">
            <div className="group -mt-12 space-y-3 rounded-lg border-2 bg-white py-4 px-6 shadow-lg ">
              <h2 className="flex w-full flex-col  text-xl">
                Courese Overview
                <span className=" h-[2px] w-[10%] bg-[#bd0006] duration-200 hover:ease-in-out group-hover:w-[20%] "></span>
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Image
                    src="/floral-icon.png"
                    height={20}
                    width={20}
                    alt="icon"
                  />
                  <span>Lorem ipsum dolor sit.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/floral-icon.png"
                    height={20}
                    width={20}
                    alt="icon"
                  />
                  <span>Lorem ipsum dolor sit.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/floral-icon.png"
                    height={20}
                    width={20}
                    alt="icon"
                  />
                  <span>Lorem ipsum dolor sit.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/floral-icon.png"
                    height={20}
                    width={20}
                    alt="icon"
                  />
                  <span>Lorem ipsum dolor sit.</span>
                </li>
              </ul>
            </div>
            <div className="group -mt-12 space-y-3 rounded-lg border-2 bg-white py-4 px-6 shadow-lg ">
              <h2 className="flex w-full flex-col  text-xl">
                Courese Highlights
                <span className=" h-[2px] w-[10%] bg-[#bd0006] duration-200 hover:ease-in-out group-hover:w-[20%] "></span>
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Image
                    src="/floral-icon.png"
                    height={20}
                    width={20}
                    alt="icon"
                  />
                  <span>Lorem ipsum dolor sit.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/floral-icon.png"
                    height={20}
                    width={20}
                    alt="icon"
                  />
                  <span>Lorem ipsum dolor sit.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/floral-icon.png"
                    height={20}
                    width={20}
                    alt="icon"
                  />
                  <span>Lorem ipsum dolor sit.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/floral-icon.png"
                    height={20}
                    width={20}
                    alt="icon"
                  />
                  <span>Lorem ipsum dolor sit.</span>
                </li>
              </ul>
            </div>
            <div className="group -mt-12 space-y-3 rounded-lg border-2 bg-white py-4 px-6 shadow-lg ">
              <h2 className="flex w-full flex-col  text-xl">
                Courese Summary
                <span className=" h-[2px] w-[10%] bg-[#bd0006] duration-200 hover:ease-in-out group-hover:w-[20%] "></span>
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Image
                    src="/floral-icon.png"
                    height={20}
                    width={20}
                    alt="icon"
                  />
                  <span>Lorem ipsum dolor sit.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/floral-icon.png"
                    height={20}
                    width={20}
                    alt="icon"
                  />
                  <span>Lorem ipsum dolor sit.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/floral-icon.png"
                    height={20}
                    width={20}
                    alt="icon"
                  />
                  <span>Lorem ipsum dolor sit.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/floral-icon.png"
                    height={20}
                    width={20}
                    alt="icon"
                  />
                  <span>Lorem ipsum dolor sit.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 space-x-4">
            <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
              The Best Known 100 Hour Yoga Teachers Training In Rishikesh
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
              The <b>100 Hour Yoga Teacher Training in Rishikesh</b> is one of
              the best courses for someone who is working to improve their yoga
              skills and is passionate about the art of yoga. This course is a
              well-known platform that will help you transform yourself and help
              you achieve a unification of the mind, body, and soul.
            </p>
            <div className="mt-4 lg:flex lg:space-x-4">
              <Image
                className="rounded-lg drop-shadow"
                src="/100hr-2.jpg"
                height={400}
                width={600}
                alt="100 hours "
              />
              <div className="flex flex-col justify-center space-y-4 lg:w-1/2">
                <h3 className="group text-3xl font-semibold text-[#bd0006]">
                  What is Yoga?
                </h3>
                <span className=" h-[2px] w-[10%] bg-[#bd0006] duration-200 hover:ease-in-out group-hover:w-[20%] "></span>
                <p>
                  Yoga is the ancient art of achieving the oneness of the
                  internal with the external. It is the practice of
                  understanding the positive energies around us and using them
                  as a power. The <b>100 Hour Yoga Teacher Training</b> in
                  Rishikesh seeks to provide around the experience of this art
                  with the help of experts and a tried-out and successful module
                  structure.
                </p>
                <div className="mt-4 flex space-x-2 rounded-lg bg-white p-4 shadow">
                  <div className="flex w-1/3 flex-col items-center ">
                    <Image
                      src="/floral-icon.png"
                      height={70}
                      width={70}
                      alt="icon"
                    />
                    <h3 className="text-lg text-slate-500">
                      Boosts Creativity
                    </h3>
                  </div>
                  <div className="flex w-1/3 flex-col items-center border-l-[2px] border-r-[2px] border-dashed ">
                    <Image
                      src="/health.png"
                      height={70}
                      width={70}
                      alt="icon"
                    />
                    <h3 className="text-lg text-slate-500">Improves Health</h3>
                  </div>
                  <div className="flex w-1/3 flex-col items-center ">
                    <Image src="/peace.png" height={70} width={70} alt="icon" />
                    <h3 className="text-lg text-slate-500">Inner Peace</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2 lg:flex lg:space-x-4">
            <div className="space-y-2 lg:w-1/2">
              <h3 className="group text-3xl font-semibold text-[#bd0006]">
                Why taking this training?
              </h3>
              <span className=" h-[2px] w-[10%] bg-[#bd0006] duration-200 hover:ease-in-out group-hover:w-[20%] "></span>
              <p>
                The 100 Hour Yoga Teacher Training in Rishikesh is a very
                innovative module that is designed to help the students gain the
                maximum skills with the use of theoretical, practical,
                hypothetical, and intuitive knowledge in a safe and protected
                environment.
              </p>
              <p>
                This course ensures that you learn the asanas to perfection and
                are prepared to become a professional. It provides one-to-one
                teaching sessions to clarify doubts, boast confidence and gain a
                wide understanding of the subject. This course is at par with
                the best international courses of yoga teachers programs and is
                a great opportunity for individuals who are passionate about
                yoga teaching.
              </p>
              <h3 className="group text-3xl font-semibold text-[#bd0006]">
                In Conclusion
              </h3>
              <span className=" h-[2px] w-[10%] bg-[#bd0006] duration-200 hover:ease-in-out group-hover:w-[20%] "></span>
              <p>
                Thus the 100 Hour Yoga Teacher Training in Rishikesh is a
                complete module that helps you get a grip of the Hatha Vinyas
                Yoga standards and learn from the best. The module is designed
                to provide a complete experience and maximum benefit for the
                participants.
              </p>
            </div>
            <div className="space-y-2 lg:w-1/2">
              <h3 className="group text-3xl font-semibold text-[#bd0006]">
                What does this training give?
              </h3>
              <span className=" h-[2px] w-[10%] bg-[#bd0006] duration-200 hover:ease-in-out group-hover:w-[20%] "></span>
              <p className="space-y-1">
                The 100 Hour Yoga Teacher Training in Rishikesh is a perfect
                course for someone who is passionate about the art of yoga and
                wants to take it up as a profession. This course will help you
                if you want to turn into an authorized teacher. It is a round
                course that helps you achieve fitness, flexibility, and peace of
                mind. 100 Hour Yoga Teacher Training in Rishikesh{" "}
              </p>
              <p>
                Furthermore, this course will teach you how to make decisions in
                contradictory situations in your profession as a teacher and act
                accordingly. This course prepares you for the future with its
                expert teaching body and intelligently curated structure. In
                this course, you will be challenged not only on the physical but
                also on a mental level and achieve expertise in both.
              </p>
              <p>
                With this course, you will get to gain knowledge about the
                fundamental theories and histories of yoga and get to know about
                its various asanas. Additionally, you will be able to seek
                harmony of the body, the mind and achieve balance with the
                surroundings. With this course, you will get an overall
                experience of asana control, diet needs, purity ceremonies, and
                many more things to become a successful yoga teacher.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            100 Hour Yoga Teacher Training In Rishikesh - Daily Schedule
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
            <b className="text-[#bd0006]">100 Hour Yoga Teacher Training</b> is
            specially designed to keep the student in contemplation of the
            subject matter throughout the day while also allowing them personal
            time. This schedule is the best integration of theory and practice,
            helping the student stay fresh and energetic throughout the day.
          </p>
          <div className="mt-4 flex flex-col-reverse lg:flex-row lg:space-x-4">
            <div className="lg:w-3/5 ">
              <h2 className="my-2 flex w-full flex-col text-2xl">
                Important Instructions
                <span className=" h-[2px] w-[10%] bg-[#bd0006] duration-200 hover:ease-in-out group-hover:w-[20%] "></span>
              </h2>
              <ul className="space-y-4">
                {instructions.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center space-x-4">
                      <Image
                        src="/icons-home/001-chakra.png"
                        width={30}
                        height={30}
                        alt="bullet"
                        className="w-1/6"
                      />
                      <span className="w-5/6">{item.item}</span>
                    </li>
                  );
                })}
              </ul>
              <h2 className="mt-4 mb-2 flex w-full flex-col text-2xl">
                Evaluation And Certification
                <span className=" h-[2px] w-[10%] bg-[#bd0006] duration-200 hover:ease-in-out group-hover:w-[20%] "></span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <Image
                    src="/icons-home/001-chakra.png"
                    width={30}
                    height={30}
                    alt="bullet"
                  />
                  <span>
                    Assessments will be based on written as well as practical
                    evaluation.
                  </span>
                </li>
                <li className="flex w-full items-center space-x-4">
                  <Image
                    src="/icons-home/001-chakra.png"
                    width={30}
                    height={30}
                    alt="bullet"
                    className="w-1/6"
                  />
                  <span className="w-5/6">
                    A student&apos;s conduct will be a part of the assessment
                    criteria.
                  </span>
                </li>{" "}
                <li className="flex items-center space-x-4">
                  <Image
                    src="/icons-home/001-chakra.png"
                    width={30}
                    height={30}
                    alt="bullet"
                  />
                  <span>
                    Evaluation will be carried out only for those students who
                    have a minimum of 90% attendance.
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <Image
                    src="/icons-home/001-chakra.png"
                    width={30}
                    height={30}
                    alt="bullet"
                  />
                  <span>
                    Upon successful assessment, the student will receive a
                    certificate accredited by Yoga Alliance, USA.
                  </span>
                </li>
              </ul>
              <div className="mt-4 flex items-center justify-between rounded-lg border-[1px] bg-white p-4 shadow-lg">
                <h3 className="text-[30px] font-semibold">
                  Total Course Fee for 100 hours YTTC
                </h3>
                <span className="rounded  bg-[#bd0006] p-4 text-xl font-semibold text-white">
                  USD 499
                </span>
              </div>
            </div>
            <div className="flex flex-col rounded-lg lg:w-2/5 ">
              <h2 className="my-2 flex w-full flex-col text-2xl">
                Course Schedule
                <span className=" h-[2px] w-[10%] bg-[#bd0006] duration-200 hover:ease-in-out group-hover:w-[20%] "></span>
              </h2>
              <div className="mt-4 flex rounded-t-lg bg-[#bd0006] p-4 font-bold text-white drop-shadow-md">
                <div className="w-2/3 text-center">ACTIVITY</div>
                <div className="w-1/3 text-center">TIME</div>
              </div>
              {timeTable.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      index % 2 == 0 ? "bg-slate-300" : "bg-gray-200"
                    } ${
                      index === timeTable.length - 1 ? "rounded-b-lg" : ""
                    } flex p-4`}
                  >
                    <div className="w-2/3 border-r-[2px] border-dashed border-gray-400 text-center">
                      {item.title}
                    </div>
                    <div className="w-1/3 text-center">{item.time}</div>
                  </div>
                );
              })}
              <p className="italic ">
                <span className="font-bold text-[#bd0006]"> Note: </span>
                Schedule is subjected to change
              </p>
            </div>
          </div>
        </section>
        <section className="greyFloral mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <h2 className="my-4 flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            Accomodation &amp; Food
            <span>
              <Image
                src="/line-decor.png"
                width={2500 / 12}
                height={346 / 12}
                alt="line-decor"
              />
            </span>
          </h2>
          <p className="my-4 text-lg font-semibold">
            All throughout, we provide the best possible accommodation
            facilities and delicious, sattvic food.
          </p>
          <ul className="space-y-4">
            {accomodation.map((item, index) => {
              return (
                <li key={index} className="flex items-center space-x-4">
                  <Image
                    src="/icons-home/001-chakra.png"
                    width={30}
                    height={30}
                    alt="bullet"
                    className="w-1/6"
                  />
                  <span className="w-5/6">{item.item}</span>
                </li>
              );
            })}
          </ul>
          <div className="my-6 lg:flex lg:space-x-4">
            <div className="grid grid-cols-3 lg:w-1/2">
              {facilitiesData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2 p-2"
                  >
                    <div className="text-center">{item.icon}</div>
                    <p className="text-center font-semibold">{item.title}</p>
                  </div>
                );
              })}
            </div>
            <div className="lg:w-1/2 ">
              <Slider {...settingsAccomodation}>
                {[
                  "https://www.yogkulam.org/images/acc/ryk-1.jpg",
                  "https://www.yogkulam.org/images/acc/ryk-4.jpg",
                  "https://www.yogkulam.org/images/acc/ryk-5.jpg",
                  "https://www.yogkulam.org/images/acc/ryk-2.jpg",
                  "https://www.yogkulam.org/images/acc/ryk-1.jpg",
                  "https://www.yogkulam.org/images/acc/ryk-4.jpg",
                  "https://www.yogkulam.org/images/acc/ryk-5.jpg",
                  "https://www.yogkulam.org/images/acc/ryk-2.jpg",
                ].map((item, index) => {
                  return (
                    <div key={index} className="text-center">
                      <Image
                        className="rounded-lg drop-shadow"
                        src={item}
                        height={300 * 1.5}
                        width={400 * 1.5}
                        alt={item}
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
          {/* <div className="my-4 border-t-[2px] border-dashed border-slate-400"></div> */}
          <div className="mx-8 mt-4 mb-12 rounded-lg bg-white p-8  drop-shadow-md">
            <div className="flex items-center justify-between  ">
              <div
                onClick={() => setTab(0)}
                className={`${
                  tab === 0
                    ? "border-b-[2px] border-dashed border-[#bd0006] bg-slate-100 text-[#bd0006]"
                    : "bg-slate-50"
                } w-1/2  cursor-pointer p-4 text-lg font-bold`}
              >
                INCLUDED
              </div>
              <div
                onClick={() => setTab(1)}
                className={`${
                  tab === 1
                    ? "border-b-[2px] border-dashed border-[#bd0006] bg-slate-100 text-[#bd0006]"
                    : "bg-slate-50"
                } w-1/2 cursor-pointer p-4 text-lg font-bold `}
              >
                NOT INCLUDED
              </div>
            </div>
            <div className="bg-slate-50 py-4">
              {tab === 0 ? (
                <ul className="space-y-4 p-4">
                  {included.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center space-x-4">
                        <Image
                          src="/icons-home/001-chakra.png"
                          width={30}
                          height={30}
                          alt="bullet"
                          className="w-1/6"
                        />
                        <span className="w-5/6">{item.item}</span>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <ul className="space-y-4 p-4">
                  {notIncluded.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center space-x-4">
                        <Image
                          src="/icons-home/001-chakra.png"
                          width={30}
                          height={30}
                          alt="bullet"
                          className="w-1/6"
                        />
                        <span className="w-5/6">{item.item}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </section>
        <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            Course Syllabus - 100 Hour Yoga Teacher Training In Rishikesh
            <span>
              <Image
                src="/line-decor.png"
                width={550 / 2}
                height={63 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {courseStructure.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group rounded-tl-[30px] rounded-br-[30px] border-[1px] border-[#bd0006] bg-white p-4 drop-shadow-md duration-300 hover:scale-[102%] hover:border-dashed"
                >
                  <h3 className="text-xl group-hover:text-[#bd0006]">
                    {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mx-auto mt-8 flex w-[80%] items-center justify-between  rounded-lg border-[1px] bg-white p-4 shadow-lg ">
            <div className="w-2/3 space-y-3">
              <h3 className="text-3xl text-gray-600">
                Want To Know More About The Syllabus
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, ea? Nesciunt veritatis quos vero cupiditate.
              </p>
            </div>
            <div className="flex w-1/3 justify-center font-bold">
              <button className="flex items-center space-x-2 rounded-lg bg-[#bd0006] p-4 text-white">
                <span>Detailed Syllabus</span>
                <BsArrowRight />
              </button>
            </div>
          </div>
        </section>
        <section className="patternBg mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            What Does A Student Get After The Completion Of The Course?
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
            Once the student has completed the
            <b> 100 Hour Yoga Teacher Training </b> in Rishikesh,they will be
            given a certificate from the institution. The certificate will have
            a record of the hours spent on the course and state the fact that
            they will be henceforth able to hold a license as a yoga teacher.
            The certificate is issued by the Yoga Alliance which is one of the
            biggest organizations that is involved in the yogic lifestyle for
            years and is highly recognized and authentic.
          </p>
          <div className="mt-4 text-center">
            <Image
              src="https://www.yogkulam.org/images/TTC-certificate.jpg"
              height={400}
              width={1083}
              alt="certificate"
              className="object-contain"
            />
          </div>
          <div className="mx-auto mt-8 flex w-[80%] items-center  rounded-lg border-[1px] bg-white p-4 shadow-lg ">
            <div className="w-2/3 space-y-3 text-center">
              <h3 className=" text-4xl text-gray-600">How To Book Your Spot</h3>
              <p className="">
                Please note that our yoga courses fill up well in advance,
                please apply in time to secure your seat. To register please
                click on apply now button fill out the application form and
                submit. Once you are accepted you will need to pay a{" "}
                <b>deposit of $200 to confirm</b> your reservation.
              </p>
            </div>
            <div className="w-1/3 justify-center md:flex">
              <button className="flex items-center space-x-2 rounded-lg bg-[#bd0006] p-4 font-bold text-white">
                <span>Apply Now</span>
                <BsArrowRight />
              </button>
            </div>
          </div>
        </section>
        {/* Seats Availabe */}
        <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <p className="text-center text-lg font-bold text-[#bd0006]">
            Upcoming Events
          </p>
          <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            Available Seats for 100 Hours Yoga Teacher Training
            <span>
              <Image
                src="/line-decor.png"
                width={550 / 2}
                height={63 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
          <p className="my-4">
            <b>100 hour yoga teacher training course </b>offered by Yin Yang
            Yoga Academy. Certified by{" "}
            <b className="text-[#bd0006]">Yoga Alliance, USA.</b>
          </p>
          <div className="flex w-full justify-between rounded-t-lg bg-[#bd0006] p-4 text-center text-lg font-bold text-white">
            <div className="w-1/6 border-r-[2px] border-dashed">Start Date</div>
            <div className="w-1/6  border-r-[2px] border-dashed">End Date</div>
            <div className="w-1/6 border-r-[2px] border-dashed">
              Availability
            </div>
            <div className="w-1/6 border-r-[2px] border-dashed">Shared</div>
            <div className="w-1/6 border-r-[2px] border-dashed">Private</div>
            <div className="w-1/6">Booking</div>
          </div>
          {seatAvailability.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex ${
                  index % 2 === 0 ? "bg-slate-50" : "bg-slate-100"
                } w-full justify-between   p-4 text-center text-lg font-medium`}
              >
                <div className="w-1/6 border-r-[2px] border-dashed">
                  {item.start}
                </div>
                <div className="w-1/6  border-r-[2px] border-dashed">
                  {item.end}
                </div>
                <div className="w-1/6 border-r-[2px] border-dashed">
                  {item.availability}
                </div>
                <div className="w-1/6 border-r-[2px] border-dashed">
                  {item.shared}
                </div>
                <div className="w-1/6 border-r-[2px] border-dashed">
                  {item.private}
                </div>
                <div className="w-1/6">{item.booking}</div>
              </div>
            );
          })}
        </section>
        <section className="patternBg mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <p className="text-center text-lg font-bold text-[#bd0006]">
            Experience A Transfomational Journey
          </p>
          <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            What To Expect At Rishikesh Yogkulam
            <span>
              <Image
                src="/line-decor.png"
                width={550 / 2}
                height={63 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {whatGet.map((item, index) => {
              return (
                <div
                  key={index}
                  className="space-y-3 rounded-lg border-[1px] border-[#bd0006] bg-white p-4 drop-shadow"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image}
                      height={64}
                      width={64}
                      alt="icon-1"
                    />
                    <h3 className="text-3xl font-bold text-gray-600">
                      {item.title}
                    </h3>
                  </div>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <p className="text-center text-lg font-bold text-[#bd0006]">
            Experience A Transfomational Journey
          </p>
          <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            Skill Level Of 100 Hour YTTC In Rishikesh India
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
            There are no high requirements of skill level for the 100 Hour Yoga
            Teacher Training in Rishikesh. Although it is expected that the
            student will possess a minimum amount of flexibility of body and
            mind, the students are not required to be experts as they will learn
            it during the course. We expect our students to keep an open mind to
            learning and be passionate about the whole process and journey of
            the course.
          </p>
          <div className="mt-4 flex items-center space-x-4 space-y-4">
            <div className="w-1/2">
              <p>
                People from all levels of yoga or work are allowed to join this
                course and no previous experience is required. Our expert
                trainers will modify the teachings according to a student&apos;s
                current state to ensure that every student is an expert on the
                completion of the course. Individuals who are already teaching
                yoga but lack a proper certification are also welcome to join
                this course.
              </p>
              <h3 className="my-4 text-2xl">Things To Remember</h3>
              <ul className="grid grid-cols-2  gap-4">
                <li className="flex items-center space-x-4">
                  <Image
                    src="/icons-home/001-chakra.png"
                    width={30}
                    height={30}
                    alt="bullet"
                    className="w-1/6"
                  />
                  <span className="w-5/6">
                    {" "}
                    Previous work experience is not required.
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <Image
                    src="/icons-home/001-chakra.png"
                    width={30}
                    height={30}
                    alt="bullet"
                    className="w-1/6"
                  />
                  <span className="w-5/6">
                    {" "}
                    Working and practicing to build a strong base.
                  </span>
                </li>{" "}
                <li className="flex items-center space-x-4">
                  <Image
                    src="/icons-home/001-chakra.png"
                    width={30}
                    height={30}
                    alt="bullet"
                    className="w-1/6"
                  />
                  <span className="w-5/6">
                    {" "}
                    High flexibility is not required.
                  </span>
                </li>{" "}
                <li className="flex items-center space-x-4">
                  <Image
                    src="/icons-home/001-chakra.png"
                    width={30}
                    height={30}
                    alt="bullet"
                    className="w-1/6"
                  />
                  <span className="w-5/6">
                    {" "}
                    The flexibility of the mind is needed.
                  </span>
                </li>{" "}
                <li className="flex items-center space-x-4">
                  <Image
                    src="/icons-home/001-chakra.png"
                    width={30}
                    height={30}
                    alt="bullet"
                    className="w-1/6"
                  />
                  <span className="w-5/6">
                    {" "}
                    They will be an increase in flexibility of body and mind
                    during the course.
                  </span>
                </li>{" "}
                <li className="flex items-center space-x-4">
                  <Image
                    src="/icons-home/001-chakra.png"
                    width={30}
                    height={30}
                    alt="bullet"
                    className="w-1/6"
                  />
                  <span className="w-5/6">
                    {" "}
                    Adaptable practice based on levels.
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <Image
                    src="/icons-home/001-chakra.png"
                    width={30}
                    height={30}
                    alt="bullet"
                    className="w-1/6"
                  />
                  <span className="w-5/6">
                    {" "}
                    Become a certified yoga trainer.
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <Image
                    src="/icons-home/001-chakra.png"
                    width={30}
                    height={30}
                    alt="bullet"
                    className="w-1/6"
                  />
                  <span className="w-5/6">
                    {" "}
                    Adaptable practice based on physical limitation or injury.
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <Image
                src="/100hr-2.jpg"
                width={600}
                height={400}
                alt="skills"
                className="rounded-lg drop-shadow"
              />
            </div>
          </div>
        </section>
        <section className="greyFloral mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <p className="text-center text-lg font-bold text-[#bd0006]">
            Complete Syllabus For this Course
          </p>
          <h2 className="my-4 flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            Detailed Syllabus - Yoga Teacher Training In Rishikesh India
            <span>
              <Image
                src="/line-decor.png"
                width={2500 / 12}
                height={346 / 12}
                alt="line-decor"
              />
            </span>
          </h2>
          <div className="space-y-4 pb-24">
            {syllabus.map((item: any, index: number) => {
              return (
                <CourseAccordian
                  key={index}
                  title={item.title}
                  desc={item.desc}
                  classes={item.classes}
                />
              );
            })}
          </div>
        </section>
        <section className=" mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <p className="text-center text-lg font-bold text-[#bd0006]">
            Yoga is the journey of the self, through the self, to the self
          </p>
          <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            Style Of Yoga In The 100 Hour Yoga Teachers Training In Rishikesh
            <span>
              <Image
                src="/line-decor.png"
                width={550 / 2}
                height={63 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
          <div className="space-y-3 ">
            <p>
              Rishikesh is known to be famous for yoga and various yogic
              practices. The place is associated with spirituality and love. The
              Yogakulam Yoga Retreat in Rishikesh is a well-known center that
              provides lessons on Hatha, Ashtanga Vinyasa, Yin yoga,
              Restorative, and Vinyasa Flow. The expert trainers of this place
              work on conservative styles and bring in their wisdom to widen the
              experience of the students for a profound experience.
            </p>
            <p>
              The 5000-year-old practice of yoga called the Hatha Yoga, which
              forms the basis of yogic practices is taught by our experts here.
              To maximize the benefits these practices are mixed with modern art
              of Vinyasa flow and the vinyasa, and the restorative art of yin
              yoga. We blend in the variety of asanas and forms to achieve a
              perfect mix of the traditional and modern for the best teaching
              techniques.
            </p>
          </div>
          <div className="mt-4 flex space-x-4">
            <div className="relative w-1/3">
              <div className="static">
                <Image
                  src="/100hr-2.jpg"
                  width={600 * 0.7}
                  height={400 * 0.7}
                  alt="Image"
                  className="rounded-tl-[50px] rounded-br-[50px] drop-shadow-md"
                />
              </div>
            </div>
            <div className="grid w-2/3 grid-cols-2 gap-4">
              <li className="flex items-center space-x-4">
                <Image
                  src="/icons-home/001-chakra.png"
                  width={30}
                  height={30}
                  alt="bullet"
                  className="w-1/6"
                />
                <span className="w-5/6">
                  {" "}
                  Classes on traditional Hatha Yoga.
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/icons-home/001-chakra.png"
                  width={30}
                  height={30}
                  alt="bullet"
                  className="w-1/6"
                />
                <span className="w-5/6"> Classes on creative Vinaya Flow.</span>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/icons-home/001-chakra.png"
                  width={30}
                  height={30}
                  alt="bullet"
                  className="w-1/6"
                />
                <span className="w-5/6"> Classes on restorative yin yoga.</span>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/icons-home/001-chakra.png"
                  width={30}
                  height={30}
                  alt="bullet"
                  className="w-1/6"
                />
                <span className="w-5/6"> Classes on vinyasa power yoga.</span>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/icons-home/001-chakra.png"
                  width={30}
                  height={30}
                  alt="bullet"
                  className="w-1/6"
                />
                <span className="w-5/6">
                  {" "}
                  A mix of traditional and modern techniques.
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/icons-home/001-chakra.png"
                  width={30}
                  height={30}
                  alt="bullet"
                  className="w-1/6"
                />
                <span className="w-5/6"> View on the skeleton variation</span>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/icons-home/001-chakra.png"
                  width={30}
                  height={30}
                  alt="bullet"
                  className="w-1/6"
                />
                <span className="w-5/6"> Variety and mix of asanas</span>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/icons-home/001-chakra.png"
                  width={30}
                  height={30}
                  alt="bullet"
                  className="w-1/6"
                />
                <span className="w-5/6">
                  {" "}
                  Customization as per one&apos;s body limit.
                </span>
              </li>
            </div>
          </div>
        </section>
        <section className="patternBg mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            Activity During The Course
            <span>
              <Image
                src="/line-decor.png"
                width={550 / 2}
                height={63 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
        </section>
        <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <p className="text-center text-xl font-bold text-[#bd0006]">
            Some Recommended Courses{" "}
          </p>
          <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            Yoga Teacher Training in Rishikesh India
            <span>
              <Image
                src="/line-decor.png"
                width={550 / 2}
                height={63 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
          <CourseCard />
        </section>
        <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <FAQ />
        </section>
        <section className="patternBg mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <BookSlider />
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
export default CoursePage;
