import { BookOpenCheck } from 'lucide-react';
import React from 'react'

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="min-h-screen w-screen flex items-stretch">
      <div
        className="hidden md:flex flex-col max-w-[45%] flex-1 w-full h-full bg-[url('/laptop.jpg')] bg-cover bg-fixed relative p-14 shadow-inner"
        style={{ transform: "translateZ(-10px)" }}
      >
        <div className="fixed inset-x-0 inset-y-0 bg-[#1565D8]/90 opacity-90 -z-10"></div>
        <div className="flex items-center gap-1">
          <BookOpenCheck className="h-6 w-6 font-bold text-white" />
          <h2 className="font-bold text-white">LearnSync</h2>
        </div>
        <div className="text-white font-sans text-base my-auto">
          &quot;Welcome to LearnSync, where your journey to knowledge and growth
          begins. Our mission is to provide you with high-quality, engaging, and
          accessible learning experiences that empower you to achieve your
          personal and professional goals. Whether you&apos;re looking to
          advance your career, pick up a new skill, or explore a new passion, we
          have a course tailored just for you. Join our community of learners
          today and take the first step towards unlocking your potential.
          Let&apos;s learn, grow, and succeed together!&quot;
          <div className="mt-4">~ Founder of LearnSync</div>
        </div>
      </div>
      {children}
    </div>
  )
}
