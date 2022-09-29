import Image from "next/image";
import React, { useState } from "react";
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
    <div>
      <div className="relative rounded-sm bg-orange-100">
        <div className="relative flex items-center space-x-4 p-4">
          <div>
            <Image
              className="rounded-full"
              src={image}
              height={200}
              width={200}
              alt="yoga-teacher"
            />
          </div>
          <div>
            <h2 className="text-lg text-orange-800 md:text-[26px]">{name}</h2>
            <p className="text-sm text-orange-600 md:text-lg">{expertise}</p>
          </div>
          <div
            onClick={() => setShowMore(!showMore)}
            className="readMore absolute bottom-0 right-0 cursor-pointer bg-orange-600 p-2 text-sm text-white md:p-4"
          >
            Read More
          </div>
        </div>
        <div
          className={`${
            showMore ? "" : "hidden"
          } absolute top-0 h-full rounded bg-orange-600 p-4 text-white ease-linear`}
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
    </div>
  );
};

export default TeacherCard;
