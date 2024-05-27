import { BookOpenCheck } from "lucide-react";
import React from "react";

type Props = {};

export default function Logo({}: Props) {
  return (
    <div className="flex items-center gap-1">
      <BookOpenCheck className="h-6 w-6 font-bold" />
      <h2 className="font-bold">
        Learn<span className="text-blue-500">Sync</span>
      </h2>
    </div>
  );
}
