import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

type Props = {
    className?: String,
    children: ReactNode
}

export default function MaxWidthWrapper({className, children}: Props) {
  return (
    <div className={cn("mx-auto w-full max-w-[1180px] px-5 md:px-20", className)}>
        {children}
    </div>
  )
}

export const maxWidthClass = "mx-auto w-full max-w-screen-xl px-2.5 md:px-20";