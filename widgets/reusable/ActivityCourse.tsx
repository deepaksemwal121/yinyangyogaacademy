import Image from "next/image";
import React from "react";
import styles from "./ActivityCourse.module.css";

const ActivityCourse = () => {
  const image = "https://www.yogkulam.org/images/Kirtan.jpg";
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={`${styles.flipCardFront} p-4 bg-[url('${image}')] `}>
          <div className="z-20 bg-blue-300">
            <h2 className="p-4 text-center text-2xl font-bold text-white">
              Title
            </h2>
          </div>
        </div>
        <div className={styles.flipCardBack}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            eligendi quos molestias quam blanditiis repellat adipisci error
            tenetur fuga unde harum, laudantium culpa aperiam quas. A velit ut
            quisquam quasi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCourse;
