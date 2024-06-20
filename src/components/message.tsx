
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { Loader2, LucidePersonStanding, PenTool, User, User2, WashingMachine } from 'lucide-react'
import React from 'react'
import ReactMarkdown from 'react-markdown' 

type Props = {
    isMessageSamePerson: boolean,
    data: {
      sender: string | undefined;
      reciever: string | undefined;
      message: string;
      createdAt: Date | number;
    }
    sending: boolean
}

export default function Message({ sending, data, isMessageSamePerson}: Props) {
  const isUser = data?.sender == localStorage.getItem("currentUser"); 
  return (
    <div className={cn('flex items-end transition-all', {
      "justify-end": isUser
    })}>

      <div className={cn('flex items-center justify-center w-6 h-6 aspect-square rounded-sm', {
        'order-2 bg-blue-600': isUser,
        'order-1 bg-zinc-800': !isUser,
         invisible: isMessageSamePerson
      })}>
        {isUser ? (
          <User2 className='h-3/4 w-3/4 fill-zinc-200 text-zinc-200'/>
        ): (
          <PenTool className='fill-zinc-200 h-3/4 w-3/4' />
        )}
      </div>

      <div className={cn('flex flex-col max-w-[250px] mx-2 space-y-2 text-base', {
        'order-1 items-end': isUser,
        'order-2 items-start': !isUser 
      })}>
        <div className={cn('px-4 py-2 rounded-lg inline-block', {
          'bg-blue-600 text-white': isUser,
          'bg-zinc-200 text-gray-900': !isUser,
          'rounded-br-none': !isMessageSamePerson && isUser,
          'rounded-bl-none': !isMessageSamePerson && !isUser,
        })}>
          {typeof data.message === "string"? (
            <ReactMarkdown className={cn('prose', {
              'text-zinc-50': isUser
            })}>
              {data.message}
            </ReactMarkdown>
          ) : 
          (
            data.message
          )}
          {data.message !== 'loading-message'? (
            <div className="select-none mt-2 w-full text-right text-xs">
              {format(new Date(data.createdAt), 'HH:mm')}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

