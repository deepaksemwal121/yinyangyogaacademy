import Image from "next/image";
import React from "react";
import styles from "./ShadowCard.module.css";

interface CardProps {
  title: string;
  description: string;
}

const ShadowCard = ({ title, description }: CardProps) => {
  return (
    <div className={`${styles.hoverCard}  `}>
      <Image src="/yoga-outline-2.png" height={70} width={70} alt="Card" />

      <h3 className="text-xl">{title}</h3>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
};

export default ShadowCard;
