'use client'
import TeachCard from "@/components/cards/teachCard";
import Testimonialcard from "@/components/cards/testimonialcard";
import MaxWidthWrapper, { maxWidthClass } from "@/components/maxWidthWrapper";
import TestimonialContainer from "@/components/testimonials";
import { cn } from "@/lib/utils";
import {
  Book,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Dot,
  GraduationCap,
  UserCog,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {


  return (
    <div className="flex flex-col min-h-screen min-w-[100vw] overflow-y-scroll">
      {/* main landing page section */}
      <main
        className={cn(
          "background bg-fixed  max-screen flex flex-1 flex-col items-center justify-center z-1 min-w-screen min-h-screen"
        )}
      >
        <div className="fixed inset-x-0 inset-y-0 bg-[#1565D8]/90 opacity-75 -z-10"></div>
        <MaxWidthWrapper>
          <div className="flex flex-col items-start gap-5 max-w-[505px] text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Elevate your learning through{" "}
              <span className="">Learnsync</span>
            </h1>
            <p className="text-lg font-sans text-[#f2f2f2]">
              Join LearnSync for expert-led courses, personalized paths, and
              rich resources. Collaborate in study groups and interact with
              instructors during live classes to elevate your skills and achieve
              your goals.
            </p>
            <Link
              href="/onboarding"
              className="py-2 px-4 bg-white rounded-md shadow-md flex items-center gap-1 text-blue-500"
            >
              Start Learning <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </MaxWidthWrapper>
      </main>
      {/* stats and features section */}
      <div className="bg-white shadow-inner select-none">
        <MaxWidthWrapper className="flex flex-col md:flex-row last:items-center justify-between gap-8 md:gap-0 py-8 md:py-12">
          <div className="flex flex-col items-center">
            <GraduationCap className="h-[100px] w-[100px] text-blue-500" />
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                10K+ Students Enrolled
              </h2>
              <p className="text-base text-zinc-700 font-sans">
                empowering the minds of tommorrow{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <BookOpen className="h-[100px] w-[100px] text-blue-500" />
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                2K+ Courses Available
              </h2>
              <p className="text-base text-zinc-700 font-sans">
                Diverse and comprehensive learning paths
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <UserCog className="h-[100px] w-[100px] text-blue-500" />
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                5k+ Expert Instructors
              </h2>
              <p className="text-base text-zinc-700 font-sans">
                Learn from the best in the field
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="mt-16 space-y-16">
        {/* guide section */}
        <div className="flex flex-col gap-2">
          <div className="text-left md:text-center">
            <h1 className="text-4xl md:text-5xl text-gray-900 font-bold tracking-wide">
              Start <span className="text-blue-500">Learning</span>
            </h1>
            <p className="text-lg font-sans text-zinc-700">
              Learning made easy with Learnsync
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:items-center justify-between w-full py-8">
            <div className="flex flex-col gap-2 items-start border-l-4 md:border-l-0  md:border-t-4 border-zinc-600 p-3">
              <span className="text-blue-500 font-medium text-lg">step 1</span>
              <h3 className="text-gray-900 text-2xl font-semibold">
                Sign up for an account
              </h3>
              <p className="text-base font-sans text-zinc-700">
                Either starting out with a free plan or choose our pro plan.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-start border-l-4 md:border-l-0  md:border-t-4 border-zinc-600 p-3">
              <span className="text-blue-500 font-medium text-lg">step 2</span>
              <h3 className="text-gray-900 text-2xl font-semibold">
                Start Learning
              </h3>
              <p className="text-base font-sans text-zinc-700">
                Explore and start learning from different experts.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-start border-l-4 md:border-l-0 md:border-t-4 border-zinc-600 p-3">
              <span className="text-blue-500 font-medium text-lg">step 3</span>
              <h3 className="text-gray-900 text-2xl font-semibold">
                Gain a certificate
              </h3>
              <p className="text-base font-sans text-zinc-700">
                After completing course, you will be given sharable certificate.
              </p>
            </div>
          </div>
        </div>

        {/* client testimonails section */}
        <div className="space-y-4">
          <div className="text-start md:text-center">
            <h1 className="text-3xl md:text-5xl text-gray-900 font-bold tracking-wide">
              What our students says <span className="text-blue-500">about us</span>
            </h1>
            <p className="text-lg font-sans text-zinc-700">
              students who have been benifited from our platform
            </p>
          </div>
          <TestimonialContainer/>
        </div>

        <div className="space-y-4 py-8">
          <div className="text-start md:text-center">
            <h1 className="text-3xl md:text-5xl text-gray-900 font-bold tracking-wide">
             What we <span className="text-blue-500">teach</span> to our students
            </h1>
            <p className="text-lg font-sans text-zinc-700">
              students who have been benifited from our platform
            </p>
          </div>
          <div className="flex flex-col gap-5 md:flex-row justify-between items-center w-full">
            <TeachCard imageURL="/web dev.png" title="Web development" description="web development is about developing websites for business out there!"/>
            <TeachCard imageURL="/app dev.png" title="App development" description="web development is about developing websites for business out there!"/>
            <TeachCard imageURL="/devops.png" title="Devops" description="web development is about developing websites for business out there!"/>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
