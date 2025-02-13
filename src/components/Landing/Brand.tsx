import { moglanDemo } from "@/app/font";
import Image from "next/image";
import React from "react";

const brands = [
  {
    path: "/img/brand-1.png",
  },
  {
    path: "/img/brand-2.png",
  },
  {
    path: "/img/brand-3.png",
  },
  {
    path: "/img/brand-4.png",
  },
];

const Brand = () => {
  return (
    <div className="py-20">
      <div>
        <p className={`text-center ${moglanDemo.className} lg:text-5xl text-3xl tracking-[1.04px]`}>
          BRAND COLLABORATIONS
        </p>
        <div className="flex justify-center mt-20">
          <div className="flex lg:flex-row flex-col justify-between items-end lg:space-x-32 space-y-10 lg:space-y-0">
            {brands.map((brand, idx) => (
              <Image
                key={idx}
                src={brand.path}
                width={200}
                height={200}
                alt="susnata-brand-image"
              ></Image>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
