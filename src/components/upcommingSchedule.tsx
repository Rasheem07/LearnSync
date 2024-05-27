import { PlusCircle } from "lucide-react";
import React from "react";
import Card from "./ui/card";

export default function UpcommingSchedule() {
  const date = new Date();
  return (
    <div className=" flex flex-col m-2">
      <div className="mb-3 flex items-center justify-between">
        <div className="space-y-0.5 px-1">
          <h2 className="text-lg font-bold text-gray-900 capitalize">
            upcomming schedules
          </h2>
          <p className="text-sm text-zinc-500">{date.toDateString()}</p>
        </div>
        <button className="bg-white p-2.5 rounded-md shadow-lg">
          <PlusCircle className="text-blue-500" />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <Card foreground="bg-yellow-400" instructor="mr bean" title="web developer" date="12 feb 2024" duration="10 -12: 00 AM"/>
        <Card foreground="bg-green-400" instructor="mr bean" title="web developer" date="12 feb 2024" duration="10 -12: 00 AM"/>
        <Card foreground="bg-black/75" instructor="mr bean" title="web developer" date="12 feb 2024" duration="10 -12: 00 AM"/>
        <div className="flex py-1 font-medium bg-slate-100 rounded-md shadow-md justify-center border border-zinc-300">
          More Schedules
        </div>
      </div>
    </div>
  );
}
