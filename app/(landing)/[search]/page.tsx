import dynamic from "next/dynamic";
import AllImages from "./components/AllImages";

const Hero = dynamic(() => import("./components/Hero"));
const TopicSwiper = dynamic(() => import("./components/TopicSwiper"));

export default function page() {
  const sampleArr = [
    "digital",
    "computer",
    "crypto",
    "google",
    "neem",
    "colgate",
    "digital",
    "computer",
    "crypto",
    "google",
    "neem",
    "colgate",
    "digital",
    "computer",
    "crypto",
    "google",
    "neem",
    "colgate",
  ];
  return (
    <>
      <Hero />
      <div className="relative z-[3] bg-white h-full min-h-[calc(100vh-320px)] md:min-h-[calc(100vh-358px)] w-full">
        <TopicSwiper list={sampleArr} />
        <AllImages/>
      </div>
    </>
  );
}
