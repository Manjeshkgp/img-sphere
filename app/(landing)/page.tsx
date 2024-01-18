import dynamic from "next/dynamic";
const HeroComponents = dynamic(()=>import("./components/HeroComponents"))

export default function page() {
  return (
    <>
      <HeroComponents/>
    </>
  );
}
