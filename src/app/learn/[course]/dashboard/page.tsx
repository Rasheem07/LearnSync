import { Progress } from "@/components/ui/progress";
import { Calendar, ChevronDownCircle, MoreHorizontal, SaveAllIcon, Share, Star } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <div className="w-full px-5 py-4 no-scrollbar max-screen min-screen flex gap-5 justify-between">
      <div className="flex-1 max-w-[68.5%] space-y-4">
        <div className="flex items-center justify-between w-full pr-2">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-gray-700">
              Full Stack Web developer for Beginners
            </h2>
            <div className="flex items-center gap-3 text-[16px]">
              <div className="flex items-center gap-1 text-gray-800 font-semibold">
                5.0
                <Star className="text-yellow-400 fill-yellow-400 h-4 w-4" />
              </div>
              |<p className="text-zinc-500">Review (1K)</p>|
              <p className="text-zinc-500">10K Students</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Calendar className="h-5 w-5 text-zinc-600 font-bold" />
            <SaveAllIcon className="h-5 w-5 text-zinc-600 font-bold" />
            <Share className="h-5 w-5 text-zinc-600 font-bold" />
          </div>
        </div>

        <video
          controls
          src="/coursedemo.mp4"
          className="w-full rounded-lg shadow-md h-[60%] object-cover"
          //   poster="/college-girl.avif"
        />

        <div className="flex items-center border-b-4 gap-6 border-zinc-300 font-semibold text-gray-700 mt-2 max-w-min relative">
          <span className="text-lg text-blue-500 border-b-4 border-blue-500 rounded-[1px] relative -bottom-1">
            About
          </span>
          <span className="text-lg ">Reviews</span>
          <span>Discussion</span>
        </div>

        <div className="space-y-3 no-scrollbar mt-2">
          <h2 className="text-lg font-bold text-gray-900 capitalize">
            About course
          </h2>
          <p className="text-zinc-600 text-[16px] leading-5 overflow-y-scroll">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia
            ut laudantium. Porro, et qui! Inventore nulla praesentium maxime
            reiciendis voluptas, fuga doloremque rem.
          </p>
          <p className="text-zinc-600 text-[16px] leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia
            ut laudantium. Porro, et qui! Inventore nulla praesentium maxime
            reiciendis voluptas, fuga doloremque rem.
          </p>
          <p className="text-zinc-600 text-[16px] leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia
            ut laudantium. Porro, et qui! Inventore nulla praesentium maxime
            reiciendis voluptas, fuga doloremque rem.
          </p>
          <p className="text-zinc-600 text-[16px] leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia
            ut laudantium. Porro, et qui! Inventore nulla praesentium maxime
            reiciendis voluptas, fuga doloremque rem.
          </p>
          <p className="text-zinc-600 text-[16px] leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia
            ut laudantium. Porro, et qui! Inventore nulla praesentium maxime
            reiciendis voluptas, fuga doloremque rem.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 flex-1 max-w-[30%] my-4">
        <div className="bg-white rounded-md space-y-3 shadow-md py-3 px-5">
          <div className="flex items-center justify-between px-1 w-full">
            <h2 className="text-lg font-bold text-gray-900 capitalize">
              Progress
            </h2>
            <MoreHorizontal />
          </div>
          <div className="">
              <Progress value={86} className="w-full text-blue-500" />
              <div className="flex items-center py-0 5 w-full justify-between">
                 <p className="text-gray-700 text-sm">Full stack web developer</p>
                 <span>10/10</span>
              </div>
          </div>
        </div>

        <div className="bg-white rounded-md shadow-md p-5">
          <div className="flex items-center py-0 5 w-full justify-between">
                 <h3 className="text-gray-700 text-sm">Video</h3>
                 <div className="flex items-center gap-1">
                   <span>(1/10)</span>
                   <ChevronDownCircle className="fill-blue-500 text-white h-6 w-6" />
                 </div>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <div className="flex items-center py-0 5 w-full justify-between">
                 <h3 className="text-gray-700 text-sm">Audio</h3>
                 <div className="flex items-center gap-1">
                   <span>(1/10)</span>
                   <ChevronDownCircle className="fill-blue-500 text-white h-6 w-6" />
                 </div>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <div className="flex items-center py-0 5 w-full justify-between">
                 <h3 className="text-gray-700 text-sm">Module</h3>
                 <div className="flex items-center gap-1">
                   <span>(1/10)</span>
                   <ChevronDownCircle className="fill-blue-500 text-white h-6 w-6" />
                 </div>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <div className="flex items-center py-0 5 w-full justify-between">
                 <h3 className="text-gray-700 text-sm">Quiz</h3>
                 <div className="flex items-center gap-1">
                   <span>(1/10)</span>
                   <ChevronDownCircle className="fill-blue-500 text-white h-6 w-6" />
                 </div>
          </div>
        </div>
      </div>
    </div>
  );
}
