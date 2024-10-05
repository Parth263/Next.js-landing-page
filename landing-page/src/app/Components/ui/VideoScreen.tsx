"use client";
import React, { useState } from "react";
import Image from "next/image";

interface VideoScreenProps {
  thumbnailSrc: string;
  videoSrc: string;
  alt: string;
}

const VideoScreen: React.FC<VideoScreenProps> = ({
  thumbnailSrc,
  videoSrc,
  alt,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full max-w-[1180px] h-[400px] md:h-[800px] border-4 border-emerald-100 shadow-md relative rounded-xl overflow-visible mx-auto">
      {!isPlaying ? (
        <>
          <div className="w-full h-full relative">
            <Image
              src={thumbnailSrc}
              alt={alt}
              fill
              style={{ objectFit: "fill", objectPosition: "center" }} 
              className="mix-blend-color-burn"
            />
          </div>
          <button
            onClick={handlePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-700 bg-opacity-75 rounded-full p-4 hover:bg-opacity-100 transition-all duration-300"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 3L19 12L5 21V3Z" fill="white" />
            </svg>
          </button>
        </>
      ) : (
        <iframe
          src={videoSrc}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full border-0"
        ></iframe>
      )}
    </div>
  );
};

export default VideoScreen;
