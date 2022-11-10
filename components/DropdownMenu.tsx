import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface Menu {
  subtitle: string[];
  title: string;
  links: string[];
}

const DropdownMenu = ({ links, title, subtitle }: Menu) => {
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative  hover:text-[#bd0006]  "
    >
      <span className="flex items-center space-x-2">
        <span> {title}</span> <FiChevronDown />
      </span>
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`${
          isOpen ? "block duration-500 ease-in-out" : "hidden"
        } top-[30px] z-10 flex w-[250px] flex-col rounded border-t-[2px] border-[#bd0006] bg-white  p-0 lg:absolute`}
      >
        <ul className="w-full">
          {subtitle.map((item, index) => {
            return (
              <li
                key={index}
                className=" border-b-[1px]  text-black   drop-shadow-lg hover:border-b-2 hover:border-dotted hover:border-[#bd0006] hover:text-[#bd0006]"
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
