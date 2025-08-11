'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
// import videoThumbnail from '@/public/images/video-frame-home.png';

const HomePageVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4">
        {isClient && (
          <div className="col-span-full p-10 flex justify-center">
            <iframe
              width={1180}
              height={720}
              className="rounded-2xl responsive-iframe"
              src="https://www.youtube-nocookie.com/embed/jXD2ZRcqBOg?si=dfiX5p3i2L7dKxxp&amp;controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}
      </div>

      {/* Media query for responsive iframe */}
      <style>{`
        @media (max-width: 1024px) {
          .responsive-iframe {
            width: 700px;
            height: 650px;
          }
        }
          @media (max-width: 600px) {
          .responsive-iframe {
            width: 100% ;
            height: auto ;
            aspect-ratio: 16 / 9;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePageVideo;
