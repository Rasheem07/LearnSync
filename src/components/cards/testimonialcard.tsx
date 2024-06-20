import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  imageSize: number;
  headerSize: number;
  fontSize: number;
  data: {
    image?: string;
    studentName: string;
    proffession: string;
  };
  testimonial: {
    title: string;
    description: string;
  };
  className?: string
};

export default function Testimonialcard({ imageSize, headerSize, fontSize, data, testimonial , className}: Props) {
  return (
    <div className={cn("snap-start min-w-[322px] overflow-y-auto flex flex-col p-5 bg-white shadow-md rounded-md gap-4 ", className)}>
      <div className="flex items-center gap-3">
        <Image
          src="/demo-dp.avif"
          alt=""
          height={imageSize}
          width={imageSize}
          className="rounded-full shadow-inner"
        />
        <div>
          <h3 style={{ fontSize: headerSize, lineHeight: `${headerSize + 8}px` }} className="text-gray-900 font-medium">
            {data.studentName}
          </h3>
          <p style={{ fontSize, lineHeight: `${fontSize + 8}px` }} className="font-sans">
            {data.proffession}
          </p>
        </div>
      </div>
      <h3 style={{ fontSize: headerSize, lineHeight: `${headerSize + 8}px` }} className="font-semibold text-gray-900 tracking-normal">
        {testimonial.title}
      </h3>
      <p style={{ fontSize, lineHeight: `${fontSize + 8}px` }} className="max-h-[100px] no-scrollbar text-ellipsis overflow-y-auto whitespace-wrap font-sans">
        {testimonial.description}
      </p>
      <div className="flex items-center gap-2">
        <Star className="fill-yellow-500 text-yellow-500 h-4 w-4" />
        <Star className="fill-yellow-500 text-yellow-500 h-4 w-4" />
        <Star className="fill-yellow-500 text-yellow-500 h-4 w-4" />
        <Star className="fill-yellow-500 text-yellow-500 h-4 w-4" />
        <Star className="fill-yellow-500 text-yellow-500 h-4 w-4" />
      </div>
    </div>
  );
}
