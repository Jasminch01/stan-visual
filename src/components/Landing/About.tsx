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
          className="w-full -rotate-[25deg] hidden md:block"
          objectFit="cover"
        />
      </div>
      <div className="absolute -bottom-36 -right-56">
        <Image
          src={"/img/marque.png"}
          alt="group"
          width={1000}
          height={1000}
          className="w-full -rotate-[30deg] hidden md:block"
          objectFit="cover"
        />
      </div>

      {/* marquee image */}
      <div className="md:flex lg:space-x-20 items-center px-10 lg:px-0">
        {/* Left: Image */}
        <div className="flex-1 z-10 mt-10 lg:mt-0">
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
          <div className="lg:mt-52 py-20 lg:py-0">
            <p className={`${moglanDemo.className} lg:text-5xl text-3xl`}>WHY CHOOSE ME?</p>
            <p
              className={`${crismonText.className} italic lg:text-2xl text-xl lg:w-[541px] text-justify mt-7`}
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
