"use client";

import { FC, useState } from "react";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("@/components/Button/Button"));
const SearchSvg = dynamic(() => import("@/components/customSVGs/SearchSvg"));

interface SearchBoxProps {}

const SearchBox: FC<SearchBoxProps> = ({}) => {
  const [text, setText] = useState<string>("");
  return (
    <div className="w-[90vw] max-w-[757px] h-[56px] md:h-[67.69px] rounded-[8.91px] px-[17.8px] bg-[rgba(217,217,217,0.12)] backdrop-blur-[25px] shadow-navbar flex justify-between items-center font-euclid_circular_b">
      <div className="flex justify-center items-center gap-[20.48px] w-full">
        <SearchSvg />
        <div className="w-[1.78px] h-[36.51px] rounded-lg bg-white"></div>
        <input
          type="text"
          className="bg-transparent focus:outline-none text-[17.813px] font-semibold font-euclid_circular_b leading-[112%] text-white w-full py-2"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
        />
      </div>
      <Button variant="primary">GO!</Button>
    </div>
  );
};

export default SearchBox;
