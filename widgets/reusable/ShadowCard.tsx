import Image from "next/image";
import React from "react";
import styles from "./ShadowCard.module.css";

const ShadowCard = () => {
  return (
    <div className={`${styles.hoverCard}  `}>
      <Image src="/yoga-outline-2.png" height={70} width={70} alt="Card" />

      <h3 className="text-2xl">Yoga Teacher Training</h3>
      <p className="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        magnam saepe nulla error quibusdam, quisquam et nam corrupti aut. Odio
        aliquid iure voluptate tempora magnam hic libero placeat sit qui.
      </p>
    </div>
  );
};

export default ShadowCard;
