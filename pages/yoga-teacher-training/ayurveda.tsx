import Image from "next/image";
import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import Button from "../../components/Button";

const Ayurveda = () => {
  return (
    <main className="w-screen">
      <div className="flex h-[80vh] w-full items-center justify-center bg-orange-200 px-8 py-4 md:px-32 md:py-16">
        <div className="md:w-1/2">
          {/* BreadCrumbs */}
          <div className=" breadcrumbs text-sm">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>
                  Yoga Teacher <br className="md:hidden" /> Training
                </a>
              </li>
              <li className="text-orange-600">
                100 Hour Ayurveda Yoga <br className="md:hidden" /> Teacher
                Training
              </li>
            </ul>
          </div>
          <h3 className="text-[34px] md:text-[45px]">
            100 Hour Ayurveda Yoga Teacher Training Course in Rishikesh, India
          </h3>
          <p className="text-18px md:text-[24px]">
            Come and join us for the unforgettable experience of a lifetime
          </p>
          <Button
            title="Book Now"
            url="/"
            style="border-2 border-orange-600 px-6 py-2 text-orange-600 text-[24px] hover:bg-orange-600 hover:text-white"
          />
        </div>
        <div
          className="hidden pt-8 md:block md:w-1/2"
          style={{
            backgroundImage:
              "url(https://cdn-icons-png.flaticon.com/512/5130/5130626.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "revert",
          }}
        >
          <Image
            src="/ayurveda-yoga.png"
            height={310 * 2}
            width={393 * 2}
            alt="image"
          />
        </div>
      </div>
      {/* About Section */}
      <div className="w-full items-center px-8 py-4 md:flex md:space-x-8 md:px-32 md:py-16">
        <div className="w-full md:w-1/2">
          <p className="text-orange-600">Yoga Teacher Training For Beginners</p>
          <div className="h-1 w-[10%] bg-orange-500"></div>
          <h2 className="text-[26px] md:text-[30px] lg:text-[45px] ">
            100 Hour Ayurveda Yoga Teacher Training In Rishikesh,India
          </h2>
          <p className="text-justify">
            100 Hour Ayurveda Yoga Teacher Training Course in Rishikesh, India
            is for seekers who wish to learn about Ayurveda, the historic system
            of medicine and explore Yoga in its most authentic and purest form.
            Our school, Rishikesh Yogkulam, situated in the heart of Rishikesh,
            also offers 100 Hour YTTCs, 200 Hour YTTCs, 300 Hour YTTCs and 500
            Hour YTTCs. The 100 Hour Ayurveda Yoga course is a two week long,
            complete immersion beginner course for individuals aspiring to step
            into the world of Yoga, gain refined knowledge of Ayurveda and begin
            their journey. <br /> This course enhances your knowledge and skill
            of Yoga, teaches you about Ayurveda and elucidates the age old
            connection between the two! It also simultaneously helps you slow
            down, live in the present moment and connect to your true self,
            inspiring self-discovery on a physical and spiritual level.
          </p>
          {/* Eligiblity Criteria  */}
          <div className=" mt-4 bg-orange-200 p-4">
            <BsPatchCheck color="darkorange" size={25} />
            <h3 className="text-[30px]">Eligibility</h3>
            <p>
              The only prerequisite for our students is that they have an open
              mind and a thirst for learning and growth. At least 6 months of
              practice is recommended (though not required). Upon acceptance to
              the course, the student is expected to be present for every class
              and complete the coursework diligently.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2">
          <div className="w-full">
            <Image
              className="rounded"
              src="https://www.yogkulam.org/images/ayurvedic-massage.jpg"
              height={500}
              width={800}
              alt="aboutus "
            />
          </div>
          <div className="w-full bg-orange-600 p-8 md:absolute md:top-[80%] md:left-[10%] md:h-[200px] md:w-[80%]">
            <h3 className="text-[20px] text-white  md:text-[30px]">
              100 Hour Ayurveda Yoga TTC in Rishikesh
            </h3>
            <p className="text-[#f1f1f1]">Total Course Fees: USD 750</p>
          </div>
        </div>
      </div>
      {/* Course Syllabus  */}
    </main>
  );
};

export default Ayurveda;
