import LearnCard from '@/components/LearnCard'
import { ArrowRight, BookAIcon, Bot, BrainCircuit, ChevronsLeftRight, Code, CupSoda, Settings, Snowflake, Terminal, WashingMachine } from 'lucide-react'
import React from 'react'

export default function Page() {
  return (
    <div className='flex flex-col w-full p-5 overflow-y-scroll no-scrollbar'>
      <header>
        <h2 className='text-lg font-bold text-gray-900 capitalize mb-2'>Popular this week</h2>
        <div className="flex flex-1 items-center gap-4 px-1 overflow-x-scroll no-scrollbar">
            <div className="flex bg-white py-3 px-5 rounded-md shadow-md items-center gap-3">
                <Bot className='h-5 w-5 text-blue-700 font-bold'/>
                <div className="flex flex-col">
                    <h4 className='text-[16px] leading-6 text-nowrap text-gray-900 font-semibold'>Artificial Intelligence</h4>
                    <p className='text-zinc-500 text-xs text-nowrap'>Lorem ipsum dolor sit amet.</p>
                </div>
                <ArrowRight className='h-6 w-6 text-blue-500'/>
            </div>
            <div className="flex bg-white py-3 px-5 rounded-md shadow-md items-center gap-3">
                <Settings className='h-5 w-5 text-blue-700 font-bold'/>
                <div className="flex flex-col">
                    <h4 className='text-[16px] leading-6 text-nowrap text-gray-900 font-semibold'>Devops</h4>
                    <p className='text-zinc-500 text-xs text-nowrap'>Lorem ipsum dolor sit amet.</p>
                </div>
                <ArrowRight className='h-6 w-6 text-blue-500'/>
            </div>
            <div className="flex bg-white py-3 px-5 rounded-md shadow-md items-center gap-3">
                <Code className='h-5 w-5 text-blue-700 font-bold'/>
                <div className="flex flex-col">
                    <h4 className='text-[16px] leading-6 text-nowrap text-gray-900 font-semibold'>MERN Dev</h4>
                    <p className='text-zinc-500 text-xs text-nowrap'>Lorem ipsum dolor sit amet.</p>
                </div>
                <ArrowRight className='h-6 w-6 text-blue-500'/>
            </div>
            <div className="flex bg-white py-3 px-5 rounded-md shadow-md items-center gap-3">
                <Snowflake className='h-5 w-5 text-blue-700 font-bold'/>
                <div className="flex flex-col">
                    <h4 className='text-[16px] leading-6 text-nowrap text-gray-900 font-semibold'>Python Programming</h4>
                    <p className='text-zinc-500 text-xs text-nowrap'>Lorem ipsum dolor sit amet.</p>
                </div>
                <ArrowRight className='h-6 w-6 text-blue-500'/>
            </div>
            <div className="flex bg-white py-3 px-5 rounded-md shadow-md items-center gap-3">
                <BrainCircuit className='h-5 w-5 text-blue-700 font-bold'/>
                <div className="flex flex-col">
                    <h4 className='text-[16px] leading-6 text-nowrap text-gray-900 font-semibold'>Data structures & Alogorithms</h4>
                    <p className='text-zinc-500 text-xs text-nowrap'>Lorem ipsum dolor sit amet.</p>
                </div>
                <ArrowRight className='h-6 w-6 text-blue-500'/>
            </div>
            <div className="flex bg-white py-3 px-5 rounded-md shadow-md items-center gap-3">
                <CupSoda className='h-5 w-5 text-blue-700 font-bold'/>
                <div className="flex flex-col">
                    <h4 className='text-[16px] leading-6 text-nowrap text-gray-900 font-semibold'>Java</h4>
                    <p className='text-zinc-500 text-xs text-nowrap'>Lorem ipsum dolor sit amet.</p>
                </div>
                <ArrowRight className='h-6 w-6 text-blue-500'/>
            </div>
            <div className="flex bg-white py-3 px-5 rounded-md shadow-md items-center gap-3">
                <WashingMachine className='h-5 w-5 text-blue-700 font-bold'/>
                <div className="flex flex-col">
                    <h4 className='text-[16px] leading-6 text-nowrap text-gray-900 font-semibold'>Machine Learning</h4>
                    <p className='text-zinc-500 text-xs text-nowrap'>Lorem ipsum dolor sit amet.</p>
                </div>
                <ArrowRight className='h-6 w-6 text-blue-500'/>
            </div>
        </div>
      </header>
      <h2 className='mt-5 mb-3 font-bold text-gray-900 text-lg'>Personalized Learning Paths</h2>
      <div className="grid grid-cols-3 grid-flow-row gap-4">
         <LearnCard imageURL="/AI.jpeg" course="Artificial Intelligence" Rating={4.9} teacher="personalised learning" price='Free' />
         <LearnCard imageURL="/Webdev.jpg" course="Web development" Rating={4.9} teacher="personalised learning" price='Free'  /> 
         <LearnCard imageURL="/web3.jpg" course="Web3" Rating={4.5} teacher="personalised learning" price='Free'  />
         <LearnCard imageURL="/python.webp" course="Python" Rating={4.6} teacher="personalised learning" price='Free' />
         <LearnCard imageURL="/java.jpg" course="Java" Rating={5.00} teacher="personalised learning" price='Free'/>
         <LearnCard imageURL="/cpp.avif" course="cpp" Rating={4.6} teacher="personalised learning" price='Free' />
      </div>
      <h2 className='mt-10 mb-3 font-bold text-gray-900 text-lg'>All courses</h2>
      <div className="grid grid-cols-3 grid-flow-row gap-4">
         <LearnCard imageURL="/AI.webp" course="Artificial Intelligence" Rating={4.9} teacher="AI teacher" price={499}/>
         <LearnCard imageURL="/Webdev.jpg" course="Web develoment" Rating={4.9} teacher="Web Teacher" price={699}/>
         <LearnCard imageURL="/web3.jpg" course="Web3" Rating={4.5} teacher="Web3 teacher" price={599}/>
         <LearnCard imageURL="/python.webp" course="Python" Rating={4.6} teacher="Python Teacher" price={649}/>
         <LearnCard imageURL="/java.jpg" course="Java" Rating={5.00} teacher="Java Teacher" price={729}/>
         <LearnCard imageURL="/cpp.avif" course="cpp" Rating={4.6} teacher="cpp Teacher" price={869}/>
      </div>
    </div>
  )
}
