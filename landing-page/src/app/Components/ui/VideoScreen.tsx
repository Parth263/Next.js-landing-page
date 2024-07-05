"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface VideoScreenProps {
  thumbnailSrc: string;
  videoSrc: string;
  alt: string;
}

const VideoScreen: React.FC<VideoScreenProps> = ({ thumbnailSrc, videoSrc, alt }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full max-w-[1181px] h-[557px] border-4 border-emerald-100 relative rounded-3xl overflow-hidden mx-auto">
      {!isPlaying ? (
        <>
          <Image
            src={thumbnailSrc}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="mix-blend-color-burn"
          />
          <button
            onClick={handlePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-4 hover:bg-opacity-100 transition-all duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19 12L5 21V3Z" fill="green"/>
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