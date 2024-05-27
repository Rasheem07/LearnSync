import { maxWidthClass } from "@/components/maxWidthWrapper";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className={cn("flex flex-1 flex-col items-center justify-center text-center mb-12 min-full", maxWidthClass)}>
      <div className="flex flex-col items-center justify-center text-center bg-white/50 border border-gray-200 hover:border-gray-300 px-7 py-2 rounded-full max-w-fit overflow-hidden space-x-2 mx-auto shadow-md cursor-default">
         <p className="font-semibold text-sm text-gray-700">
           LearnSync is now OpenSource!
         </p>
      </div>
      <h1 className="text-4xl md:text-5xl text-gray-900 font-bold pt-5">
       Elevate Your Learning with LearnSync
      </h1>
      <p className="text-lg text-gray-700 max-w-prose pt-5">Join LearnSync for expert-led courses, personalized paths, and rich resources. Collaborate in study groups and interact with instructors during live classes to elevate your skills and achieve your goals.</p>
      <button className="mt-5 py-2 px-6 rounded-md shadow-2xl bg-blue-500 text-white hover:bg-blue-500/90 transition-colors flex items-center gap-1">Start Learning <ChevronRight className="h-5 w-5"/></button>
    </main>
  );
}
