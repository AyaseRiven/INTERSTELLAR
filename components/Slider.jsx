import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import lgZoom from 'lightgallery/plugins/zoom';
import dynamic from 'next/dynamic';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false
});

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
      <h1 className=' text-2xl uppercase font-bold text-center p-4'>Interstellar (2014) Photo Gallery</h1>
      <div className='relative flex justify-center p-4'>

      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-[1] ease-in duration-1000'
                : 'opacity-0'
            }
          >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'
                size={50}
              />
              {index === current && (

                <LightGallery  mode="lg-fade" plugins={[lgZoom]}>
                <a className="gallery-item"
                  data-src={slide.image}
                  data-sub-html="<h4>Photo by - GGreviews</h4>"
                >
                  <Image
                  src={slide.image}
                  alt='/'
                  width='1440'
                  height='600'
                  objectFit='cover'
                />
                </a> 
                </LightGallery>
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
                size={50}
              />
            </div>
        );
    })}
    </div>
    </div>
  );
};

export default Slider;
