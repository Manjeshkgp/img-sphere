"use client";
import { useParams } from "next/navigation";
import { useGetPhotosQuery } from "@/store/queries/photoApi";
import { useSession } from "next-auth/react";

export default function AllImages() {
  const {status} = useSession();
  const pathname = useParams();
  const {data,isLoading} = useGetPhotosQuery({search:pathname?.search},{skip:status!=="authenticated"});
  console.log({data,isLoading});
  return (
    <div className='text-black'>

    </div>
  )
}
