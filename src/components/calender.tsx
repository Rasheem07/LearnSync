"use client"
import React, { useState } from 'react'
import { Calendar } from './ui/calendar'

export default function Calender() {
    const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Calendar selected={date} onSelect={setDate} mode='single' className='bg-white w-full'/>
  )
}
