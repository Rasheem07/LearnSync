import Image from 'next/image'
import React from 'react'

type Props = {}

export default function MessageProfile({}: Props) {
  return (
    <div className="flex items-center justify-between py-4">
    <div className="flex items-center gap-3">
      <Image
        src="/profiles/sinval-carvalho-K4o9sLBFdPk-unsplash.jpg"
        alt=""
        height={50}
        width={50}
        className="min-h-[50px] min-w-[50px] max-h-[50px] object-cover rounded-lg shadow-inner"
      />
      <div className="flex flex-col shrink-0 max-w-[100px] line-clamp-1">
        <h3 className="text-lg font-semibold capitalize text-gray-900 truncate">
          Nella Vita
        </h3>
        <p className="text-sm font-sans text-zinc-600 line-clamp">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem20
        </p>
      </div>
    </div>
    <div className="flex flex-col items-end gap-0.5">
      <span className="text-zinc-500 font-mono text-sm">12:45</span>
      <span className="text-white bg-blue-500 px-2 py-0.5 rounded-md shadow-sm">
        1
      </span>
    </div>
  </div>
  )
}