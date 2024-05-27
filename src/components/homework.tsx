import { MoreHorizontal } from 'lucide-react'
import React from 'react'
import { Progress } from './ui/progress'

export default function Homework() {
  return (
    <div className='flex flex-col w-full p-4 bg-white rounded-lg shadow-inner'>
      <div className="flex items-center justify-between gap-2 mb-4">
        <h2 className='text-lg font-bold text-gray-900 capitalize'>home work</h2>
        <MoreHorizontal className='w-8 text-gray-700 font-bold'/>
      </div>
      <div className="flex flex-col gap-1 my-2">
        <Progress value={33} color='#fff' />
        <div className="flex flex-row items-center justify-between px-2">
            <h4 className='text-sm font-semibold text-gray-700 capitalize'>web Design</h4>
            <p className='text-zinc-500 font-sans'>33/100</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 my-2">
        <Progress value={66} className='text-green-500' />
        <div className="flex flex-row items-center justify-between px-2">
            <h4 className='text-sm font-semibold text-gray-700 capitalize'>ux/ui design</h4>
            <p className='text-zinc-500 font-sans'>66/100</p>
        </div>
      </div>
    </div>
  )
}
