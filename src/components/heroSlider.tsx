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
      title: 'ENTREGADOR',
      content:
        'Visualize seus pedidos e solicite pagamento diário, na palma da mão.',
      image: '/assets/images/slider/slider_02.png',
    },
    {
      title: 'EMPRESÁRIO',
      content: 'Organize e acompanhe suas entregas em tempo real.',
      image: '/assets/images/slider/slider_01.png',
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
        <div className="hero-second-div">
          <Fade
            duration={2000}
            onChange={handleSlideChange}
            prevArrow={<div></div>}
            nextArrow={<div></div>}
          >
            {slides.map((slide) => (
              <div key={slide.image} className="each-fade">
                <Image
                  className="inline-flex"
                  src={slide.image}
                  alt=""
                  width={800}
                  height={800}
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
