'use client';
import PlayIcon from '@/components/icons/playIcon';
import { VideoCardProps } from '@/types';
import { Card } from '@nextui-org/react';
import { useState } from 'react';
import Image from 'next/image';

export default function VideoCard(props: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none relative bg-transparent overflow-hidden"
    >
       <div className="relative w-full h-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={props.videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      {/* {isPlaying ? (
        // <video controls autoPlay preload="none" className="cursor-pointer">
        //   <source src={props?.videoUrl} type="video/mp4" />
        //   Your browser does not support the video tag.
        // </video>
        <div className="relative w-full h-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={props.videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      ) : (
        <div>
          <Image
            src={props?.thumbnailUrl}
            alt="thumbnail"
            className="f-full h-full rounded-md transition hover:scale-95"
          />
          <div className="absolute bottom-6 left-6 z-10">
            <h1 className="font-primary font-black lg:text-[32px] lg:leading-[41.6px] text-xl text-white">
              {props?.title}
            </h1>
          </div>
          <div
            className="absolute top-1/2 left-1/2 z-10  transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            onClick={handlePlay}
          >
            <PlayIcon className="fill-red" />
          </div>
        </div>
      )} */}
    </Card>
  );
}
