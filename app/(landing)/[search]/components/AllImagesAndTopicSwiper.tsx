"use client";

import React, { useEffect, useState } from "react";
import TopicSwiper from "./TopicSwiper";
import AllImages from "./AllImages";
import { useSession } from "next-auth/react";
import { useGetPhotosQuery } from "@/store/queries/photoApi";
import Loader from "@/components/Loader/Loader";
import { PixabayResponse } from "@/lib/types/pixabay";

export default function AllImagesAndTopicSwiper({
  list,
  search,
}: {
  list: string[];
  search: string;
}) {
  const { status } = useSession();
  const [tagsArr, setTagsArr] = useState<string[]>([]);
  const { data, isLoading } = useGetPhotosQuery(
    { search: search },
    { skip: status !== "authenticated" }
  );
  function getUniqueTags(responses: PixabayResponse): void {
    const tagsSet = new Set<string>();

    responses?.hits?.forEach((image) => {
      const imageTags = image?.tags?.split(",").map((tag) => tag?.trim());
      imageTags?.forEach((tag) => tagsSet?.add(tag));
    });
    setTagsArr(Array.from(tagsSet));
  }
  useEffect(() => {
    if (data !== undefined) {
      getUniqueTags(data as PixabayResponse);
    }
  }, [data]);

  return (
    <>
      {isLoading && (
        <div className="fixed z-30 flex justify-center items-center inset-0 dark:bg-[rgba(0,0,0,0.4)] bg-[rgba(255,255,255,0.4)] backdrop-blur-3xl">
          <Loader />
        </div>
      )}
      <div className=" dark:bg-slate-950 bg-white min-h-[calc(100vh-320px)] md:min-h-[calc(100vh-358px)] w-full">
        <TopicSwiper list={tagsArr} />
        {data !== undefined ? (
          <AllImages pixabayResponse={data as PixabayResponse} />
        ) : (
          <div className="w-full h-full flex justify-center items-center min-h-20">
            {status !== "authenticated" ? (
              <p className="text-3xl font-euclid_circular_b">Please Login</p>
            ) : (
              <p className="text-3xl font-euclid_circular_b">No Response</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
