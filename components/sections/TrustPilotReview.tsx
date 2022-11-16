import Image from "next/image";
import React from "react";
import { MdStar } from "react-icons/md";

const TrustPilotReview = () => {
  return (
    <div className="mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
      <div className="cardShadow space-y-4 p-4">
        <h2 className="text-xl">Excellent</h2>
        <Image
          src="/trustpilot-big-star.png"
          width={1000 / 5}
          height={188 / 5}
          alt="trustpilot"
        />
        <p>
          <span className="font-semibold">4.8 </span>out of 5 based on
          <span className="text-lg font-semibold"> 58 Reviews</span>
        </p>
        <Image
          src="/trustpilot-logo.png"
          height={74}
          width={300}
          alt="trustpilot-logo"
        />
        <div></div>
      </div>
      <div className="cardShadow space-y-4 p-4">
        <Image
          src="/google-logo.png"
          width={128}
          height={128}
          alt="Google Logo"
        />
        <p className="flex items-center justify-center space-x-1">
          <span className="text-xl font-semibold">5.0</span>{" "}
          {[1, 2, 3, 4, 5].map((item, index) => {
            return <MdStar color="#fbb404" size={24} key={index} />;
          })}
          based on <span className="font font-semibold"> 378 Reviews</span>
        </p>
      </div>
      <div className="cardShadow flex flex-col justify-center space-y-4 p-4">
        <Image src="/facebook.gif" width={1032} height={208} alt="facebook" />
        <div className="flex items-start justify-center space-x-2">
          <p className=" flex items-center space-x-2 rounded-full bg-[#438aff] px-2  py-1 font-semibold text-white">
            <span>4.8</span>
            <MdStar color="white" />
          </p>
          <div className="text-left ">
            <p className="font-semibold">4.8 of 5 stars -81 reviews</p>
            <p>View Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustPilotReview;
