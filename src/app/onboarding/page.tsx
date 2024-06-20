
import { ArrowRight, BookOpenCheck, User2 } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 p-6 md:p-14 relative">
        <div className="flex w-full justify-end">
          <h4 className="text-base max-w-max float-right text-zinc-500">
            Already have an Account?{" "}
            <span className="text-blue-500 font-semibold">login</span>
          </h4>
        </div>
        <div className="flex flex-col mx-auto my-auto max-w-sm">
          <h1 className="text-3xl font-bold text-gray-900 capitalize">Join us</h1>
          <p className="text-zinc-500 font-sans text-base mt-1">To begin this journey, tell us what type of account you’d be opening.</p>
          <div className="space-y-4 mt-4">
            <Link href='/onboarding/register?user=student' aria-label="select-student" className="flex items-center gap-5 flex-1 rounded-md p-4 shadow-md bg-white hover:border border-blue-500 hover:bg-slate-200 transition cursor-pointer focus:border focus:bg-slate-200">
              <User2 className="h-[52px] w-[52px] text-blue-500"/>
              <div className="space-y-0.5">
                <h3 className="text-lg font-semibold text-gray-800">Student</h3>
                <p className="text-zinc-500 text-sm">Student account to manage all you studies.</p>
              </div>
              <ArrowRight className="h-6 w-6 text-blue-500"/>
            </Link>
            <Link  href='/onboarding/register?user=instructor' aria-label="select-instructor" className="flex items-center gap-5 flex-1 rounded-md p-4 shadow-md bg-white hover:border border-blue-500 hover:bg-slate-200 transition cursor-pointer focus:border focus:bg-slate-200">
            <BookOpenCheck className="h-[52px] w-[52px] text-blue-500"/>
              <div className="space-y-0.5 flex flex-col items-start">
                <h3 className="text-lg font-semibold text-gray-800">Instructor</h3>
                <p className="text-zinc-500 text-sm">Manage and sell your courses with your proffesional skills.</p>
              </div>
              <ArrowRight className="h-6 w-6 text-blue-500"/>
            </Link>
          </div>
        </div>
      </div>
  );
}
