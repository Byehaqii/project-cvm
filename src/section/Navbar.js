"use client";
import { logo } from "@/assets";
import Image from "next/image";
import React from "react";

const dataNavbar = [
  {
    title: "Home",
    page: "home",
  },
  {
    title: "About",
    page: "about",
  },
  {
    title: "Promotions",
    badge: "HOT",
    colorBadge: "bg-red-500",
  },
  {
    title: "Blogs",
    page: "blogs",
  },
  {
    title: "Contact Us",
    page: "contact us",
  },
];

const Navbar = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1920px] w-full px-[116px]">
        <div className="w-full flex justify-between h-[96px] items-center">
          <div>
            <Image
              alt="logo"
              width={500}
              height={500}
              src={logo}
              className="w-[207px]"
            />
          </div>
          <div className="flex">
            {dataNavbar?.map((item, i) => (
              <div
                onClick={() => alert(`memilih ${item.title}`)}
                key={i}
                className="px-[16px] text-[14px] font-bold cursor-pointer relative"
              >
                {item.badge && (
                  <div
                    className={`absolute top-[-15px] right-0 px-[9px] py-[3px] text-white text-[8px] rounded-full ${item.colorBadge}`}
                  >
                    {item.badge}
                  </div>
                )}
                <div className="opacity-70">{item.title}</div>
              </div>
            ))}
          </div>
          <div className="flex black-center">
            <button
              onClick={() => alert("click masuk")}
              className="text-white font-medium mr-[24px] cursor-pointer"
            >
              Masuk
            </button>
            <button
              onClick={() => alert("click daftar sekarang")}
              className="bg-green-500 px-[18px] py-[10px] rounded-full text-white cursor-pointer "
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
