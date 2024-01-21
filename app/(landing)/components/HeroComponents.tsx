import dynamic from 'next/dynamic';
import Link from 'next/link';

const SearchBox = dynamic(()=>import("@/components/SearchBox/SearchBox"));

export default function HeroComponents() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-[160px] lg:mt-[190.6px]">
        <h2
          style={{ textShadow: "0px 3.563px 3.563px rgba(0, 0, 0, 0.25)" }}
          className="mb-[50px] sm:mb-[76.05px] font-euclid_circular_b text-3xl sm:text-[45px] md:text-[58px] lg:text-[71.25px] leading-[123%] font-bold text-center text-white w-[90vw] max-w-[841px]"
        >
          Discover over 2,000,000 free Stock Images
        </h2>
        <SearchBox />
        <Link href={"/flowers, love, forest, river"} className="bg-[rgba(217,217,217,0.12)] backdrop-blur-[25px] shadow-navbar rounded-[8.91px] w-[271.6px] h-[39.18px] flex justify-center items-center font-euclid_circular_b text-[13.359px] leading-[160%] text-white mt-[20.48px] transition-all active:scale-90">
          <p className="font-normal">
            <span className="font-bold">Trending: </span>
            flowers, love, forest, river
          </p>
        </Link>
      </div>
  )
}
