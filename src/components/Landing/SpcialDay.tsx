import { crismonText, moglanDemo } from "@/app/font";
import Image from "next/image";
import React from "react";

const SpcialDay = () => {
  return (
    <div className="pt-20 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-white">
          <p className={`${moglanDemo.className} text-4xl`}>
            LET’S MAKE YOUR DAY SPECIAL
          </p>
          <p className={`${crismonText.className} text-lg`}>
            Let&apos;s connect and bring your vision to life, whether it&apos;s
            a wedding, engagement, or any other special occasion!
          </p>
        </div>
        <div className="relative">
          {/* Centered Absolute Image at the Bottom */}
          <div className="pl-4 pt-4 rounded-t bg-white absolute left-[45.5%] bottom-0 transform -translate-x-1/2 shadow-lg">
            <Image
              src={"/img/photo.png"}
              width={280}
              height={328}
              alt="susnata-photography"
              className="rounded"
            />
          </div>

          <div className="mt-32 flex flex-col md:flex-row space-x-[6.5rem]">
            <div className="px-4 pt-4 bg-white rounded-t">
              <Image
                src={"/img/photo-5.jpg"}
                width={500}
                height={500}
                alt="susnat-photography"
                className="w-full rounded-sm"
              />
              <div>
                <p
                  className={`text-sm mt-8 ${crismonText.className} italic text-justify`}
                >
                  Let&apos;s connect and bring your vision to life, whether
                  it&apos;s a wedding, engagement, <br /> or any other special
                  occasion!
                </p>
              </div>
            </div>

            <div></div>
            <div className="mt-20">
              <div className="px-4 bg-white rounded-t ">
                <div className="flex items-center py-5 space-x-10">
                  <p className={`${moglanDemo.className} text-3xl`}>Welcome</p>
                  <p
                    className={`${crismonText.className} italic text-sm text-justify`}
                  >
                    Let&apos;s connect and bring your vision to life, whether
                    it&apos;s a wedding, engagement, or any other special
                    occasion!
                  </p>
                </div>
                <Image
                  src={"/img/photo-7.jpg"}
                  width={500}
                  height={500}
                  alt="susnata-photography"
                  className="w-full rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpcialDay;
