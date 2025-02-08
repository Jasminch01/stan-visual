import { crismonText, moglanDemo } from "@/app/font";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="relative overflow-hidden">
      {/* marquee image */}
      <div className="absolute -top-5 right-28">
        <Image
          src={"/img/marque.png"}
          alt="group"
          width={1000}
          height={1000}
          className="w-full -rotate-[25deg]"
          objectFit="cover"
        />
      </div>
      <div className="absolute -bottom-36 -right-56">
        <Image
          src={"/img/marque.png"}
          alt="group"
          width={1000}
          height={1000}
          className="w-full -rotate-[30deg]"
          objectFit="cover"
        />
      </div>

      {/* marquee image */}
      <div className="md:flex space-x-20 items-center ">
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
        <div className="flex-1">
          {/* Image Positioned at Top-Left */}

          {/* Text Content */}
          <div className="mt-52">
            <p className={`${moglanDemo.className} text-5xl`}>WHY CHOOSE ME?</p>
            <p
              className={`${crismonText.className} italic text-2xl w-[541px] text-justify mt-7`}
            >
              I am Stan Chakma, a passionate photographer with over 8 years of
              experience in capturing stunning, personalized images. Let&apos;s
              connect and bring your vision to life, whether it&apos;s a
              wedding, engagement, or any other special occasion!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
