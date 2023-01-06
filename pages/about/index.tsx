import Image from "next/image";
import { useEffect, useState } from "react";
import about from "../../public/about-us.jpg";
import { IoEarthOutline } from "react-icons/io5";
import Teacherprofile from "../../components/sections/Teacherprofile";
import { MdHome } from "react-icons/md";
import ShadowCard from "../../widgets/reusable/ShadowCard";
import { FaYinYang } from "react-icons/fa";
import TrustPilotReview from "../../components/sections/TrustPilotReview";
import BookSlider from "../../components/BookSlider";

const About = () => {
  const cardData = [
    {
      title: "Certified Yoga Teacher Training Course",
      description: `Yin Yang Yoga School is the top choice for authentic and traditional Yoga Teacher Training in Rishikesh, India, certified by Yoga Alliance USA. Our unique program combines the benefits of both yin and yang styles of yoga in one practice. Join us and discover the balance of these relative qualities in your yoga journey.`,
    },
    {
      title: "6+ Years of Experience in Yoga Teacher Training ",
      description: `Welcome to our Yoga Teacher Training program with over 6 years of experience. Our team of certified instructors will guide you through a comprehensive training program to become a skilled and confident yoga teacher. Our program includes both in-person and online components. Join us on your journey to become a yoga instructor`,
    },
    {
      title: "Want to be a certified Yoga Teacher?",
      description: `To become a certified yoga instructor, you will need to complete a teacher training program that meets your goals and needs. Programs vary in intensity and focus, so it is important to research and choose one that aligns with your personal goals and preferences. By completing a teacher training program, you will gain the skills and knowledge needed to effectively teach yoga to others.`,
    },
  ];

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

  const [happy, setHappy] = useState(0);

  useEffect(() => {
    const autoIncrement = () => {
      setTimeout(() => {
        for (let i = 0; i <= 1000; i++) {
          setTimeout(() => {
            setHappy(i);
          }, 500);
        }
      }, 5000);
    };
    autoIncrement();
  }, []);
  return (
    <main className="w-full">
      {/* Hero Section  */}

      <section className=" hero-section flex h-[60vh] items-center  rounded-bl-[80px] py-8 px-4  md:px-6 lg:px-8 xl:px-32 ">
        <div className=" space-y-2 py-2">
          <p className=" text-lg font-semibold tracking-wide text-gray-200 md:text-xl">
            On a spiritual journey we all have the same destination
          </p>
          <h2 className=" fancy-font text-2xl  leading-[6rem] text-white drop-shadow md:text-3xl lg:text-4xl xl:text-5xl">
            About Yin Yang Yoga Academy
          </h2>
          {/* BreadCrumbs */}
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
                    About
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6"
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
                  <span className="ml-1 text-sm font-medium   md:ml-2">
                    Yin Yang Yoga Academy
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="mt-12 mb-20 grid w-full grid-cols-1 gap-4 px-4 sm:px-24  md:grid-cols-3 md:px-6  lg:px-8  xl:px-16 2xl:px-32">
        {cardData.map((item, index) => {
          return (
            <ShadowCard
              key={index}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </section>
      <section className="patternBg mt-8 py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
        <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
          About Yin Yang Yoga Academy - Best Yoga School In Rishikesh INDIA
          <span>
            <Image
              src="/line-decor.png"
              width={568 / 2}
              height={94 / 2}
              alt="line-decor"
            />
          </span>
        </h2>
        <div className="grid place-items-center space-x-4 lg:grid-cols-2 ">
          <div className="relative">
            <Image
              className="rounded-lg"
              src={about}
              height={311 * 1.5}
              width={438 * 1.5}
              alt="aboutus "
            />
            <div className=" h-[170px] w-full rounded-bl-[100px] rounded-tr-[100px] bg-[#de4c11] p-8 text-center drop-shadow md:top-[80%] md:left-[10%] md:h-[200px] md:w-[80%] lg:absolute">
              <h3 className="text-[20px] text-white  md:text-[30px]">
                Yin Yang Yoga Academy
              </h3>
              <p className="text-sm text-[#f1f1f1] md:text-base">
                Yin Yoga is a slower practice where poses are passively held for
                longer, working on the deep, dense (Yin) connective tissues and
                joints in the body.
              </p>
            </div>
          </div>
          <div className="mt-4 text-sm md:text-base">
            <p>
              Rishikesh Yogkulam was founded in 2018, born from the vision of
              Dhirendra Bisht and Amit Payal. Having seen their city change in
              recent years, Dhirendra and Amit wanted to start a school that
              truly focused on Yoga and its traditional principles. Today there
              are thousands of schools in Rishikesh and across the globe, that
              cater to the increasing stream of students and spiritual seekers
              from all around the world. This has led most schools to interest
              themselves in simply making Yoga a money oriented business at the
              expense of quality. The two cousins, born and raised in Rishikesh,
              wanted people to understand and recognize
              <strong> Yoga for its essence and origin</strong>. It was this
              passion that motivated them to start a school with an unmatched
              level of education. Their mission is to prepare and shape students
              looking for the true meaning and practices of Yoga and to share
              this <b>authentic age-old science and knowledge </b> that has been
              passed down as a legacy through the inhabitants of this plentiful
              town.
            </p>
            <p>
              The name{" "}
              <b>
                {" "}
                Rishikesh Yogkulam denotes a unification of the name of the city
                Rishikesh - the world capital of Yoga and “Yogkulam” which means
                Yoga family{" "}
              </b>
              . Amit and Dhirendra chose this name to amplify the core values of
              familial bonding and instill the same sense of togetherness in
              their students. These students seldom remain only students and
              become an integral part of this Yoga family in Rishikesh.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 py-8 px-4 md:px-6 lg:px-8  xl:px-16 2xl:px-32">
        <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
          Our Values and Mission
          <span>
            <Image
              src="/line-decor.png"
              width={568 / 2}
              height={94 / 2}
              alt="line-decor"
            />
          </span>
        </h2>
        <div className="grid gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3  ">
          {dataValues.map((item, index) => {
            return (
              <div
                key={index}
                className="group rounded-bl-[50px] rounded-tr-[50px] p-4 text-center duration-300 ease-in-out hover:bg-[#de4c11] hover:text-white hover:drop-shadow-md "
              >
                <FaYinYang size={40} className="text-center" />
                {/* <Image
                  src="/icons8-lotus-64.png"
                  height={64}
                  width={64}
                  alt=""
                /> */}
                <h3 className="text-center text-lg group-hover:text-white  md:text-xl  md:text-[24px]">
                  {item.heading}
                </h3>
                <p className="text-sm md:text-base">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className=" greyFloral xl:px- mt-12 flex flex-col space-x-6  px-4 py-8  md:px-6  lg:flex-row  lg:px-8 xl:px-16 2xl:px-32">
        <div className="py-8 md:w-1/2">
          <Image
            src="/about-us-2.jpg"
            className="rounded-lg"
            alt="about"
            height={787}
            width={1180}
          />
        </div>
        <div className="py-8 md:w-1/2">
          <p className="text-lg text-[#de4c11]">Our Roots</p>
          <div className="h-1 w-[10%] bg-[#de4c11]"></div>
          <h3 className="my-3 text-2xl font-bold md:text-4xl">
            Foundation Of Yin Yoga Academy
          </h3>
          <p className="text-sm md:text-base">
            The name Rishikesh Yogkulam denotes a unification of the name of the
            city Rishikesh - the world capital of Yoga and “Yogkulam” which
            means Yoga family. Amit and Dhirendra chose this name to amplify the
            core values of familial bonding and instill the same sense of
            togetherness in their students. These students seldom remain only
            students and become an integral part of this Yoga family in
            Rishikesh.
          </p>
          <div className="counter my-4 flex w-full rounded-xl bg-white p-8 shadow-md md:w-2/3">
            <div className="w-1/3">
              <IoEarthOutline size={70} color="#de4c11" />
            </div>
            <div>
              <p className=" fancy-font text-lg md:text-xl ">Global Students</p>
              <p className=" text-2xl font-bold md:text-3xl  lg:text-4xl">
                {happy} +
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Books Section  */}
      <section className="mt-12  py-8 px-4  md:px-6  lg:px-8  xl:px-16 2xl:px-32">
        <BookSlider />
      </section>
      <section className="greyFloral my-8 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
          Yin Yang Yoga Academy - Always a First Choice
          <span>
            <Image
              src="/line-decor.png"
              width={568 / 2}
              height={94 / 2}
              alt="line-decor"
            />
          </span>
        </h2>
        <div className="py-8 text-center">
          <p className="mb-4 text-sm md:text-base">
            If you want to do the best yoga training and seeing this as your
            passion as well as a profession then there is no better place than
            this. <b>Rishikesh&apos;s Yoga Teacher Training </b> has all that
            you need to know as a teacher as well as a student. They are best
            known for the knowledge that they spread. There are so many reasons
            why it is the best <b>Yoga School in Rishikesh</b>. There are some
            other factors as well which are very important apart from just the
            advance and this is the only place that covers those as well They
            are established on grounds of <b>trust </b>and <b>credibility</b>{" "}
            and inspires people to get the best out of them. The gurus present
            here are experts and almost believe in yoga as their food, prayer,
            oxygen, and reason to live to give their best.
          </p>
          <Image
            src="/registered-yoga-school.webp"
            width={512}
            height={187}
            alt="Registered Yoga School"
          />
        </div>
      </section>
      {/* Teacher Profile */}
      <section className="  py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
        <p className=" text-center font-medium uppercase tracking-wide text-[#de4c11]">
          Our Social reviews
        </p>
        <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
          Why We are the First Choice For YTTC
          <span>
            <Image
              src="/line-decor.png"
              width={568 / 2}
              height={94 / 2}
              alt="line-decor"
            />
          </span>
        </h2>
        <TrustPilotReview />
      </section>
      <section className="patternBg  py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
        <Teacherprofile />
      </section>
    </main>
  );
};

export default About;
