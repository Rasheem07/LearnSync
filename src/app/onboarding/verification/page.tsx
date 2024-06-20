import { ChevronLeft, Lock } from 'lucide-react'
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
          <p className='text-zinc-500 font-medium'>Step 02 / 04</p>
           Email verification
        </div>
      </div>
      <div className="flex flex-col mx-auto my-auto max-w-sm" >
          <h1 className="text-3xl font-bold text-gray-900 capitalize">Complete your Profile!</h1>
          <p className="text-zinc-500 font-sans text-base mt-1">For the purpose of industry regulation, your details are required.</p>

          <form action="" className='mt-6 w-full flex flex-col gap-3'>
             <div className="flex flex-col gap-1.5">
                <label htmlFor="" className='font-medium text-zinc-500 text-base capitalize'>One time Password</label>
                <input type="text" className='border-2 border-zinc-300 rounded-md bg-white shadow-inner hover:border-blue-500 text-base py-2 px-3 placeholder:text-base placeholder:text-zinc-500 outline-none' required placeholder='Enter your one time password'/>
             </div>

             <p className='ml-2 text-gray-700 font-sans text-base flex items-center gap-2'>We have sent you an OTP to your email!</p>

             <button aria-label="Save and continue" className='mt-2 w-full rounded-md shadow-md bg-blue-500 text-white text-lg py-2 text-center hover:bg-blue-400 transition'>Save & Continue</button>
             
             <div className='text-zinc-500 font-sans flex items-center gap-1 w-full justify-center mt-4'><Lock className='h-4 w-4' /> Your Info is safely Secured</div>
          </form>
      </div>
    </div>
  )
}
