"use client"

import dynamic from "next/dynamic";

const SearchBox = dynamic(() => import("@/components/SearchBox/SearchBox"));

import { useParams } from "next/navigation";

export default function Hero() {
    const pathname = useParams();
  const searchWord = decodeURIComponent(pathname?.search as string).replace(/%20/g, ' ');
  return (
    <div className="mt-[177.56px] w-full flex flex-col justify-center items-center gap-6">
      <SearchBox />
      <h2 className="text-white text-center font-euclid_circular_b font-bold text-[30px] md:text-[42.614px] leading-[205%]">
        Results: {searchWord}
      </h2>
    </div>
  );
}
