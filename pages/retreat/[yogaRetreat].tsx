import Image from "next/image";
import React from "react";

const Retreat = () => {
  return (
    <div className="flex h-[80vh] items-center justify-center bg-orange-200 px-32 py-16">
      <Image
        src="https://cdn-icons-png.flaticon.com/512/3002/3002238.png"
        height={200}
        width={200}
        alt="icon"
      />
      <h3 className="text-[50px]">Under Development </h3>
    </div>
  );
};

export default Retreat;
