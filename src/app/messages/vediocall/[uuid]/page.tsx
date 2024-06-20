"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import SimplePeer from "simple-peer";
import { io } from "socket.io-client";

export default function Page() {
  const params = useParams<{ uuid: string }>();
  const roomId = params.uuid;
  const videoContainer = useRef<HTMLDivElement>(null);
  const myVideo = useRef<HTMLVideoElement>(null);
  const socket = useRef(io("http://localhost:8080")).current;
  const [stream, setStream] = useState<MediaStream | undefined>(undefined);
  const [peers, setPeers] = useState<{ [key: string]: SimplePeer.Instance }>({});

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);

        if (myVideo.current) {
          myVideo.current.srcObject = stream;
        }

      })

      }, [])

  return (
    <div ref={videoContainer} className="flex items-center min-full w-full">
      <video
        ref={myVideo}
        id="myvideo"
        playsInline
        muted
        autoPlay
        className="w-[50%] h-screen"
      />
    </div>
  );
}
