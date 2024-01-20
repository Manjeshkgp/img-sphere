import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/Hero"));
const AllImagesAndTopicSwiper = dynamic(() => import("./components/AllImagesAndTopicSwiper"));

export async function generateMetadata({params}:{
  params:{
    search:string
  }
}) {
  const {search} = params;
  const decodedPathname = decodeURIComponent(search).replace(/%20/g, '+');
  return ({
    title: decodedPathname +" | Img Sphere"
  })
}


export default function page({params}:{
  params:{
    search:string
  }
}) {
  const {search} = params;
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
      <AllImagesAndTopicSwiper search={search} list={sampleArr}/>
    </>
  );
}
