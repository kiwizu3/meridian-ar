'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import BackImage from '../../public/images/user-guide-sustainability-back-img-.png';
import Image1 from '../../public/images/user-guide-sustainability-img-1.png';

import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper/modules';
import SpeechText from '../SpeechText';

export default function SustainabilitySection({ dictionary }: any) {
  const pageData = [
    {
      description: dictionary?.pages[0].page_1_description,
      img: Image1,
    },
    {
      description: dictionary?.pages[1].page_2_description,
      img: Image1,
    },
    {
      description: dictionary?.pages[2].page_3_description,
      img: Image1,
    },
    {
      description: dictionary?.pages[3].page_4_description,
      img: Image1,
    },
  ];

  return (
    <div className="sustainability-section">
      <div className="user-guide-container">
        <div className="user-guide-container-inner container mx-auto z-10 relative">
          <div className="user-guide-heading text-center mb-1 sm:mb-4 z-10">
            <SpeechText>
              <p>{dictionary?.sustainability_heading}</p>
            </SpeechText>
          </div>
          <div className="font-secondary para text-center z-10">
            <SpeechText>
              <p>{dictionary?.sustainability_description}</p>
            </SpeechText>
          </div>
        </div>
      </div>

      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="user-guide-slider"
      >
        {pageData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="content-wrap">
              <div className="text-wrap">
                <div className="text-inner">
                  <div className="font-secondary para-text">
                    <SpeechText>
                      <p>{item.description}</p>
                    </SpeechText>
                  </div>
                </div>
              </div>
              <div className="img-wrap">
                <div className="img-inner">
                  <div className="side-img">
                    <Image src={item.img} alt="Sustainability" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-bg-img">
          <Image className="bg-img" src={BackImage} alt="Sustainability" />
        </div>
      </Swiper>
    </div>
  );
}
