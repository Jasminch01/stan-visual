import { crismonText, moglanDemo } from "@/app/font";
import Image from "next/image";
import React from "react";
import { Star } from "../svg";

const Testimonial = () => {
  return (
    <div>
      <div className="bg-black py-32">
        <div className="text-center text-white">
          <div className="flex justify-center items-center space-x-32">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="16"
              viewBox="0 0 72 16"
              fill="none"
            >
              <path
                d="M71 7C71.5523 7 72 7.44772 72 8C72 8.55228 71.5523 9 71 9V7ZM0.292892 8.70711C-0.0976334 8.31658 -0.0976334 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM71 9H1V7H71V9Z"
                fill="#747474"
              />
            </svg>
            <div>
              <p
                className={`${moglanDemo.className} text-4xl tracking-[1.4px]`}
              >
                TESTIMONIALS
              </p>
              <p className={`${crismonText.className}`}>
                My satisfied clients are the heartbeat of the business
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="16"
              viewBox="0 0 72 16"
              fill="none"
            >
              <path
                d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM71.7071 8.70711C72.0976 8.31658 72.0976 7.68342 71.7071 7.29289L65.3431 0.928932C64.9526 0.538408 64.3195 0.538408 63.9289 0.928932C63.5384 1.31946 63.5384 1.95262 63.9289 2.34315L69.5858 8L63.9289 13.6569C63.5384 14.0474 63.5384 14.6805 63.9289 15.0711C64.3195 15.4616 64.9526 15.4616 65.3431 15.0711L71.7071 8.70711ZM1 9H71V7H1V9Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#C1C1C1] py-20 relative h-[30rem]">
        {/* Testimonial */}
        <div className="flex justify-center absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="flex">
            <div className="bg-white flex justify-center rounded-tl-[60px] shadow-lg rounded-br-[60px] px-20 h-[418px]">
              <div className="flex justify-center items-center relative">
                <div className="absolute top-10 -right-8">
                  <Star />
                </div>
                <div className="space-y-10">
                  <p className={`text-3xl ${moglanDemo.className} text-center`}>
                    Lorena Sabastian
                  </p>
                  <p
                    className={`${crismonText.className} text-justify tracking-[0.6px] w-[335px] h-[136px]`}
                  >
                    I want to express my heartfelt thanks for the stunning video
                    and photos you captured for our engagement. Each image is a
                    work of art, and they truly captured the beauty and emotion
                    of that special day. You have made it very special for us.
                  </p>
                  <p
                    className={`${crismonText.className} text-lg italic text-center`}
                  >
                    Happy client
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image
                src={"/img/story1.jpg"}
                height={500}
                width={500}
                alt="susnata-photography"
                className="w-[302px] h-[357px]"
              />
            </div>
          </div>
        </div>
        {/* Testimonial */}
      </div>
    </div>
  );
};

export default Testimonial;
