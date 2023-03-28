import Image from 'next/image';

export function AnimatedSection() {
  return (
    <>
      <div className="h-36 items-center gap-6 flex flex-col justify-center overflow-x-hidden bg-gray-50 mt-25">
        <div className="flex items-center overflow-hidden justify-center font-machina">
          <p className="flex items-center overflow-hidden text-3xl text-muve-principal">
            <b>Integrações</b>
          </p>
          <Image
            className="flex lg:h-full items-center overflow-hidden overflow-x-hidden ml-5"
            src="/assets/images/integration.svg"
            alt=""
            width={40}
            height={40}
            quality={100}
          />
        </div>
        <div className="flex items-center overflow-hidden     ">
          <div className="marquee-container   flex items-center flex-nowrap overflow-x-hidden ">
            <div className="marquee">
              <div className="inline-flex overflow-y-hidden gap-14 items-center">
                <Image
                  className="flex lg:h-full"
                  src="/assets/images/partners/pagar-me.png"
                  alt=""
                  width={140}
                  height={140}
                  quality={100}
                />
                <Image
                  className="flex lg:h-full"
                  src="/assets/images/partners/banco-inter.png"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                />
                <Image
                  className="flex lg:h-full"
                  src="/assets/images/partners/delivery-direto.png"
                  alt=""
                  width={140}
                  height={140}
                  quality={100}
                />
                <Image
                  className="flex lg:h-full"
                  src="/assets/images/partners/neemo.png"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                />
                <Image
                  className="flex lg:h-full mb-4"
                  src="/assets/images/partners/accon.png"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
            </div>
            <div className="marquee">
              <div className="inline-flex overflow-y-hidden overflow-x-hidden gap-14 items-center">
                <Image
                  className="flex lg:h-full"
                  src="/assets/images/partners/pagar-me.png"
                  alt=""
                  width={140}
                  height={140}
                  quality={100}
                />
                <Image
                  className="flex lg:h-full"
                  src="/assets/images/partners/banco-inter.png"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                />
                <Image
                  className="flex lg:h-full"
                  src="/assets/images/partners/delivery-direto.png"
                  alt=""
                  width={140}
                  height={140}
                  quality={100}
                />
                <Image
                  className="flex lg:h-full"
                  src="/assets/images/partners/neemo.png"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                />
                <Image
                  className="flex lg:h-full mb-4"
                  src="/assets/images/partners/accon.png"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
