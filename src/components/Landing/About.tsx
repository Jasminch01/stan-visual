import { crismonText, moglanDemo } from "@/app/font";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="md:flex space-x-20 items-center relative">
      {/* Left: Image */}
      <div className="flex-1 z-10">
        <Image
          className="w-full"
          src={"/img/susnata-profile.png"}
          width={500}
          height={500}
          alt="susnata-profile"
        />
      </div>

      {/* Right: content */}
      <div className="flex-1 relative">
        {/* Image Positioned at Top-Left */}
        <div className="absolute bg-about_top w-full h-full">
          {/* <Image
            src={"/img/Group.png"}
            alt="group"
            width={1000}
            height={800}
            className="w-full"
            objectFit="cover"
          /> */}
        </div>

        {/* Text Content */}
        <div className="mt-36">
          <p className={`${moglanDemo.className} text-5xl`}>WHY CHOOSE ME?</p>
          <p
            className={`${crismonText.className} italic text-2xl w-[541px] text-justify mt-7`}
          >
            I am Stan Chakma, a passionate photographer with over 8 years of
            experience in capturing stunning, personalized images. Let&apos;s
            connect and bring your vision to life, whether it&apos;s a wedding,
            engagement, or any other special occasion!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
