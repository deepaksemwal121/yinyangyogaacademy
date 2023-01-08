import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  text: string;
  url: string;
};

const ApplyButton = ({ text, url }: Props) => {
  return (
    <Link href={url}>
      <p className=" mt-6 flex cursor-pointer items-center justify-center space-x-4 rounded bg-[#de4c11] p-2 font-semibold text-white hover:border-2 hover:border-[#de4c11] hover:bg-transparent hover:text-[#de4c11] md:p-4 md:text-lg ">
        <span>{text}</span> <BsArrowRight />
      </p>
    </Link>
  );
};

export default ApplyButton;
