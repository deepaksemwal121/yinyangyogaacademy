import Image from "next/image";
import React from "react";
import ApplyButton from "./ApplyButton";

type Props = {
  offerTitle: string;
  description: string;
  price: string;
  redirect1: string;
  redirect2: string;
};

const CourseAdBanner = (props: Props) => {
  return (
    <div
      className="  items-center rounded border-2 border-[#de4c11] p-8 text-center lg:flex  lg:justify-between  "
      style={{ backgroundColor: "#faebd6", margin: "2em" }}
    >
      <div className="lg:w-1/4">
        <Image
          src="/logo-color-transparent.png"
          width={176}
          height={56}
          alt="logo"
        />
      </div>
      <div className=" text-center  lg:w-1/2">
        <h3 className=" text-[#de4c11]" style={{ fontSize: "1.5rem" }}>
          {props.offerTitle}
        </h3>
        <p>{props.description}</p>
        <h3 style={{ fontSize: "2rem" }} className=" text-[#de4c11]">
          {props.price}
        </h3>
      </div>
      <div className=" space-y-2 lg:w-1/4">
        <ApplyButton text="Apply Now" url={props.redirect1} />
        <ApplyButton text="About Course" url={props.redirect2} />
      </div>
    </div>
  );
};

export default CourseAdBanner;
