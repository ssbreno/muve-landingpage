'use client';
import 'react-slideshow-image/dist/styles.css';
import FadeInWhenVisible from './client-components/fadeInWhenVisible';
import { Fade } from 'react-slideshow-image';
import Image from 'next/image';
import { useState } from 'react';

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Título do Texto 1',
      content: 'Conteúdo do Texto 1',
      image: '/assets/images/hero_company.png',
    },
    {
      title: 'Título do Texto 2',
      content: 'Conteúdo do Texto 2',
      image: '/assets/images/hero_moto.png',
    },
    {
      title: 'Título do Texto 3',
      content: 'Conteúdo do Texto 3',
      image: '/assets/images/logo.svg',
    },
  ];

  const handleSlideChange = (currentIndex: any) => {
    setCurrentSlide(currentIndex);
  };

  return (
    <FadeInWhenVisible>
      <div className="hero-container">
        <div className="hero-div">
          <h1 className="h1 text-black-500">{slides[currentSlide].title}</h1>
          <p className="p text-black-500">{slides[currentSlide].content}</p>
        </div>
        <div className="block justify-center items-center mt-20 lg:mr-20">
          <Fade
            duration={2000}
            onChange={handleSlideChange}
            prevArrow={undefined}
          >
            {slides.map((slide) => (
              <div key={slide.image} className="each-fade">
                <Image
                  className="inline-flex"
                  src={slide.image}
                  alt=""
                  width={140}
                  height={140}
                  quality={100}
                />
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </FadeInWhenVisible>
  );
}
