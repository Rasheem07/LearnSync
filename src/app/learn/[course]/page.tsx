import { CheckCircle, ChevronLeft, Heart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="w-full px-5 py-4 no-scrollbar max-screen min-screen">
      <button className="flex items-center border-none outline-none py-2 text-[16px] text-gray-900 font-medium">
        <ChevronLeft className="h-4 w-4" /> back
      </button>
      <div className="flex justify-between flex-1 h-[92.5%] space-x-4">
        <div className="flex flex-col flex-1 max-w-[68%] px-5 py-6 bg-white rounded-md shadow-md gap-2">
          <h2 className="text-[28px] leading-[38px] font-bold text-gray-700 max-w-xs">
            Full Stack Web developer for Beginners
          </h2>
          <p className="text-zinc-600 pr-2 text-[16px] leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, maiores! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus, aperiam?
          </p>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">5.0</span>
            <div className="flex items-center space-x-0 5">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-300" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-300" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-300" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-300" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-300" />
            </div>
            <span className="text-zinc-500">|</span>
            <p className="text-zinc-500">Review (1k)</p>
            <span className="text-zinc-500">|</span>
            <p className="text-zinc-500">10K Students</p>
          </div>
          <div className="flex items-center gap-3 pt-1">
            <Image
              src="/demo-dp.avif"
              alt="student"
              height={35}
              width={35}
              className="h-[35px] w-[35px] object-contain rounded-lg"
            />
            Mrs. Samantha William
          </div>
          
          <div className="flex items-center border-b-2 gap-6 border-zinc-300 font-semibold text-gray-700 mt-2">
            <span className="text-lg text-blue-500 border-b-4 border-blue-500 rounded-[2px] shadow-md">
              About
            </span>
            <span className="text-lg ">Reviews</span>
          </div>

          <div className="space-y-3 overflow-y-scroll no-scrollbar mt-2">
            <h2 className="text-lg font-bold text-gray-900 capitalize">
              About course
            </h2>
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
            <p className="text-zinc-600 text-[16px] leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia
              ut laudantium. Porro, et qui! Inventore nulla praesentium maxime
              reiciendis voluptas, fuga doloremque rem.
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1 max-w-[37%] px-3 py-5 bg-white rounded-md shadow-md">
          <video
            controls
            src="/coursedemo.mp4"
            className="w-full px-1 rounded-lg shadow-md"
          />
          <div className="flex items-center gap-4 justify-between my-5">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-700">$499.00</h3>
              <del className="text-zinc-500 text-sm">$549</del>
              <p className="border-2 border-red-400 rounded-md shadow-md text-red-400 px-1 select-none">
                Save 15%
              </p>
            </div>
            <div className="flex items-center gap-0.5">
              <Heart className="fill-red-500 text-red-400 h-4 w-4" />
              add to whishlist
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text[16px] leading-6 font-semibold text-gray-700">
              What you will learn:
            </h2>
            <div className="flex flex-1 gap-4 mt-3">
              <div className="flex flex-col gap-2">
                <p className="flex items-center text-zinc-500"><CheckCircle className="h-4 w-4 fill-green-500 text-white"/>Basic Programming</p>
                <p className="flex items-center text-zinc-500"><CheckCircle className="h-4 w-4 fill-green-500 text-white"/>Create a Website</p>
                <p className="flex items-center text-zinc-500"><CheckCircle className="h-4 w-4 fill-green-500 text-white"/>Basic HTML & CSS</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex items-center text-zinc-500"><CheckCircle className="h-4 w-4 fill-green-500 text-white"/>Wireframe</p>
                <p className="flex items-center text-zinc-500"><CheckCircle className="h-4 w-4 fill-green-500 text-white"/>User Interface Design</p>
                <p className="flex items-center text-zinc-500"><CheckCircle className="h-4 w-4 fill-green-500 text-white"/>Create Response Design</p>
              </div>
            </div>
          </div>
          <div className="flex items-center my-5 justify-between gap-5 px-1">
            <button className="border border-gray-700 py-1 px-4 shadow-md text-gray-700 text-lg font-medium rounded-md flex-1">Add to Cart</button>
            <button className="bg-blue-500 py-1.5 px-4 shadow-md text-white text-lg rounded-md flex-1">Start Learning</button>
          </div>
        </div>
      </div>
    </div>
  );
}
