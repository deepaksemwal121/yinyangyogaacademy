import Image from "next/image";
import { useEffect, useState } from "react";
import about from "../../public/about-us.jpg";
import { IoDownloadOutline, IoEarthOutline } from "react-icons/io5";
import Slider from "react-slick";
import { data } from "../../static/data";
import Teacherprofile from "../../components/sections/Teacherprofile";

const About = () => {
  const [happy, setHappy] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    cssEase: "linear",
  };

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
    <div>
      {/* Hero Section  */}
      <div className="hero__about">
        <div className="hero__about-content">
          <h2 className="text-[50px]  text-white">
            About YinYang Yoga Academy
          </h2>
          <div className="breadcrumbs text-sm text-white">
            <ul>
              <li>
                <a className="">Home</a>
              </li>
              <li>
                <a>About </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center space-x-8 px-32 py-16">
        <div className="w-1/2">
          <p className="text-orange-600">Know More About us </p>
          <div className="h-1 w-[10%] bg-orange-500"></div>
          <h2 className="text-[45px] ">
            About Yin Yang Yoga Academy Rishikesh
          </h2>
          <p className="text-justify">
            Rishikesh Yogkulam was founded in 2018, born from the vision of
            Dhirendra Bisht and Amit Payal. Having seen their city change in
            recent years, Dhirendra and Amit wanted to start a school that truly
            focused on Yoga and its traditional principles. Today there are
            thousands of schools in Rishikesh and across the globe, that cater
            to the increasing stream of students and spiritual seekers from all
            around the world. This has led most schools to interest themselves
            in simply making Yoga a money oriented business at the expense of
            quality. The two cousins, born and raised in Rishikesh, wanted
            people to understand and recognize Yoga for its essence and origin.
            It was this passion that motivated them to start a school with an
            unmatched level of education. Their mission is to prepare and shape
            students looking for the true meaning and practices of Yoga and to
            share this authentic age-old science and knowledge that has been
            passed down as a legacy through the inhabitants of this plentiful
            town.
          </p>
        </div>
        <div className="relative w-1/2">
          <div>
            <Image
              className="rounded"
              src={about}
              height={500}
              width={800}
              alt="aboutus "
            />
          </div>
          <div className="absolute top-[80%] left-[10%] h-[200px] w-[80%] bg-orange-600 p-8">
            <h3 className="text-[30px]  text-white">Yin Yang Yoga Academy</h3>
            <p className="text-[#f1f1f1]">
              Yin Yoga is a slower practice where poses are passively held for
              longer, working on the deep, dense (Yin) connective tissues and
              joints in the body.
            </p>
          </div>
        </div>
      </div>
      <div className="px-32 py-16">
        <h3 className="text-center text-[50px] ">Our Values and Mission</h3>
      </div>
      <div className="grid grid-cols-3 gap-4 px-32">
        <div className="p-4 text-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2978/2978779.png"
            height={100}
            width={100}
            alt=""
          />
          <h3 className="text-center text-[24px]  text-orange-600">
            Holistic Learning Programme
          </h3>
          <p>
            We offers a holistic learning programme which explores Yoga not only
            as a physical practice but also as a lifestyle and spiritual
            practice.
          </p>
        </div>
        <div className="p-4 text-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2971/2971027.png"
            height={100}
            width={100}
            alt=""
          />
          <h3 className="text-center text-[24px]  text-orange-600">
            Specialized Yoga Curriculum
          </h3>
          <p>
            Specializes in creating courses for small groups to ensure that each
            student gets the fullest individual attention from every teacher.
          </p>
        </div>
        <div className="p-4 text-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/8310/8310198.png"
            height={100}
            width={100}
            alt=""
          />
          <h3 className="text-center text-[24px]  text-orange-600">
            Yoga For Everyone
          </h3>
          <p>
            Strongly believes that Yoga is for everyone irrespective of
            ethnicity or age. It doesn&apos;t matter where you start; what
            matters is what you learn along the journey.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 px-32">
        <div className="p-4 text-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2773/2773699.png"
            height={100}
            width={100}
            alt=""
          />
          <h3 className="text-center text-[24px]  text-orange-600">
            Importance of Yoga
          </h3>
          <p>
            We strives to convey the authenticity and importance of Yoga
            teachings on and off the mat and to create a space to practice the
            art of Yoga with a mindful, encouraging community.
          </p>
        </div>
        <div className="p-4 text-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3048/3048398.png"
            height={100}
            width={100}
            alt=""
          />
          <h3 className="text-center text-[24px]  text-orange-600">
            Future Yoga Teacher
          </h3>
          <p>
            The purpose of YinYang Yoga Academy is to train future teachers and
            educate new students in the principles of Yoga.
          </p>
        </div>
        <div className="p-4 text-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3124/3124742.png"
            height={100}
            width={100}
            alt=""
          />
          <h3 className="text-center text-[24px]  text-orange-600">
            Security First
          </h3>
          <p>
            This is the philosophy of the school and it is the reason why a
            great emphasis is put on the alignment classes.
          </p>
        </div>
      </div>
      {/* About the Yin Yang Yoga Academy */}
      <div className="sapce-x-8 flex w-full px-32 py-16">
        <div className="w-1/2">
          <Image
            src="/../public/YinYogaabout.png"
            alt="about"
            height={900}
            width={1600}
          />
        </div>
        <div className="w-1/2">
          <p className="text-lg text-orange-500">Our Roots</p>
          <div className="h-1 w-[10%] bg-orange-500"></div>
          <h3 className="text-[45px] ">Foundation Of Yin Yoga Academy</h3>
          <p>
            The name Rishikesh Yogkulam denotes a unification of the name of the
            city Rishikesh - the world capital of Yoga and “Yogkulam” which
            means Yoga family. Amit and Dhirendra chose this name to amplify the
            core values of familial bonding and instill the same sense of
            togetherness in their students. These students seldom remain only
            students and become an integral part of this Yoga family in
            Rishikesh.
          </p>
          <div className="counter my-4 flex w-1/2 bg-orange-600 p-8">
            <div className="w-1/3">
              <IoEarthOutline size={70} color="white" />
            </div>
            <div className="text-white">
              <p className="text-[20px] ">Global Students</p>
              <p className="text-[40px] font-medium">{happy} +</p>
            </div>
          </div>
        </div>
      </div>
      {/* Books Section  */}
      <div className="w-full px-32 py-16">
        <h3 className="mb-8 text-[40px] ">
          Find The Best Yoga Books Here
          <div className="h-1 w-[10%] bg-orange-500"></div>
        </h3>

        <Slider {...settings}>
          {data.books.map((item, index) => {
            return (
              <div key={index} className="p-4">
                <div className="relative">
                  <Image
                    src={item.image}
                    layout="responsive"
                    height={240}
                    width={140}
                    alt="book"
                  />
                  <div className="absolute bottom-0 flex w-full flex-col items-center justify-center bg-black p-4 text-center text-white opacity-75">
                    <p className="text-lg">{item.title}</p>
                    <p className="">
                      -<em>{item.author}</em>
                    </p>
                    <label
                      htmlFor="my-modal"
                      className="modal-button btn m-4 flex space-x-4 bg-orange-600 px-4 py-2"
                    >
                      <IoDownloadOutline size={25} color="white" />
                      <span>Download</span>
                    </label>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>

        {/* Modal Box opens here  */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal"
              className="btn btn-circle btn-sm absolute right-2 top-2 bg-orange-600"
            >
              ✕
            </label>
            <h4 className="my-4 text-[24px] font-semibold">
              Fill this Form To Download the Book
            </h4>
            <form className="space-y-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
              <button className="btn btn-xs bg-orange-600 sm:btn-sm md:btn-md lg:btn-md">
                Send PDF
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Teacher Profile */}
      <Teacherprofile />
    </div>
  );
};

export default About;
