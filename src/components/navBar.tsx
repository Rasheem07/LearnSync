import React from "react";
import MaxWidthWrapper from "./maxWidthWrapper";
import Logo from "./logo";
import { Bell, MessageCircle, Search, Settings } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="sticky inset-x-0 top-0 h-14 w-full bg-white backdrop-blur-lg border-b border-gray-200 z-30 shadow-inner">
      <MaxWidthWrapper>
        <div className="w-full flex items-center justify-between h-14 border-b border-zinc-200">
          
          <Link href="/">
           <Logo />
          </Link>

          <ul className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-1 min-w-[250px] bg-slate-50 px-2.5 text-gray-900 focus-within:ring-1 ring-blue-400 border border-gray-200 rounded-lg shadow-inner transition-all motion-reduce:transform-none">
              <Search className="h-5 w-5 text-blue-500 font-extrabold" />
              <input
                type="text"
                placeholder="Search here..."
                className="bg-transparent outline-none border-none text-[16px] leading-6 py-1 px-3 placeholder:text-gray-600 placeholder:text-sm placeholder:font-normal"
              />
            </div>

            <Select defaultValue="English">
              <SelectTrigger className="w-[100px] border-none ring-none h-6 user-select-none ">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Hindi">Hindi</SelectItem>
                <SelectItem value="Arabic">Arabic</SelectItem>
              </SelectContent>
            </Select>

            <Link href="/messages">
            <MessageCircle aria-label="Messages" className="font-extrabold h-5 w-5 text-gray-600 hover:text-blue-500" />
            </Link>

            <Link href="/notifications">
            <Bell aria-label="notifications" className="font-extrabold h-5 w-5 text-gray-600 hover:text-blue-500" />
            </Link>

            <Link href="/settings">
            <Settings aria-label="Settings" className="font-extrabold h-5 w-5 text-gray-600 hover:text-blue-500" />
            </Link>

            <Link href="profile">
                <Image src="/demo-dp.avif" alt="student" height={35} width={35}  className="h-[35px] w-[35px] object-contain rounded-lg"/>
            </Link>

          </ul>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
