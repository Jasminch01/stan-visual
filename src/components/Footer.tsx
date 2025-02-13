import { crismonText, moglanDemo } from "@/app/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-[#181818] py-32 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4 font-semibold text-center lg:text-center 2xl:text-left">
        <div className="flex justify-center">
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="susnata-logo"
          />
        </div>
        <div className="text-white">
          <h3
            className={`font-display text-2xl" ${moglanDemo.className} text-2xl`}
          >
            Get In Touch
          </h3>
          <div className={`flex flex-col mt-2 ${crismonText.className}`}>
            <a className="" href="mailto:stan.visuals01@gmail.com">
              stan.visuals01@gmail.com
            </a>
            <a className="" href="tel:+61415865704">
              +61415865704
            </a>
          </div>
        </div>
        <div className="text-white">
          <h3
            className={`"font-display text-2xl" ${moglanDemo.className} text-2xl`}
          >
            Quick Links
          </h3>
          <div className={`flex flex-col mt-2 ${crismonText.className}`}>
            <Link href={"/stories"}>Stories</Link>
            <Link href={"/stories"}>Videos</Link>
            <Link href={"/stories"}>Package</Link>
            <Link href={"/testimonials"}>Contact</Link>
          </div>
        </div>
        <div className="text-white">
          <h3
            className={`"font-display text-2xl" ${moglanDemo.className} text-2xl`}
          >
            Social Media
          </h3>
          <div className={`flex flex-col mt-2 ${crismonText.className}`}>
            <a
              className=""
              href="https://www.facebook.com/profile.php?id=100091904503239"
            >
              Facebook
            </a>
            <a
              className="t"
              href="https://www.instagram.com/sc_visual_portfolio/"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20">
        <hr />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2  bottom-2 my-10">
        <p className="text-sm lg:text-md whitespace-nowrap text-white">
          Copyright {year} All rights reversed by Susnata
        </p>
      </div>
    </div>
  );
};

export default Footer;
