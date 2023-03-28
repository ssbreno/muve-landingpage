import Image from 'next/image';

export function AnimatedSection() {
  return (
    <>
      <div className="h-36 items-center flex flex-col justify-center bg-gray-50">
        <div className="flex items-center overflow-hidden justify-center font-machina">
          <p className="flex items-center overflow-hidden text-3xl text-muve-principal mr-5">
            <b>Integrações</b>
          </p>
          <Image
            className="flex lg:h-full"
            src="/assets/images/integration.svg"
            alt=""
            width={40}
            height={40}
            quality={100}
          />
        </div>
        <div className="flex items-center overflow-hidden mt-10">
          <div className="marquee-container flex items-center flex-nowrap overflow-x-hidden mt-25">
            <div className="marquee">
              <div className="inline-flex overflow-y-hidden gap-14 items-center">
                <Image
                  className="inline-flex mr-10"
                  src="/assets/images/partners/pagar-me.png"
                  alt=""
                  width={140}
                  height={140}
                  quality={100}
                />
                <Image
                  className="inline-flex  mr-10"
                  src="/assets/images/partners/banco-inter.png"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                />
                <Image
                  className="inline-flex  mr-10"
                  src="/assets/images/partners/delivery-direto.png"
                  alt=""
                  width={160}
                  height={160}
                  quality={100}
                />
                <Image
                  className="inline-flex mr-10"
                  src="/assets/images/partners/neemo.png"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                />
                <Image
                  className="inline-flex mr-10"
                  src="/assets/images/partners/accon.png"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
            </div>
            <div className="marquee">
              <div className="inline-flex overflow-y-hidden gap-14 items-center ml-5">
                <Image
                  className="inline-flex mr-10"
                  src="/assets/images/partners/pagar-me.png"
                  alt=""
                  width={140}
                  height={140}
                  quality={100}
                />
                <Image
                  className="inline-flex mr-10"
                  src="/assets/images/partners/banco-inter.png"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                />
                <Image
                  className="inline-flex mr-10"
                  src="/assets/images/partners/delivery-direto.png"
                  alt=""
                  width={160}
                  height={160}
                  quality={100}
                />
                <Image
                  className="inline-flex mr-10"
                  src="/assets/images/partners/neemo.png"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                />
                <Image
                  className="inline-flex mr-35 justify-center"
                  src="/assets/images/partners/accon.png"
                  alt=""
                  width={140}
                  height={140}
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
