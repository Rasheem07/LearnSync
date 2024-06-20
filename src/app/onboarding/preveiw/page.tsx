import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <div className='flex flex-col p-5 flex-1'>
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center">
          <ChevronLeft className='h-5 w-5'/>
          Back
        </div>
        <div>
          <p className='text-zinc-500 font-medium'>Step 03 / 04</p>
          preveiw Personal Info
        </div>
      </div>
      <div className="flex flex-col mx-auto my-auto max-w-sm" >
          <h1 className="text-3xl font-bold text-gray-900 capitalize">preveiw your Student Account!</h1>

          <div className='mt-6 w-full flex flex-col gap-2'>
             <div className="flex flex-col gap-2 w-full my-2">
              <div className="flex items-center gap-5 max-w-24 overflow-x-scroll no-scrollbar mx-auto scroll-snap">
                <Image src="/demo-dp.avif" alt='' height={75} width={75} className='h-24 w-24 mx-auto object-contain rounded-full shadow-inner scroll-snap-align' />
                <Image src="/demo-dp.avif" alt='' height={75} width={75} className='h-24 w-24 mx-auto object-contain rounded-full shadow-inner scroll-snap-align' />
                <Image src="/demo-dp.avif" alt='' height={75} width={75} className='h-24 w-24 mx-auto object-contain rounded-full shadow-inner scroll-snap-align' />
                <Image src="/demo-dp.avif" alt='' height={75} width={75} className='h-24 w-24 mx-auto object-contain rounded-full shadow-inner scroll-snap-align' />
              </div>
             </div>
             <div className="flex flex-col gap-1.5">
                <label htmlFor="" className='font-medium text-zinc-500 text-base capitalize'>Your Fullname</label>
                <input type="text" className='border-2 border-zinc-300 rounded-md bg-white shadow-inner hover:border-blue-500 text-base py-2 px-3 placeholder:text-base placeholder:text-zinc-500 outline-none' value="mohd Rasheem" required placeholder='Enter your Fullname'/>
             </div>

             <div className="flex flex-col gap-1.5">
                <label htmlFor="" className='font-medium text-zinc-500 text-base capitalize'>Email Address</label>
                <input type="text" className='border-2 border-zinc-300 rounded-md bg-white shadow-inner hover:border-blue-500 text-base py-2 px-3 placeholder:text-base placeholder:text-zinc-500 outline-none' value="mohdrasheem07@gmail.com" required placeholder='Enter your Email address'/>
             </div>

             <div className="flex flex-col gap-1.5">
                <label htmlFor="" className='font-medium text-zinc-500 text-base capitalize'>password</label>
                <input type="password" className='border-2 border-zinc-300 rounded-md bg-white shadow-inner hover:border-blue-500 text-base py-2 px-3 placeholder:text-base placeholder:text-zinc-500 outline-none' value="rasheem07"  placeholder='Enter your password'/>
             </div>

             <p className='ml-2 text-gray-700 font-sans text-base flex items-center gap-2'>Personal details can be updated later</p>

             <button className='w-full rounded-md shadow-md bg-blue-500 text-white text-lg py-2 text-center hover:bg-blue-400'>Save & Continue</button>

          </div>
      </div>
    </div>
  )
}
