"use client";
import Button from "@/components/Button/Button";
import { PixabayImage, PixabayResponse } from "@/lib/types/pixabay";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ImagePreview from "./ImagePreview";

export default function AllImages({
  pixabayResponse,
}: {
  pixabayResponse: PixabayResponse | undefined;
}) {
  const router = useRouter();
  const [selectImage,setSelectImage] = useState<PixabayImage|undefined>(undefined);
  const hideImgPreview = () => {
    setSelectImage(undefined);
  }
  return (
    <>
    {selectImage!==undefined&&<ImagePreview hidePreview={hideImgPreview} item={selectImage}/>}
      <div className="flex justify-center items-start">
        <div className="max-w-[1280px] w-[90vw] px-5 py-5 md:px-[35px] sm:py-[30px] md:py-[44.39px] gap-y-[39.68px] flex justify-around items-start flex-wrap">
          {pixabayResponse?.hits?.map((item) => (
            <div
              key={item?.id}
              className="flex flex-col justify-start items-start w-full md:w-[calc(50%-10px)] lg:w-[calc(33%-10px)] gap-[11.54px]"
            >
              <div className="block relative w-full h-[242px]">
                <Image
                  onClick={()=>{setSelectImage(item)}}
                  src={item?.webformatURL}
                  loading="lazy"
                  fill
                  alt={item?.tags}
                  className="object-cover object-center rounded-[7.1px] cursor-pointer"
                />
              </div>

              <div className="flex justify-start items-center gap-[7.1px]">
                {item?.tags?.split(",").map((str, i) => (
                  <Button
                    onClick={() => {
                      router.push(str);
                    }}
                    key={i}
                    variant="tag"
                  >
                    {str}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
