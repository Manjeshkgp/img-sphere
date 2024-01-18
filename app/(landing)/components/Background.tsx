"use client";

import { FC, useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import Image from 'next/image'
import daybg from "@/public/assets/daybg.png";
import nightbg from "@/public/assets/nightbg.png";

interface BackgroundProps {
  
}

const Background: FC<BackgroundProps> = ({}) => {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();
  
    // useEffect only runs on the client, so now we can safely show the UI
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) {
      return null;
    }
  
    const light = theme === "light";
  return (<div className='fixed inset-0 select-none pointer-events-none z-[-1]'>
   <Image placeholder='blur' blurDataURL={light?daybg.blurDataURL:nightbg.blurDataURL} priority src={light?daybg:nightbg} alt='Background Image' sizes='100vw' className='w-screen h-screen object-cover object-top'/>
  </div>)
}

export default Background