"use client";
import "@/app/globals.css"

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const MoonSvg = dynamic(()=>import("@/components/customSVGs/MoonSvg"));
const SunSvg = dynamic(()=>import("@/components/customSVGs/SunSvg"));

const Themechanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const light = theme === "light";
  return (
    <button className="fixed z-40 bottom-5 right-5 dark:bg-gray-900 dark:text-yellow-400 bg-gray-100 text-gray-900 w-10 h-10 rounded-full flex justify-center items-center">
      {light ? (
        <MoonSvg onClick={() => setTheme("dark")}/>
      ) : (
        <SunSvg onClick={() => setTheme("light")}/>
      )}
    </button>
  );
};

export default Themechanger;
