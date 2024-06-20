"use client";
import Message from "@/components/message";
import MessageProfile from "@/components/messageProfile";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Dot,
  Ghost,
  Link,
  Loader2,
  MoreHorizontalIcon,
  PhoneCall,
  Send,
  Video,
  VideotapeIcon,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, {
  ChangeEvent,
  useEffect,
  useOptimistic,
  useRef,
  useState,
} from "react";
import { io } from "socket.io-client";
import { v4 } from "uuid";

export default function Page() {
  const QueryClient = useQueryClient();
  const [input, setInput] = useState("");
  const currentUser = localStorage.getItem("currentUser")?.trim().toString();
  const otherUser = localStorage.getItem("otherUser")?.trim().toString();
  const messagesContainer = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const socket = io("http://localhost:8080");

  const handleMessageInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleMessage = async (data: FormData) => {
    const input = data.get("message")?.valueOf() as string;
    socket.emit("chat message", input, currentUser, otherUser);

    await QueryClient.invalidateQueries({ queryKey: ["messages"] });
    setInput("");
  };

  socket.on("recieve message", async (message) => {
    await QueryClient.invalidateQueries({ queryKey: ["messages"] });
  });
  // Define the fetchMessages function
  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/messages?sender=${currentUser}&reciever=${otherUser}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  const { data: messages, isLoading } = useQuery({
    queryKey: ["messages"],
    queryFn: fetchMessages,
  });

  useEffect(() => {
    const messagesContainer =
      document.body.getElementsByClassName("message-container")[0];
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messages]);

  const handleVideoCall = () => {
    const uuid = v4();
    router.push(`/messages/vediocall/${uuid}`);
  };
  return (
    <div className="w-full h-full flex gap-5">
      <div className="w-full max-w-[25%] bg-white min-full py-4 px-5 divide-y divide-zinc-300 shadow-lg">
        <div className="flex flex-row w-full gap-5 my-4 px-2 items-center">
          <Image
            src="/demo-dp.avif"
            alt=""
            height={60}
            width={60}
            objectFit="contain"
            className="rounded-md"
          />
          <div className="space-y-0.5">
            <h3 className="text-lg font-semibold capitalize text-gray-900">
              Nella Vita
            </h3>
            <p className="text-sm font-sans text-zinc-600">Student</p>
          </div>
        </div>

        <div className="py-5 space-y-4">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-lg font-semibold capitalize text-gray-900">
              contacts
            </h3>
            <button className="outline-none border-none bg-none text-zinc-600 font-medium text-sm">
              view details
            </button>
          </div>
          <div className="flex items-center gap-5 my-2 overflow-x-scroll no-scrollbar max-w-max">
            <Image
              src="/profiles/sinval-carvalho-K4o9sLBFdPk-unsplash.jpg"
              alt=""
              height={25}
              width={40}
              className="min-h-[40px] min-w-[40px] max-h-[40px] object-cover rounded-lg shadow-inner"
            />
            <Image
              src="/profiles/rosan-harmens-PNKEmkgdNHo-unsplash.jpg"
              alt=""
              height={25}
              width={40}
              className="min-h-[40px] min-w-[40px] max-h-[40px] object-cover rounded-lg shadow-inner"
            />
            <Image
              src="/profiles/rafay-ansari-B8S0UAvuuuA-unsplash.jpg"
              alt=""
              height={25}
              width={40}
              className="min-h-[40px] min-w-[40px] max-h-[40px] object-cover rounded-lg shadow-inner"
            />
            <Image
              src="/profiles/oladimeji-odunsi-n5aE6hOY6do-unsplash.jpg"
              alt=""
              height={25}
              width={40}
              className="min-h-[40px] min-w-[40px] max-h-[40px] object-cover rounded-lg shadow-inner"
            />
            <Image
              src="/profiles/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
              alt=""
              height={25}
              width={40}
              className="min-h-[40px] min-w-[40px] max-h-[40px] object-cover rounded-lg shadow-inner"
            />
          </div>
        </div>

        <div className="py-5 space-y-2">
          <h3 className="text-lg font-semibold capitalize text-gray-900">
            Chats
          </h3>
          <div>
            <div className="flex items-center justify-between border-b-2 border-zinc-300">
              <button className="py-1 px-3 outline-none bg-none cursor-pointer basis-1/2 border-b-2 border-blue-500 font-semibold text-blue-500">
                Private
              </button>
              <button className="py-1 px-3 outline-none border-none bg-none cursor-pointer basis-1/2 font-semibold text-zinc-500">
                Groups
              </button>
            </div>

            <div className="my-4 flex flex-col overflow-y-scroll max-h-[40vh] no-scrollbar divide-y divide-zinc-300">
              <MessageProfile />
              <MessageProfile />
              <MessageProfile />
              <MessageProfile />
              <MessageProfile />
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full max-w-[50%] bg-transparent space-y-5">
        <div className="flex items-center gap-5 py-5 border-b border-zinc-300">
          <Image
            src="/profiles/sinval-carvalho-K4o9sLBFdPk-unsplash.jpg"
            alt=""
            height={50}
            width={50}
            className="min-h-[50px] min-w-[50px] max-h-[50px] object-cover rounded-lg shadow-inner"
          />
          <div className="flex flex-col shrink-0 max-w-[100px] line-clamp-1">
            <h3 className="text-lg font-semibold capitalize text-gray-900 truncate">
              Nella vita
            </h3>
            <p className="text-sm font-sans text-zinc-600 flex items-center">
              <Dot className="text-green-700 h-4 w-4 font-bold" /> Online
            </p>
          </div>
        </div>

        <div
          ref={messagesContainer}
          className="message-container space-y-3 overflow-y-scroll no-scrollbar"
        >
          {messages?.map((data: any) => (
            <Message
              key={crypto.randomUUID()}
              data={data}
              isMessageSamePerson={false}
              sending={false}
            />
          ))}
        </div>

        <form
          action={handleMessage}
          className="border border-zinc-300 py-0.5 w-full h-14 rounded-md shadow-md bg-white flex justify-between items-center gap-4"
        >
          <input
            type="text"
            name="message"
            className="resize-none h-full w-[80%] text-[18px] leading-[26px] text-gray-800 font-sans placeholder:text-zinc-400 py-1 px-4 border-none outline-none"
            placeholder="write your message.."
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleMessageInput(e)
            }
            value={input}
            required
            minLength={2}
          />
          <Link />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 rounded-lg shadow-inner flex items-center gap-1 text-white mr-2"
          >
            Send <Send className="text-white h-5 w-5" />
          </button>
        </form>
      </div>
      <div className=" w-full max-w-[25%] bg-white shadow-md px-2 py-4">
        <div className="flex items-center gap-5 mx-auto justify-center py-5 border-b border-zinc-300">
          <button className="bg-zinc-200 rounded-md shadow-inner p-2">
            <PhoneCall className="text-gray-700" />
          </button>
          <button className="bg-zinc-200 rounded-md shadow-inner p-2">
            <Video className="text-gray-700" onClick={handleVideoCall} />
          </button>
          <button className="bg-zinc-200 rounded-md shadow-inner p-2">
            <MoreHorizontalIcon className="text-gray-700" />
          </button>
        </div>
        <div className="flex flex-col p-5">
          <h1 className="text-xl font-bold text-gray-900">Files Shared</h1>
          <div className="flex flex-col items-center mt-6">
            <Ghost className="h-6 w-6" />
            <h2 className="text-lg font-semibold text-gray700">
              Nothing to see here
            </h2>
            <p className="text-sm font-sans text-zinc-500">
              Start sharing files!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
