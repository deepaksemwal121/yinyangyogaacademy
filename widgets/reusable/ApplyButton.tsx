import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ApplyButton = () => {
  return (
    <Link href="/apply">
      <p className=" mt-6 flex cursor-pointer items-center justify-center space-x-4 rounded bg-[#bd0006] p-2 font-semibold text-white md:p-4 md:text-lg  ">
        <span>Apply Now</span> <BsArrowRight />
      </p>
    </Link>
  );
};

export default ApplyButton;
