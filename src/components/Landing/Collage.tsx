import Image from "next/image";
import React from "react";

const Collage = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="grid grid-cols-3">
        {/* First Image */}
        <div className="row-span-5 relative">
          <Image
            src={"/img/photo-4.png"}
            alt="susnat-image"
            width={657}
            height={1060}
            className="w-full h-full grayscale object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-100 transition-all flex flex-col justify-center items-center text-white">
            <h3 className="text-lg font-bold">POTRAITS</h3>
            <button className="mt-2 px-5 py-3 border-white border text-white">
            VIEW PHOTOS
            </button>
          </div>
        </div>

        {/* Second Image */}
        <div className="col-span-2 row-span-3 relative">
          <Image
            src={"/img/photo1.png"}
            alt="susnat-image"
            width={2000}
            height={2000}
            className="w-full grayscale object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-100 transition-all flex flex-col justify-center items-center text-white">
            <h3 className="text-lg font-bold">WEDDING PHOTOGRAPHY</h3>
            <button className="mt-2 px-5 py-3 border-white border text-white">
              VIEW STORIES
            </button>
          </div>
        </div>

        {/* Third Image */}
        <div className="row-span-2 col-start-2 row-start-4 relative">
          <Image
            src={"/img/photo2.png"}
            alt="susnat-image"
            width={500}
            height={500}
            className="w-full grayscale object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-100 transition-all flex flex-col justify-center items-center text-white">
            <h3 className="text-lg font-bold">BIRTHDAY</h3>
            <button className="mt-2 px-5 py-3 border-white border text-white">
              VIEW PHOTOS
            </button>
          </div>
        </div>

        {/* Fourth Image */}
        <div className="row-span-2 col-start-3 row-start-4 relative">
          <Image
            src={"/img/photo-3.png"}
            alt="susnat-image"
            width={500}
            height={500}
            className="w-full grayscale object-cover hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-black/50 opacity-100 transition-all flex flex-col justify-center items-center text-white">
            <h3 className="text-lg font-bold">BOOK A SESSION</h3>
            <button className="mt-2 px-5 py-3 border-white border text-white">
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collage;
