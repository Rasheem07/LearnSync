import Calender from "@/components/calender";
import Homework from "@/components/homework";
import CircularProgress from "@/components/ui/circularProgress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UpcommingSchedule from "@/components/upcommingSchedule";
import {
  BookOpen,
  CalendarFold,
  Check,
  Lamp,
  Lightbulb,
  MoreHorizontal,
  MoreVerticalIcon,
  SaveAllIcon,
  SaveIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const data = [
  { day: "Mon", lastWeek: 50, thisWeek: 75 },
  { day: "Tue", lastWeek: 70, thisWeek: 85 },
  { day: "Wed", lastWeek: 40, thisWeek: 65 },
  { day: "Thu", lastWeek: 60, thisWeek: 95 },
  { day: "Fri", lastWeek: 80, thisWeek: 55 },
  { day: "Sat", lastWeek: 90, thisWeek: 45 },
];

export default function Page({}: Props) {
  return (
    <div className=" w-full p-5 overflow-y-scroll no-scrollbar">
      <div className="w-full flex space-x-5 ">
        <div className="grid grid-cols-3 gap-3 grid-flow-row flex-1 max-w-[73%]">
          <div className="flex col-span-3 items-center bg-blue-500 rounded-md shadow-inner px-6 py-4 relative">
            <div className="flex flex-col space-y-2 max-w-[65%]">
              <h3 className="text-2xl text-white font-bold tracking-wider">
                Join now and Get Discount Voucher of upto 20%
              </h3>
              <p className="text-[16px] leading-6 text-zinc-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat perspiciatis repellendus vitae ea rerum!
              </p>
            </div>
            <div className="flex items-center gap-8">
              <BookOpen className="h-20 w-20 text-white opacity-45" />
              <div className="flex flex-row flex-1 absolute bottom-0 right-0">
                <Image
                  src="/college-girl.png"
                  alt="college girl"
                  width={300}
                  height={600}
                  className="object-contain"
                />
              </div>
              <CalendarFold className="h-20 w-20 text-white opacity-45 absolute right-0" />
            </div>
          </div>
          <div className="flex flex-row bg-blue-500 rounded-md shadow-inner p-6 relative overflow-hidden">
            <div className="flex flex-col gap-3 max-h-[132px] flex-1 max-w-[45%]">
              <div className="p-2 bg-white rounded-md shadow-inner max-w-fit">
                <Check className="h-6 w-6 text-blue-500 font-bold" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-wider">
                  1500
                </h2>
                <p className="text-[16px] leading-5 mt-2 text-zinc-100">
                  Completed Courses
                </p>
              </div>
            </div>
            <div className="absolute -right-4 bottom-[35px] rounded-lg shadow-sm bg-white blur-xs opacity-40 min-h-[75px] min-w-[100px] flex flex-col items-center justify-center">
              <Check className="h-28 w-28 font-extrabold text-blue-500" />
            </div>
          </div>
          <div className="flex items-center bg-yellow-400/90 rounded-md shadow-inner p-6 relative overflow-hidden">
            <div className="flex flex-col gap-3 flex-1 max-w-[45%]">
              <div className="p-2 bg-white rounded-md shadow-inner max-w-fit">
                <Lightbulb className="h-6 w-6 text-yellow-400/90 font-bold" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-wider">
                  993
                </h2>
                <p className="text-[16px] leading-5 mt-2 text-zinc-100">
                  In Progress Courses
                </p>
              </div>
            </div>
            <div className="absolute -right-8 bottom-[35px] rounded-lg opacity-70 min-h-[100px] min-w-[100px] flex flex-col items-center justify-center">
              <Lightbulb className="h-28 w-28 font-extrabold text-yellow-100" />
            </div>
          </div>
          <div className="flex items-center bg-gray-700 rounded-md shadow-inner p-6 relative overflow-hidden">
            <div className="flex flex-col gap-3 flex-1 max-w-[45%]">
              <div className="p-2 bg-white rounded-md shadow-inner max-w-fit">
                <SaveIcon className="h-6 w-6 text-gray-700 font-bold" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-wider">
                  545
                </h2>
                <p className="text-[16px] leading-5 mt-2 text-zinc-100">
                  Upcomming courses
                </p>
              </div>
            </div>
            <div className="absolute -right-8 bottom-[35px] rounded-lg blur-xs opacity-40 min-h-[100px] min-w-[100px] flex flex-col items-center justify-center">
              <SaveAllIcon className="h-28 w-28 font-extrabold text-gray-400" />
            </div>
          </div>
          <div className="px-5 py-1 bg-white rounded-md shadow-md flex-1 col-span-2 max-h-[300px]">
            <div className="flex items-center justify-between px-3 my-3">
              <h2 className="text-xl font-bold text-gray-900 capitalize">
                Learning Activity
              </h2>
              <div className="flex items-center space-x-3">
                <div className="flex items-center gap-1">
                  <span className="border-4 border-green-600 rounded-full p-0.5"></span>
                  Last week
                </div>
                <div className="flex items-center gap-1">
                  <span className="border-4 border-gray-600 rounded-full p-0.5"></span>
                  This week
                </div>
                <MoreHorizontal />
              </div>
            </div>
            <div className="flex flex-row min-h-[200px] mt-4">
              <div className="grid grid-cols-7 grid-flow-row w-full z-30">
                <div className="flex flex-col justify-between text-[16px] font-bold items-center text-gray-500">
                  <span>100</span>
                  <span>60</span>
                  <span>40</span>
                  <span>0</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="w-[2px] h-full bg-slate-200"></span>
                  <div className="mt-2">Mon</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="w-[2px] h-full bg-slate-200"></span>
                  <div className="mt-2">Tues</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="w-[2px] h-full bg-slate-200"></span>
                  <div className="mt-2">Wednes</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="w-[2px] h-full bg-slate-200"></span>
                  <div className="mt-2">Thurs</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="w-[2px] h-full bg-slate-200"></span>
                  <div className="mt-2">Fri</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="w-[2px] h-full bg-slate-200"></span>
                  <div className="mt-2">Satur</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-md shadow-md max-h-[300px] items-center py-5 px-4">
            <CircularProgress progress={75} />
            <div className=" space-y-1 flex flex-col items-center px-3">
              <h3 className="text-lg font-bold text-gray-900 capitalize">
                My progress
              </h3>
              <p className="text-sm text-gray-500 font-sans">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <button className="mt-2 rounded-md shadow-md bg-blue-500 py-1 px-3 text-white font-medium">
              More details
            </button>
          </div>
          <div className="flex flex-col px-5 py-1 bg-white col-span-3 rounded-md shadow-md min-h-[300px]">
            <div className="flex items-center justify-between px-3 my-3">
              <h2 className="text-xl font-bold text-gray-900 capitalize">
                Score Activity
              </h2>
              <div className="flex items-center space-x-3">
                <div className="flex items-center gap-1">
                  <span className="border-4 border-green-600 rounded-full p-0.5"></span>
                  Last week
                </div>
                <div className="flex items-center gap-1">
                  <span className="border-4 border-gray-600 rounded-full p-0.5"></span>
                  This week
                </div>
                <Select defaultValue="This week's">
                  <SelectTrigger className="w-[120px] border-none ring-none h-6 user-select-none ">
                    <SelectValue placeholder="time frame" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="This year's">This year&apos;s</SelectItem>
                    <SelectItem value="This month's">This month&apos;s</SelectItem>
                    <SelectItem value="This week's">This week&apos;s</SelectItem>
                  </SelectContent>
                </Select>
                <MoreHorizontal />
              </div>
            </div>
            <div className="flex flex-row min-h-[200px] mt-4">
              <div className="flex flex-col justify-between text-[16px] font-bold items-center text-gray-500 max-h-[200px]">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>
              <div className="flex flex-col mx-3 flex-1 h-full relative">
                <div className="flex flex-col justify-between flex-1 h-full items-center py-2.5 min-h-[200px] ">
                  <span className="h-[2px] w-full bg-slate-200 rounded-md"></span>
                  <span className="h-[2px] w-full bg-slate-200 rounded-md"></span>
                  <span className="h-[2px] w-full bg-slate-200 rounded-md"></span>
                  <span className="h-[2px] w-full bg-slate-200 rounded-md"></span>
                  <span className="h-[2px] w-full bg-slate-200 rounded-md"></span>
                </div>
                <div className="flex flex-row items-center justify-between relative">
                  <div className="flex flex-col h-full relative">
                    <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-[35px]">
                      <div className="min-w-3 h-16 bg-gray-500 shadow-sm rounded-t-sm rounded-none mx-0.5"></div>
                      <div className="min-w-3 min-h-[90px] bg-blue-500 shadow-sm rounded-t-sm mx-0.5"></div>
                    </div>
                    <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                      jan
                    </span>
                  </div>
                  <div className="flex flex-col h-full relative">
                    <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-[35px]">
                      <div className="min-w-3 h-24 bg-gray-500 shadow-sm rounded-t-sm rounded-none mx-0.5"></div>
                      <div className="min-w-3 min-h-[110px] bg-blue-500 shadow-sm rounded-t-sm mx-0.5"></div>
                    </div>
                    <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                      feb
                    </span>
                  </div>
                  <div className="flex flex-col h-full relative">
                    <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-[35px]">
                      <div className="min-w-3 h-16 bg-gray-500 shadow-sm rounded-t-sm rounded-none mx-0.5"></div>
                      <div className="min-w-3 min-h-[70px] bg-blue-500 shadow-sm rounded-t-sm mx-0.5"></div>
                    </div>
                    <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                      mar
                    </span>
                  </div>
                  <div className="flex flex-col h-full relative">
                    <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-[35px]">
                      <div className="min-w-3 h-20 bg-gray-500 shadow-sm rounded-t-sm rounded-none mx-0.5"></div>
                      <div className="min-w-3 min-h-[95px] bg-blue-500 shadow-sm rounded-t-sm mx-0.5"></div>
                    </div>
                    <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                      apr
                    </span>
                  </div>
                  <div className="flex flex-col h-full relative">
                    <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-[35px]">
                      <div className="min-w-3 h-24 bg-gray-500 shadow-sm rounded-t-sm rounded-none mx-0.5"></div>
                      <div className="min-w-3 min-h-[69px] bg-blue-500 shadow-sm rounded-t-sm mx-0.5"></div>
                    </div>
                    <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                      may
                    </span>
                  </div>
                  <div className="flex flex-col h-full relative">
                    <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-[35px]">
                      <div className="min-w-3 h-32 bg-gray-500 shadow-sm rounded-t-sm rounded-none mx-0.5"></div>
                      <div className="min-w-3 min-h-[120px] bg-blue-500 shadow-sm rounded-t-sm mx-0.5"></div>
                    </div>
                    <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                      june
                    </span>
                  </div>
                  <div className="flex flex-col h-full relative">
                    <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-[35px]">
                      <div className="min-w-3 h-36 bg-gray-500 shadow-sm rounded-t-sm rounded-none mx-0.5"></div>
                      <div className="min-w-3 min-h-[80px] bg-blue-500 shadow-sm rounded-t-sm mx-0.5"></div>
                    </div>
                    <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                      july
                    </span>
                  </div>
                  <div className="flex flex-col h-full relative">
                    <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-[35px]">
                      <div className="min-w-3 h-44 bg-gray-500 shadow-sm rounded-t-sm rounded-none mx-0.5"></div>
                      <div className="min-w-3 min-h-[140px] bg-blue-500 shadow-sm rounded-t-sm mx-0.5"></div>
                    </div>
                    <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                      aug
                    </span>
                  </div>
                  <div className="flex flex-col h-full relative">
                    <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-[35px]">
                      <div className="min-w-3 h-24 bg-gray-500 shadow-sm rounded-t-sm rounded-none mx-0.5"></div>
                      <div className="min-w-3 min-h-[120px] bg-blue-500 shadow-sm rounded-t-sm mx-0.5"></div>
                    </div>
                    <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                      sept
                    </span>
                  </div>
                  <div className="flex flex-col h-full relative">
                    <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-[35px]">
                      <div className="min-w-3 h-28 bg-gray-500 shadow-sm rounded-t-sm rounded-none mx-0.5"></div>
                      <div className="min-w-3 min-h-[140px] bg-blue-500 shadow-sm rounded-t-sm mx-0.5"></div>
                    </div>
                    <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                      octo
                    </span>
                  </div>
                  <div className="flex flex-col h-full relative">
                    <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-[35px]">
                      <div className="min-w-3 h-32 bg-gray-500 shadow-sm rounded-t-sm rounded-none mx-0.5"></div>
                      <div className="min-w-3 min-h-[110px] bg-blue-500 shadow-sm rounded-t-sm mx-0.5"></div>
                    </div>
                    <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                      nov
                    </span>
                  </div>
                  <div className="flex flex-col h-full relative">
                    <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-[35px]">
                      <div className="min-w-3 h-28 bg-gray-500 shadow-sm rounded-t-sm rounded-none mx-0.5"></div>
                      <div className="min-w-3 min-h-[110px] bg-blue-500 shadow-sm rounded-t-sm mx-0.5"></div>
                    </div>
                    <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                       dec
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-[29%] gap-4 overflow-y-scroll no-scrollbar">
          <Calender />
          <Homework />
          <UpcommingSchedule />
        </div>
      </div>
    </div>
  );
}
