"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function LandingBackground() {
  const [fallbackToImage, setFallbackToImage] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setFallbackToImage(true);
      });
    }
  }, [videoRef, fallbackToImage]);
  return (
    <>
      {fallbackToImage ? (
        <Image
          alt={`@todo`}
          src={`/landing.mp4`}
          className="bg-chalk-950 pointer-events-none fixed -z-10 h-full w-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          preload="auto"
          autoPlay
          playsInline
          muted
          loop
          src={`/landing.mp4`}
          className="bg-chalk-950 pointer-events-none fixed -z-10 h-full w-full object-cover"
        />
      )}
    </>
  );
}
