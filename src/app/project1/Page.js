"use client";
import { logo } from "@/assets";
import Image from "next/image";
import React from "react";

const dataNavbar = [
  {
    title: "Home",
  },
  {
    title: "About",
  },
  {
    title: "Promotions",
    badge: "HOT",
    colorBadge: "bg-red-500",
  },
  {
    title: "Blogs",
  },
  {
    title: "Contact Us",
  },
];

const Navbar = () => {
  return <div className="w-full flex justify-center">Hello Wordl!!!</div>;
};

export default Navbar;
