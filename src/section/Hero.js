import { iHeroBanner } from "@/assets";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1920px] w-full px-[116px] pt-[50px]">
        <div className="flex">
          <div className="w-1/2">
            <div className="text-[64px] text-[#8BAC3E] leading-[64px] ">
              Good Food Us Good Mood
            </div>
            <div className="text-[18px] leading-[29px] text-[#757575] pt-[20px]">
              I would think that conserving our natural resources should be a
              conservative position: Not to waste food, and not to throw away a
              lot of the food that we buy.
            </div>
            <div>Text button</div>
          </div>
          <div className="w-1/2">
            <Image src={iHeroBanner} alt="HeroBanner" />
          </div>
        </div>
      </div>
    </div>
  );
}
