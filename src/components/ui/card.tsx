import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    className?: String,
    foreground: String,
    title: string,
    instructor: String,
    date: String,
    duration: String
}

export default function Card({className, foreground, title, instructor, date, duration}: Props) {
  return (
    <div className={cn('w-full min-h-[120px] rounded-lg shadow-inner relative', foreground)}>
        <div className='w-[95%] float-right bg-white h-full z-30 space-y-1 p-4 flex flex-col justify-between'>
            <div>
               <h3 className='font-bold text-lg text-gray-900 capitalize'>{title}</h3>
               <p className='text-sm font-sans text-gray-400'>{date} | {duration}</p>
            </div>
            <p className='text-zinc-600 font-normal'>{instructor}</p>
        </div>
    </div>
  )
}