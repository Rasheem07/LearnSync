'use client'
import { useMutation } from '@tanstack/react-query';
import { ChevronLeft, Loader2 } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import {registerInstructor, registerStudent} from '@/services/authentication';
import Link from 'next/link';
export default function Page() {
  
  const router = useRouter();
  const params = useSearchParams()
  const query = params.get('user');

  const isUserStudent = query == "student";

  const {mutate: inputStudent, isPending, data} = useMutation({
    mutationFn: (variables: {name: string, email: string, password: string}) => registerStudent(variables.name, variables.email, variables.password)
  })

  const {mutate: inputInstructor, isPending: isLoading} = useMutation({
    mutationFn: (variables: {name: string, email: string, password: string}) => registerInstructor(variables.name, variables.email, variables.password)
  })
  
  const handleRegister = async (form: FormData) => {
   const name = form.get('name')?.valueOf() as string;
   const email = form.get('email')?.valueOf() as string;
   const password = form.get('password')?.valueOf() as string;

   if(isUserStudent){
     inputStudent({name, email, password});
   }else{
    inputInstructor({name, email, password})
   }

   if(!isPending && !isLoading){
     router.push("/onboarding/verification")
   }
  }

  
  const Loading = () => {
    return(
     <div className="flex flex-col items-center justify-center gap-3 flex-1 transitionN">
        <Loader2 className='h-8 w-8 text-gray-800 animate-spin'/>
        <h2 className='text-lg font-semibold text-gray-900'>You will be redirected to verifcation page.</h2>
        <p className='text-zinc-600 text-sm font-sans'>please wait, until you are redirected!</p>
     </div>
    )
  }
  
  if(isPending || isLoading) return <Loading />

  return (
    <div className='flex flex-col p-5 flex-1'>
      <div className="flex items-center w-full justify-between">
        <Link href='/onboarding' className="flex items-center">
          <ChevronLeft className='h-5 w-5'/>
          Back
        </Link>
        <div>
          <p className='text-zinc-500 font-medium'>Step 01 / 04</p>
          Personal Info
        </div>
      </div>
      <div className="flex flex-col mx-auto my-auto max-w-sm" >
          <h1 className="text-3xl font-bold text-gray-900 capitalize">Register {isUserStudent? 'student' : 'intructor'} Account!</h1>
          <p className="text-zinc-500 font-sans text-base mt-1">For the purpose of industry regulation, your details are required.</p>

          <form action={handleRegister} className='mt-6 w-full flex flex-col gap-3'>
             <div className="flex flex-col gap-1.5">
                <label htmlFor="" className='font-medium text-zinc-500 text-base capitalize'>your fullname</label>
                <input type="text" className='border-2 border-zinc-300 rounded-md bg-white shadow-inner hover:border-blue-500 text-base py-2 px-3 placeholder:text-base placeholder:text-zinc-500 outline-none' required placeholder='Enter your Fullname' name='name' autoFocus/>
             </div>

             <div className="flex flex-col gap-1.5">
                <label htmlFor="" className='font-medium text-zinc-500 text-base capitalize'>Email Address</label>
                <input type="text" className='border-2 border-zinc-300 rounded-md bg-white shadow-inner hover:border-blue-500 text-base py-2 px-3 placeholder:text-base placeholder:text-zinc-500 outline-none' required placeholder='Enter your Email address' name='email'/>
             </div>

             <div className="flex flex-col gap-1.5">
                <label htmlFor="" className='font-medium text-zinc-500 text-base capitalize'>Create a password</label>
                <input type="text" className='border-2 border-zinc-300 rounded-md bg-white shadow-inner hover:border-blue-500 text-base py-2 px-3 placeholder:text-base placeholder:text-zinc-500 outline-none' required placeholder='Enter your password' name='password'/>
             </div>

             <p className='ml-2 text-gray-700 font-sans text-base flex items-center gap-2'><input type='checkbox' className='h-4 w-4'/>I agree to terms and conditions</p>

             <button className='w-full rounded-md shadow-md bg-blue-500 text-white text-lg py-2 text-center hover:bg-blue-400'>Register Account</button>

             <div className='flex items-center'><span className='w-full h-[1.5px] bg-zinc-300' /><p className='px-6 text-base font-medium text-gray-700'>OR</p><span className='w-full h-[1.5px] bg-zinc-300'/></div>

             <button className='border border-zinc-300 bg-white shadow-inner rounded-md w-full text-gray-800 font-semibold flex items-center justify-center gap-2 text-lg text-center py-2'>Continue with Google</button>
          </form>
      </div>
    </div>
  )
}
