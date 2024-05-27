import { BookOpen, Dot, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
    imageURL: string,
    course: string,
    price: number | 'Free',
    teacher: string,
    Rating: number
};

export default function LearnCard({imageURL, course, price, teacher, Rating}: Props) {
  return (
    <div className="flex flex-col p-4 rounded-md shadow-md bg-white">
      <img
        src={imageURL}
        alt=""
        className="object-cover h-[200px] w-full rounded-lg border-b"
      />
      <div className="flex items-center justify-between flex-1 px-2 mt-3">
        <h2 className="text-gray-700 font-bold text-lg capitalize flex justify-between flex-1 items-center">
          {course}
          <span className="flex items-center tracking-wide">
            {price !='Free' ?
            <strong className="text-blue-500">${price}</strong>
            : 
            <strong className="text-green-400 font-semibold">{price}</strong>
           }
          </span>
        </h2>
      </div>
      <p className="text-sm px-2 text-zinc-500 space-x-2 flex items-center">
        {teacher} <Dot className="text-gray-600" />
        {Rating}
        <StarIcon className="text-yellow-600 fill-yellow-500 h-4 w-4" />
      </p>
      <div className="flex items-center mt-4 px-2 flex-1 justify-between">
        <p className="text-zinc-500 font-medium flex items-center gap-1">
          <BookOpen className="text-zinc-500 h-6 w-6" /> 110+ Content
        </p>
        <button className="border-none outline-none bg-none text-blue-500">
          view details
        </button>
      </div>
    </div>
  );
}
