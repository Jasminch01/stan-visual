import { crismonText, moglanDemo } from "@/app/font";
import Image from "next/image";
import React from "react";

const Strories = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto space-x-20 py-24">
      <div className="flex-1 justify-start">
        <p className={`${moglanDemo.className} text-4xl mb-10 relative`}>
          BEUTIFUL WORDS{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 62 58"
            fill="none"
            className="absolute -top-5 -right-10"
          >
            <path
              d="M37.5 0L40.1333 21.8667L62 24.5L40.1333 27.1333L37.5 49L34.8667 27.1333L13 24.5L34.8667 21.8667L37.5 0Z"
              fill="black"
            />
            <path
              d="M19 20L21.0421 36.9579L38 39L21.0421 41.0421L19 58L16.9579 41.0421L0 39L16.9579 36.9579L19 20Z"
              fill="black"
            />
          </svg>
        </p>
        <p className={`text-justify ${crismonText.className} text-2xl tracking-[2.08px] text-[#2E2E2E]`}>
          Lorena and Sebastian love story is a testament to the power of
          soulmate connections. they found in each other a love that transcends
          time and space, a love that has the ability to withstand any challenge
          that comes their way. Their engagement marks the beginning of a
          lifelong journey together, a journey filled with passion, devotion,
          and a love that burns brighter with each passing day.
        </p>
      </div>
      <div className="flex-1 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="115"
          viewBox="0 0 128 115"
          fill="none"
          className="absolute -top-5 -right-5"
        >
          <path
            d="M126.5 114C126.5 114.276 126.724 114.5 127 114.5C127.276 114.5 127.5 114.276 127.5 114L126.5 114ZM127 3.00001L127.5 3.00001L127.5 2.50001L127 2.50001L127 3.00001ZM5.66666 3C5.66666 1.52723 4.47276 0.333325 2.99999 0.333325C1.52724 0.333325 0.33333 1.52723 0.33333 3C0.33333 4.47275 1.52724 5.66666 2.99999 5.66666C4.47276 5.66666 5.66666 4.47275 5.66666 3ZM127.5 114L127.5 3.00001L126.5 3.00001L126.5 114L127.5 114ZM127 2.50001L2.99999 2.5L2.99999 3.5L127 3.50001L127 2.50001Z"
            fill="black"
          />
        </svg>
        <Image
          src={"/img/story1.jpg"}
          alt="story-image"
          width={500}
          height={500}
          className="bg-cover"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="109"
          viewBox="0 0 128 109"
          fill="none"
          className="absolute -bottom-5 -left-5"
        >
          <path
            d="M1.5 1C1.5 0.723858 1.27614 0.5 1 0.5C0.723858 0.5 0.5 0.723858 0.5 1H1.5ZM1 106H0.5V106.5H1V106ZM122.333 106C122.333 107.473 123.527 108.667 125 108.667C126.473 108.667 127.667 107.473 127.667 106C127.667 104.527 126.473 103.333 125 103.333C123.527 103.333 122.333 104.527 122.333 106ZM0.5 1V106H1.5V1H0.5ZM1 106.5H125V105.5H1V106.5Z"
            fill="black"
          />
        </svg>
      </div>
      <div
        className={`flex-1 text-center ${moglanDemo.className} text-4xl space-y-5`}
      >
        <p>Nisarga X Rahul</p>
        <p>Lorena X Sebastian</p>
        <p className="">Asta X Sheile</p>
        <p className="">Nirob X Subra</p>
      </div>
    </div>
  );
};

export default Strories;
