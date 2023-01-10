import Image from "next/image";
import React from "react";
import styles from "./ActivityCourse.module.css";

const data = [
  {
    title: "Kirtan",
    body: `Kirtan is an ancient form of music that has been used for
    centuries to help calm the mind and bring a sense of peace and
    tranquility to those who participate in it. This traditional
    music is said to have originated in India, and it is still
    commonly practiced in many parts of the world today. Unlike
    many other forms of music, kirtan is not meant to be a strict,
    formal encounter. Instead, it is meant to be a relaxed and
    inclusive experience where anyone can join in and sing along.
    During a kirtan performance, people typically sit in a
    semicircle on the floor and are encouraged to participate in
    the singing and chanting.`,
    image: "/gallery-6.JPG",
  },
  {
    title: "Outdoor Practice",
    body: `Practicing yoga outdoors by a body of water, such as the Ganges River, can be a powerful and transformative experience. Being in nature can help to connect us to a deeper sense of peace and tranquility, which can enhance the physical and mental benefits of yoga practice.

    The idea of naming poses after animals and their movements can be rooted in the traditional yoga system known as "animal flow" which was derived by the observation of animal movements in nature and how it can affect human body and mind. In this style of yoga, students are taught to move through a sequence of poses that mimic the fluid, graceful movements of animals such as the tiger, the eagle, and the snake. This approach can help to cultivate a sense of playfulness and creativity in the practice, while also building strength, flexibility, and balance.`,
    image: "/gallery-4.jpg",
  },
  {
    title: "Dance Class",
    body: `movement and breath into the yoga practice. The 100 Hour Yoga Teacher Training in Rishikesh is a program that focuses on this approach and provides students with simple dance classes that can be taken by various age groups. This can help students to learn through practical application rather than just through theoretical instruction.

    This method of teaching can be beneficial for people who are looking for an alternative way to improve their yoga practice, as well as for those who want to incorporate more movement and flow into their yoga practice. It's particularly useful for those who want to deepen their understanding of how to coordinate their breath and movement.`,
    image: "/dance.jpg",
  },
  {
    title: "WaterFall Visit",
    body: `The 100 Hour Yoga Teacher Training in Rishikesh provides a variety of experiences, but one that stands out is the trek to the Neer waterfall. This waterfall is a spectacular natural wonder that boasts a 25-foot drop and is surrounded by the beauty of nature. The trek to the waterfall offers a chance to be immersed in the natural beauty of Rishikesh and experience the falls in a unique and unforgettable way.

    The trek itself can be a challenging but rewarding experience, as participants get to explore the surrounding area, learn about the local flora and fauna, and immerse themselves in the peaceful and calming surroundings. Once at the falls, you can experience the mist of the water, the cool temperature and the sound of the falling water can be an amazing and rejuvenating experience.`,
    image: "/water-falls.jpg",
  },
  {
    title: "Ganga Arti",
    body: "The Ganga aarti is a Hindu form of tradition where the pandits light diyas and rotate them clockwise in honor of the Mother Ganga. Rishikesh offers the best Ganga Arti at the banks of the Parmarth Niketan ashram. The course provides you with the opportunity to witness the unending reverie of singings, petitions, and hawans during the Ganga aarti.",
    image: "/ganga-arti.jpg",
  },
  {
    title: "River Rafting",
    body: "One of the most famous activities of Rishikesh is River Rafting. Explorers from around the world come to visit and participate in the river rafting on the white water streams of Rishikesh in the region of the Garhwal Himalaya and other places. While indulging in the 100 Hour Yoga Teacher Training in Rishikesh you can experience this great activity to the fullest.",
    image: "/rafting.jpg",
  },
];

const ActivityCourse = () => {
  const image = "https://www.yogkulam.org/images/Kirtan.jpg";
  return (
    <div className="my-4">
      <div className="grid grid-cols-2 gap-4">
        {data.map((item, index) => {
          return (
            <div className="flex " key={index}>
              <div className="flex items-stretch">
                <Image
                  src={item.image}
                  width={300}
                  height={310}
                  alt={item.title}
                  className=" h-auto rounded-tl-3xl object-cover"
                />
              </div>
              <div className="w-full rounded-br-3xl bg-white p-4">
                <h2 className="fancy-font text-2xl">{item.title}</h2>
                <p>{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityCourse;
