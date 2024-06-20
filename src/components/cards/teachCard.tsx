import Image from 'next/image'
import React from 'react'

type Props = {
    imageURL: string;
    title: string;
    description: string;
}

export default function TeachCard({imageURL, title, description}: Props) {
  return (
    <div className='flex flex-col max-w-sm gap-5 p-4 bg-white shadow-md rounded-md'>
        <Image src={imageURL} alt="" height={200} width={250} className='h-[200px] w-[250px] object-contain'/>
        <div className='space-y-0.5'>
            <h2 className='text-lg font-semibold text-gray-900'>{title}</h2>
            <p className='text-sm font-sans text-zinc-700'>{description}</p>
        </div>
    </div>
  )
}