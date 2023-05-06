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
      title: 'Entregador, rode com aplicativo de suporte',
      content:
        'Simplifique seu trabalho com acompanhamento no seu celular, na palma da mão. Veja saldo, pedidos, mapa, status e fale com seu supervisor na hora.',
      image: '/assets/images/slider/slider_02.png',
    },
    {
      title: 'Empresário, tenha o controle total do seu delivery',
      content:
        'Com a nossa plataforma virtual, você acompanha em tempo real a operação da sua frota. Visualize entregadores, destinos, status de pedidos.',
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
