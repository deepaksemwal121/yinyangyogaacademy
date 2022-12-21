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
            className=" rounded-tl-[25px] rounded-br-[25px] drop-shadow md:rounded-tl-[50px] md:rounded-br-[50px]"
            src={image}
            height={200}
            width={200}
            alt="yoga-teacher"
          />
        </div>
        <div className="flex w-2/3 flex-col flex-wrap justify-center space-y-3 overflow-hidden text-left">
          <h2 className="fancy-font text-center md:text-lg lg:text-xl xl:text-2xl">
            {name}
          </h2>
          <p className="rounded-tl-[25px] rounded-br-[25px] bg-[#bd0006] p-3 text-center text-sm text-white  md:text-base">
            {expertise}
          </p>
          <div className="my-2 flex justify-center space-x-4">
            <BsLinkedin className="hover:text-[#bd0006]" size={20} />
            <BsInstagram className="hover:text-[#bd0006]" size={20} />
            <BsFacebook className="hover:text-[#bd0006]" size={20} />
            <BsTwitter className="hover:text-[#bd0006]" size={20} />
          </div>
          <p className="flex items-center justify-center space-x-1 font-semibold">
            <BsAward size={24} className="w-1/4" color="#bd0006" />
            <span className="w-3/4  text-xs md:text-base">
              10+ Years of Experience
            </span>
          </p>
        </div>
      </div>
      <div
        onClick={() => setShowMore(!showMore)}
        className=" cursor-pointer p-2  md:p-4"
      >
        <p className="flex cursor-pointer items-center text-[#bd0006] hover:space-x-4 hover:duration-300 hover:ease-linear">
          <span className="tracking-wider">Read More</span>
          <BsArrowRight />
        </p>
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
