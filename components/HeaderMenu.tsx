"use client";
import React from "react";
import { headerData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div
      className="hidden md:inline-flex w-1/3 
      items-center gap-5 text-sm capitalize 
      font-semibold"
    >
      {/* What is the pathname  */}
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`hover:text-darkColor hoveEffect relative group ${
            pathname === item?.href && "text-red-600"
          }`}
        >
          {item?.title}
          <span
            className={`absolute -bottom-0.5 
            left-1/2 w-0 h-0.5 bg-darkColor 
            hoverEffect group-hover:w-1/2 group-hover:left-0 ${
              pathname === item?.href && "w-1/2"
            }`}
          ></span>
          <span
            className={`absolute -bottom-0.5 
            left-1/2 w-0 h-0.5 bg-darkColor 
            hoverEffect group-hover:w-1/2 group-hover:left-0  ${
              pathname === item?.href && "w-1/2"
            }`}
          ></span>
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
