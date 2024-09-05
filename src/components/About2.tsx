import React from "react";
import vitimage from "../../public/assets/images/col_img.png";
import gdscimage from "../../public/assets/images/gdsc_img.png";
import Image from "next/image";

export default function About2() {
  return (
    <div id="about" className="flex flex-col w-full items-center justify-evenly text-white font-spaceGrotesk pt-12">
      <div className="flex flex-row font-bold">
        <p className="text-8xl md:text-9xl mr-2">A</p>
        <div className="flex flex-col justify-end pb-1 md:pb-3">
          <p className="text-2xl md:text-4xl">About IEEE CS</p>
          <p className="text-2xl md:text-4xl">Elevate 2.0</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full px-8 md:px-28 items-center gap-12 m-12">
        <div className="flex flex-col md:w-1/2">
          <p className="text-3xl font-bold mb-4">ABOUT</p>
          <p className="text-6xl font-bold mb-8">Elevate 2.0</p>
          <p className="text-2xl text-gray-400">ELEVATE 2.0 by IEEE CS is an event where participants tackle real industry challenges and explore the latest technology. With guidance from expert mentors and feedback from industry judges, attendees gain valuable insights, network with peers, and take part in interactive sessions, quizzes, and other activities. Packed with exclusive perks, ELEVATE 2.0 offers a unique and enriching experience.   </p>     
          </div>
        <Image src={vitimage} alt={"VIT IMAGE"} className="md:w-1/2"></Image>
      </div>
      <div className="flex flex-col-reverse md:flex-row w-full items-center gap-12 px-8 md:px-24 m-12">
        <Image src={gdscimage} alt={"GDSC IMAGE"} className="md:w-1/2"></Image>
        <div className="flex flex-col md:w-1/2">
          <p className="text-3xl font-bold">ABOUT</p>
          <p className="text-4xl font-bold mb-8">ELEVATE 1.0</p>
          <p className="text-2xl text-gray-400">
            Elevate 1.0 by IEEE CS is a premier event where tech enthusiasts came together to tackle real-time industry challenges. Participants collaborated with experienced mentors, received valuable feedback from esteemed judges, and engaged in activities like quizzes, interactive sessions, and a lively jamming session. With exclusive goodies and a focus on networking and learning, Elevate 1.0 was a memorable and enriching experience for all involved.
          </p>
        </div>
      </div>
    </div>
  );
}
