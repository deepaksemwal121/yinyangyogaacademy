import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface Menu {
  subtitle: string[];
  title: string;
  links: string[];
}

const DropdownMenu = ({ links, title, subtitle }: Menu) => {
  return (
    <div className="group relative p-4 duration-300 hover:text-[#bd0006] ">
      <span className="flex items-center space-x-2">
        <span> {title}</span> <FiChevronDown />
      </span>
      <div
        className={` top-[50px] left-0  hidden w-[250px] flex-col  border-t-[2px] border-[#bd0006] bg-white p-4 group-hover:flex   lg:absolute`}
      >
        <ul className="w-full space-y-4 font-medium">
          {subtitle.map((item, index) => {
            return (
              <li
                key={index}
                className=" border-b-[1px]  text-black drop-shadow-lg duration-300   ease-linear hover:border-b-2 hover:border-dotted hover:border-[#bd0006] hover:text-[#bd0006]"
              >
                <Link href={links[index]}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
