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
      title: 'APP DO ENTREGADOR',
      content: 'Simples, fácil, ágil e disponível no Google Play',
      image: '/assets/images/slider/imagem-hero-1.png',
    },
    {
      title: 'AUTOAGENDAMENTO',
      content: 'O entregador agenda seus turnos com total liberdade',
      image: '/assets/images/slider/imagem-hero-2.png',
    },
    {
      title: 'PAGAMENTO DIÁRIO',
      content: 'Rodou, pediu, recebeu. Dinheiro na mão',
      image: '/assets/images/slider/imagem-hero-3.png',
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
              <div key={slide.image} className="each-fade sm:mt-20">
                <Image
                  className="inline-flex"
                  src={slide.image}
                  alt=""
                  width={900}
                  height={900}
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
