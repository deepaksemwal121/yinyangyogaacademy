import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface Menu {
  subtitle: string[];
  title: string;
  links: string[];
  router: string;
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
}

const DropdownMenu = ({
  links,
  title,
  subtitle,
  router,
  setOpenMenu,
}: Menu) => {
  return (
    <div className="group relative p-4 duration-300 hover:text-[#bd0006] ">
      <span
        className={`${
          links.includes(router) ? "text-[#bd0006]" : ""
        } flex items-center space-x-2`}
      >
        <span>{title}</span>
        <FiChevronDown />
      </span>
      <div
        className={` top-[50px] left-0  hidden w-[250px] flex-col  border-[#bd0006] bg-white p-4 group-hover:flex lg:absolute   lg:border-t-[2px]`}
      >
        <ul className="w-full space-y-4 font-medium">
          {subtitle.map((item, index) => {
            return (
              <li
              onClick={()=>setOpenMenu(false)}
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
