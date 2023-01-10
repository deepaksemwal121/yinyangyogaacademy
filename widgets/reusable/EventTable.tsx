import React from "react";
import { iSeatsAvailable } from "../../pages/types";
import ApplyButton from "./ApplyButton";

type Props = {
  timeTable: object[];
};

const EventTable = ({ timeTable }: Props) => {
  return (
    <div className="w-full overflow-x-scroll">
      <div className="flex w-[850px] justify-between overflow-x-auto rounded-t-lg bg-[#de4c11] p-4 text-center text-lg font-bold text-white md:w-full">
        <div className="w-1/6 border-r-[2px]  border-dashed text-sm md:text-base">
          Start Date
        </div>
        <div className="w-1/6 border-r-[2px]  border-dashed  text-sm md:text-base">
          End Date
        </div>
        <div className="w-1/6 border-r-[2px] border-dashed text-sm md:text-base">
          Availability
        </div>
        <div className="w-1/6 border-r-[2px] border-dashed text-sm md:text-base">
          Shared
        </div>
        <div className="w-1/6 border-r-[2px] border-dashed text-sm md:text-base">
          Private
        </div>
        <div className="text-sm md:w-1/6 md:text-base">Booking</div>
      </div>
      {timeTable.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "bg-slate-50" : "bg-slate-100"
            } w-[850px] items-center justify-between p-4   text-center text-lg font-medium md:w-full`}
          >
            <div className="w-1/6 border-r-[2px] border-dashed text-sm">
              {item.start}
            </div>
            <div className="w-1/6 border-r-[2px]  border-dashed text-sm">
              {item.end}
            </div>
            <div className="w-1/6 border-r-[2px] border-dashed text-sm">
              {item.availability}
            </div>
            <div className="flex w-1/6 flex-col border-r-[2px] border-dashed text-sm">
              <span className="text-lg">{item.shared}</span>{" "}
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                {item.sharedOriginal}
              </span>
            </div>
            <div className="flex w-1/6 flex-col border-r-[2px] border-dashed text-sm">
              <span className="text-lg">{item.private}</span>{" "}
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                {item.privateOriginal}
              </span>
            </div>
            <div className="p-1 text-sm md:w-1/6 md:text-base">
              <ApplyButton text="Apply" url={item.booking} />
            </div>
          </div>
        );
      })}
      <p className="text-sm italic md:hidden">Please Scroll Horizontally</p>
    </div>
  );
};

export default EventTable;
