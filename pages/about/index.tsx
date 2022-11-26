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
          <div className="breadcrumbs text-lg text-white">
            <ul>
              <li>
                <a className="">
                  <MdHome size={20} />
                </a>
              </li>
              <li>
                <a>About </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className=" grid  gap-4 py-8 px-4 md:px-6 lg:grid-cols-3 lg:px-8 xl:px-32 ">
        <ShadowCard />
        <ShadowCard />
        <ShadowCard />
      </section>
      <section className="patternBg mt-8  py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
          About Yin Yang Yoga Academy - Best Yoga School In Rishikesh INDIA
          <span>
            <Image
              src="/line-decor.png"
              width={550 / 2}
              height={63 / 2}
              alt="line-decor"
            />
          </span>
        </h2>
        <div className="grid space-x-4 lg:grid-cols-2 ">
          <div className="relative">
            <Image
              className="rounded-lg"
              src={about}
              height={311 * 1.5}
              width={438 * 1.5}
              alt="aboutus "
            />
            <div className=" h-[200px] w-full rounded-bl-[100px] rounded-tr-[100px] bg-[#bd0006] p-8 drop-shadow md:top-[80%] md:left-[10%] md:w-[80%] lg:absolute">
              <h3 className="text-[20px] text-white  md:text-[30px]">
                Yin Yang Yoga Academy
              </h3>
              <p className="text-[#f1f1f1]">
                Yin Yoga is a slower practice where poses are passively held for
                longer, working on the deep, dense (Yin) connective tissues and
                joints in the body.
              </p>
            </div>
          </div>
          <div className="">
            <p className="">
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

      <section className=" mt-12  py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <h2 className="flex w-full flex-col text-center text-[30px] font-bold md:text-[40px]">
          Our Values and Mission
          <span>
            <Image
              src="/line-decor.png"
              width={550 / 2}
              height={63 / 2}
              alt="line-decor"
            />
          </span>
        </h2>
        <div className="grid gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3  ">
          {dataValues.map((item, index) => {
            return (
              <div
                key={index}
                className="group rounded-bl-[50px] rounded-tr-[50px] p-4 text-center duration-500 ease-in-out hover:bg-[#bd0006] hover:text-white hover:drop-shadow-md "
              >
                <FaYinYang size={40} className="text-center" />
                {/* <Image
                  src="/icons8-lotus-64.png"
                  height={64}
                  width={64}
                  alt=""
                /> */}
                <h3 className="text-center text-xl  group-hover:text-white  md:text-[24px]">
                  {item.heading}
                </h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className=" greyFloral mt-12 flex flex-col space-x-6 py-8 px-4 md:px-6 lg:flex-row lg:px-8 xl:px-32">
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
          <p className="text-lg text-[#bd0006]">Our Roots</p>
          <div className="h-1 w-[10%] bg-[#bd0006]"></div>
          <h3 className="text-[24px] md:text-[45px] ">
            Foundation Of Yin Yoga Academy
          </h3>
          <p>
            The name Rishikesh Yogkulam denotes a unification of the name of the
            city Rishikesh - the world capital of Yoga and “Yogkulam” which
            means Yoga family. Amit and Dhirendra chose this name to amplify the
            core values of familial bonding and instill the same sense of
            togetherness in their students. These students seldom remain only
            students and become an integral part of this Yoga family in
            Rishikesh.
          </p>
          <div className="counter my-4 flex w-full rounded-xl bg-white p-8 shadow-md md:w-1/2">
            <div className="w-1/3">
              <IoEarthOutline size={70} color="#bd0006" />
            </div>
            <div>
              <p className=" fancy-font text-xl ">Global Students</p>
              <p className=" text-5xl font-bold">{happy} +</p>
            </div>
          </div>
        </div>
      </section>
      {/* Books Section  */}
      <section className="mt-12  py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <BookSlider />
      </section>
      <section className="greyFloral my-8 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
          Yin Yang Yoga Academy - Always a First Choice
          <span>
            <Image
              src="/line-decor.png"
              width={550 / 2}
              height={63 / 2}
              alt="line-decor"
            />
          </span>
        </h2>
        <div className="py-8 text-center">
          <p className="mb-4">
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
      <section className=" py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <p className=" text-center font-medium uppercase tracking-wide text-[#bd0006]">
          our social reviews
        </p>
        <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
          Why We are the First Choice For YTTC
          <span>
            <Image
              src="/line-decor.png"
              width={550 / 2}
              height={63 / 2}
              alt="line-decor"
            />
          </span>
        </h2>
        <TrustPilotReview />
      </section>
      <section className="patternBg  py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <Teacherprofile />
      </section>
    </main>
  );
};

export default About;
