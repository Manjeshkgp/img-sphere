"use client";
import { PixabayResponse } from "@/lib/types/pixabay";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AllImages({
  pixabayResponse,
}: {
  pixabayResponse: PixabayResponse | undefined;
}) {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center items-start">
        <div className="max-w-[1280px] w-[90vw] px-[35px] py-[30px] md:py-[44.39px] gap-y-[39.68px] flex justify-around items-start flex-wrap">
          {pixabayResponse?.hits?.map((item) => (
            <div
              key={item?.id}
              className="flex flex-col justify-start items-start w-full md:w-[calc(50%-10px)] lg:w-[calc(33%-10px)] gap-[11.54px]"
            >
              <div className="block relative w-full h-[242px]">
                <Image
                  src={item?.webformatURL}
                  // blurDataURL={item?.previewURL}
                  // placeholder="blur"
                  loading="lazy"
                  fill
                  alt={item?.tags}
                  className="object-cover object-center rounded-[7.1px] cursor-pointer"
                />
              </div>

              <div className="flex justify-start items-center gap-[7.1px]">
                {item?.tags?.split(",").map((str, i) => (
                  <button
                    onClick={() => {
                      router.push(str);
                    }}
                    key={i}
                    className="flex justify-center items-center text-center px-[7.1px] bg-[#F5F5F5] dark:bg-slate-900 text-[#767676] dark:text-[#F5F5F5] font-helvetica_neue text-[11.54px] leading-[200%] rounded-[1.78px] border-none"
                  >
                    {str}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
