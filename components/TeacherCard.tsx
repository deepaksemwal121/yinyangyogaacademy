import Image from "next/image";
import React, { useState } from "react";
import {
  BsArrowRight,
  BsAward,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { IoClose } from "react-icons/io5";

interface Teacher {
  image: string;
  name: string;
  expertise: string;
  desc: string;
}

const TeacherCard: React.FC<Teacher> = ({ image, name, expertise, desc }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="cardShadow relative rounded-lg bg-white shadow">
      <div className="relative flex  space-x-4 p-4">
        <div className="w-1/3">
          <Image
            className="rounded-tl-[50px] rounded-br-[50px] drop-shadow"
            src={image}
            height={200}
            width={200}
            alt="yoga-teacher"
          />
          <p className="flex items-center space-x-1 font-semibold">
            <BsAward size={20} color="#bd0006" />
            <span className="">10+ Years Of Experience</span>
          </p>
        </div>
        <div className="flex w-2/3 flex-col flex-wrap justify-center space-y-3 overflow-hidden text-left">
          <h2 className="fancy-font md:text-lg lg:text-xl xl:text-2xl">
            {name}
          </h2>
          <p className="rounded-tl-[25px] rounded-br-[25px] bg-[#bd0006] p-3 text-center  text-white">
            {expertise}
          </p>
          <div className="flex space-x-4 ">
            <BsLinkedin className="hover:text-[#bd0006]" size={20} />
            <BsInstagram className="hover:text-[#bd0006]" size={20} />
            <BsFacebook className="hover:text-[#bd0006]" size={20} />
            <BsTwitter className="hover:text-[#bd0006]" size={20} />
          </div>
        </div>
        <div
          onClick={() => setShowMore(!showMore)}
          className="absolute bottom-0 right-0 cursor-pointer p-2  md:p-4"
        >
          <p className="flex cursor-pointer items-center text-[#bd0006] hover:space-x-4 hover:duration-300 hover:ease-linear">
            <span className="tracking-wider">Read More</span>
            <BsArrowRight />
          </p>
        </div>
      </div>
      <div
        className={`${
          showMore ? "" : "hidden"
        } absolute top-0 h-full rounded-[10px]  bg-[#bd0006] p-4 text-white ease-linear`}
      >
        <div
          onClick={() => setShowMore(!showMore)}
          className=" float-right flex h-10 w-10 cursor-pointer items-center justify-center  text-white"
        >
          <IoClose size={25} />
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default TeacherCard;
