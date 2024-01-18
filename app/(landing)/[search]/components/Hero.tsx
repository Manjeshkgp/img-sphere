"use client"

import dynamic from "next/dynamic";

const SearchBox = dynamic(() => import("@/components/SearchBox/SearchBox"));

import { useParams } from "next/navigation";

export default function Hero() {
    const pathname = useParams();
  return (
    <div className="mt-[177.56px] w-full flex flex-col justify-center items-center gap-6">
      <SearchBox />
      <h2 className="text-white text-center font-euclid_circular_b font-bold text-[30px] md:text-[42.614px] leading-[205%]">
        Results: {pathname?.search}
      </h2>
    </div>
  );
}
