"use client";

import Button from "@/components/Button/Button";
import CheckedCheckBox from "@/components/customSVGs/CheckedCheckBox";
import CloseSvg from "@/components/customSVGs/CloseSvg";
import EmptyCheckBox from "@/components/customSVGs/EmptyCheckBox";
import { PixabayImage } from "@/lib/types/pixabay";
import Image from "next/image";
import { FC, useState } from "react";
import {useRouter} from "next/navigation";
import Loader from "@/components/Loader/Loader";

interface ImagePreviewProps {
  item: PixabayImage;
  hidePreview: () => void;
}

const ImagePreview: FC<ImagePreviewProps> = ({ item, hidePreview }) => {
  const initialOptions = [
    {
      name: "Small",
      resolution: "640x960",
      url: item?.webformatURL,
      check: false,
    },
    {
      name: "Medium",
      resolution: "1920x2660",
      url: item?.largeImageURL,
      check: false,
    },
    {
      name: "Big",
      resolution: "2400x3600",
      url: item?.fullHDURL,
      check: false,
    },
    {
      name: "Original",
      resolution: `${item?.imageHeight}x${item?.imageWidth}`,
      url: item?.imageURL,
      check: false,
    },
  ];
  const [downloadOptions, setDownloadOptions] = useState(initialOptions);
  const [loading,setLoading] = useState(true);
  const handleClick = (obj:{name:string,check:boolean},i:number) => {
    setDownloadOptions(prev => {
      const newArr = [...downloadOptions];
      newArr[i].check = !(obj.check);
      return newArr;
    });
  };
  const downloadImages = () => {
    downloadOptions.forEach((option, index) => {
      if (option.check) {
        const { url, name } = option;
        fetch(url)
          .then((response) => response.blob())
          .then((blob) => {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `${name}_image_${index + 1}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          })
          .catch((error) => {
            console.error(`Error downloading image ${name}:`, error);
          });
      }
    });
  };
  
  const router = useRouter();
  return (
    <div className="fixed z-30 inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.12)] backdrop-blur-sm">
      <div className="w-[95.07vw] max-w-[1217px] block rounded-[8.89px]">
        <div className="w-full bg-[#F5F5F5] rounded-t-[8.89px] flex justify-between items-center pl-5 pr-5 py-2.5 md:pl-8 md:pr-9">
          <p className="text-[#3B4043] font-euclid_circular_b text-[21.325px] leading-[51.4px] font-medium">
            Preview ID:{item.id}
          </p>
          <CloseSvg className="cursor-pointer" onClick={hidePreview} />
        </div>
        <div className="pl-5 pr-5 py-2.5 md:pl-8 md:pr-9 bg-white rounded-b-[8.89px]">
          <div className="flex flex-col items-center justify-start md:items-center md:justify-between md:flex-row ">
            <div className="block relative max-h-[75vh] h-max w-full aspect-[8/5] md:w-[calc(98%-275px)] rounded-[7.1px]">
              <Image
                src={item?.largeImageURL}
                priority
                onLoadingComplete={()=>{setLoading(false)}}
                onLoad={()=>{setLoading(false)}}
                fill
                alt={item?.tags}
                className="object-cover object-center rounded-[7.1px] cursor-pointer"
              />
              {loading&&
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.12)] backdrop-blur-sm flex justify-center items-center rounded-[7.1px]"><Loader/></div>
              }
            </div>
            <div className="flex flex-col justify-start items-start w-full md:w-[275px] self-start">
              <div className="flex flex-col">
                <p className="text-[#3B4043] text-[21.325px] font-medium font-euclid_circular_b leading-[51.4px]">
                  Download
                </p>
                <div className={`mt-[7.5px] w-full flex flex-col gap-0 border-[#DEE8F4] border-[0.89px] rounded-[5.33px] overflow-hidden bg-white`}>
                  {downloadOptions.map((obj, i) => (
                    <div
                      key={i}
                      className={`py-[3.554px] pr-[17.771px] pl-[14.217px] w-[275px] flex items-center justify-between ${obj.check?"bg-[#F5F5F5]":""}`}
                    >
                      <div className="w-[calc(100%-37.3px)] flex justify-between items-center">
                        <p className="text-[#475467] text-[12.44px] leading-[171.429%] font-euclid_circular_b">
                          {obj.name}
                        </p>
                        <p className="text-[#475467] text-[12.44px] leading-[33.765px] font-euclid_circular_b font-bold">
                          {obj.resolution}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          handleClick(obj,i)
                        }}
                      >
                        {obj.check ? (
                          <CheckedCheckBox className="cursor-pointer" />
                        ) : (
                          <EmptyCheckBox className="cursor-pointer" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
                <button onClick={downloadImages} className="w-full mt-[22px] h-[33.768px] flex justify-center items-center rounded-[4.443px] bg-[#4BC34B]">
                  <p className="text-white text-center font-euclid_circular_b text-[11.551px] font-semibold leading-[153.846%]">
                    Download for free!
                  </p>
                </button>
                {/* download */}
              </div>
              <div className="flex flex-col gap-[7.5px] justify-start items-start">
                <p className="text-[#3B4043] text-[21.325px] leading-[241.25%] font-euclid_circular_b font-medium">
                  Information
                </p>
                <div className="grid grid-cols-9">
                  <div className="flex flex-col col-span-4 justify-start items-start">
                    <p className="text-[#717579] font-euclid_circular_b text-[12.44px] leading-[23.102px] capitalize font-semibold">
                      User
                    </p>
                    <p className="text-[#3B4043] font-euclid_circular_b text-[15.994px] leading-[23.102px] capitalize font-semibold text-ellipsis overflow-hidden max-w-full">
                      {item?.user}
                    </p>
                  </div>
                  <div className="flex flex-col col-span-3 justify-start items-start">
                    <p className="text-[#717579] font-euclid_circular_b text-[12.44px] leading-[23.102px] capitalize font-semibold">
                      User ID
                    </p>
                    <p className="text-[#3B4043] font-euclid_circular_b text-[15.994px] leading-[23.102px] capitalize font-semibold text-ellipsis overflow-hidden max-w-full">
                      {item?.user_id}
                    </p>
                  </div>
                  <div className="flex flex-col col-span-2 justify-start items-start">
                    <p className="text-[#717579] font-euclid_circular_b text-[12.44px] leading-[23.102px] capitalize font-semibold">
                      Type
                    </p>
                    <p className="text-[#3B4043] font-euclid_circular_b text-[15.994px] leading-[23.102px] capitalize font-semibold text-ellipsis overflow-hidden max-w-full">
                      {item?.type}
                    </p>
                  </div>
                  <div className="flex flex-col col-span-4 justify-start items-start">
                    <p className="text-[#717579] font-euclid_circular_b text-[12.44px] leading-[23.102px] capitalize font-semibold">
                      Views
                    </p>
                    <p className="text-[#3B4043] font-euclid_circular_b text-[15.994px] leading-[23.102px] capitalize font-semibold text-ellipsis overflow-hidden max-w-full">
                      {item?.views}
                    </p>
                  </div>
                  <div className="flex flex-col col-span-3 justify-start items-start">
                    <p className="text-[#717579] font-euclid_circular_b text-[12.44px] leading-[23.102px] capitalize font-semibold">
                      Downloads
                    </p>
                    <p className="text-[#3B4043] font-euclid_circular_b text-[15.994px] leading-[23.102px] capitalize font-semibold text-ellipsis overflow-hidden max-w-full">
                      {item?.downloads}
                    </p>
                  </div>
                  <div className="flex flex-col col-span-2 justify-start items-start">
                    <p className="text-[#717579] font-euclid_circular_b text-[12.44px] leading-[23.102px] capitalize font-semibold">
                      Likes
                    </p>
                    <p className="text-[#3B4043] font-euclid_circular_b text-[15.994px] leading-[23.102px] capitalize font-semibold text-ellipsis overflow-hidden max-w-full">
                      {item?.likes}
                    </p>
                  </div>
                </div>
                {/* information */}
              </div>
            </div>
          </div>
          <div className="flex justify-start pb-5 pt-7 w-full items-center gap-[13.8px] flex-wrap">
            <p className="text-[#3B4043] text-[17.771px] leading-[51.447px] font-bold font-euclid_circular_b">Tags:</p>
            <div className="flex justify-start items-center gap-[7.1px]">
                    {item?.tags?.split(",").map((str,i)=>(<Button onClick={()=>{router.push(str)}} key={i} variant="tag">{str}</Button>))}
            </div>
            {/* tags bottom */}</div>
        </div>
      </div>
    </div>
  );
};
export default ImagePreview;
