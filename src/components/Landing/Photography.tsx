import Image from "next/image";
import React from "react";

const photographyImage = [
  {
    src: "/img/photo-1.jpg",
  },
  {
    src: "/img/photo-2.jpg",
  },
  {
    src: "/img/photo-3.jpg",
  },
  {
    src: "/img/photo-4.jpg",
  },
];

const Photography = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {photographyImage.map((_img, idx) => (
          <div key={idx} className="w-full h-[600px] relative overflow-hidden">
            <Image
              alt="photography-image"
              src={_img.src}
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;
