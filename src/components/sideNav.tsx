'use client'
import { BookOpen, CalendarCheck, GroupIcon, LayoutDashboard, Link as Chain, Medal, User, VideoIcon, MailQuestion } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SideNav() {
  const path = usePathname();

  return (
    <div className={`relative inset-y-0 max-h-screen bg-white/95  shadow-md border max-w-[240px] min-h-screen flex flex-col items-center ${path == '/'? 'hidden' : ""}`}>
       <ul className="list-none flex flex-col gap-3 mt-12 mb-8">
           <Link href='/dashboard' className={`flex items-center gap-2 px-3 py-1.5 rounded-md capitalize text-[16px] leading-6 font-medium  ${path === "/dashboard"? "bg-blue-500 text-white shadow-md shadow-blue-200": "text-gray-600"} tracking-wider `}>
             <LayoutDashboard className='h-5 w-5'/>
             dashboard
           </Link>
           <Link href='/learn' className={`flex items-center gap-2 px-3 py-1.5 rounded-md capitalize text-[16px] leading-6 font-medium ${path === "/learn"? "bg-blue-500 text-white shadow-md shadow-blue-200": "text-gray-600"} tracking-wider `}>
             <BookOpen className='h-5 w-5'/>
             Learn
           </Link>
           <Link href='/schedules' className={`flex items-center gap-2 px-3 py-1.5 rounded-md capitalize text-[16px] leading-6 font-medium ${path === "/schedules"? "bg-blue-500 text-white shadow-md shadow-blue-200": "text-gray-600"} tracking-wider `}>
             <MailQuestion className='h-5 w-5'/>
             Quizes
           </Link>
           <Link href='/groups' className={`flex items-center gap-2 px-3 py-1.5 rounded-md capitalize text-[16px] leading-6 font-medium ${path === "/groups"? "bg-blue-500 text-white shadow-md shadow-blue-200": "text-gray-600"} tracking-wider `}>
             <GroupIcon className='h-5 w-5'/>
             Study Groups
           </Link>
           <Link href='/resources' className={`flex items-center gap-2 px-3 py-1.5 rounded-md capitalize text-[16px] leading-6 font-medium ${path === "/resources"? "bg-blue-500 text-white shadow-md shadow-blue-200": "text-gray-600"} tracking-wider `}>
             <Chain className='h-5 w-5'/>
             Resources
           </Link>
           <Link href='/classes' className={`flex items-center gap-2 px-3 py-1.5 rounded-md capitalize text-[16px] leading-6 font-medium ${path === "/classes"? "bg-blue-500 text-white shadow-md shadow-blue-200": "text-gray-600"} tracking-wider `}>
             <VideoIcon className='h-5 w-5'/>
             Live classes
           </Link>
           <Link href='/profile' className={`flex items-center gap-2 px-3 py-1.5 rounded-md capitalize text-[16px] leading-6 font-medium ${path === "/profile"? "bg-blue-500 text-white shadow-md shadow-blue-200": "text-gray-600"} tracking-wider `}>
             <User className='h-5 w-5'/>
             Profile
           </Link>
       </ul>
       <div className='flex flex-col p-5 mx-6 relative border rounded-lg'>
          <div className="flex items-center justify-between z-10">
             <h2 className='text-[18px] leading-7 font-bold text-gray-900'>Upgrade your account to Pro</h2>
             <Medal className='h-10 w-10 font-bold text-yellow-500'/>
          </div>
          <p className='text-sm text-zinc-600 font-sans'>Upgrade to premium to get premium features.</p>
          <Link href='/pricing' className='mt-2 px-3 py-1 text-white bg-blue-500 rounded-md shadow-lg border'>
            Upgrade
          </Link>
       </div>
    </div>
  )
}
