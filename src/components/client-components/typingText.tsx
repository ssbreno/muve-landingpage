'use client';
import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';

export default class TypingText extends Component {
  render() {
    return (
      <div className="text-muve-white self-center mx-auto font-epilogue font-normal text-base">
        <Typewriter
          options={{
            strings: [
              ' Entregas rápidas com a máxima qualidade!',
              ' Profissionalize seu delivery!',
              ' Cuidamos de toda a sua operação!',
              ' Você escolhe as modalidades!',
              ' Conte com suporte 24 horas!',
            ],
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(1000)
              .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .start();
          }}
        />
      </div>
    );
  }
}
