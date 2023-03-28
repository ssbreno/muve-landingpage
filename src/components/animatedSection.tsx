import Image from 'next/image';

export function AnimatedSection() {
  return (
    <>
      <div className="items-center flex flex-col justify-center">
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
        <div className="flex items-center overflow-hidden">
          <div className="marquee-container flex items-center overflow-x-hidden mb-20">
            <div className="marquee">
              <div className="sm:flex gap-14">
                <Image
                  className="inline-flex"
                  src="/assets/images/partners/pagar-me.png"
                  alt=""
                  width={140}
                  height={140}
                  quality={100}
                />
                <Image
                  className="inline-flex "
                  src="/assets/images/partners/banco-inter.png"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                />
                <Image
                  className="inline-flex "
                  src="/assets/images/partners/delivery-direto.png"
                  alt=""
                  width={160}
                  height={160}
                  quality={100}
                />
                <Image
                  className="inline-flex"
                  src="/assets/images/partners/neemo.png"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                />
                <Image
                  className="inline-flex"
                  src="/assets/images/partners/accon.png"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
            </div>
            <div className="marquee">
              <div className="inline-flex overflow-y-hidden gap-14">
                <Image
                  className="inline-flex"
                  src="/assets/images/partners/pagar-me.png"
                  alt=""
                  width={140}
                  height={140}
                  quality={100}
                />
                <Image
                  className="inline-flex"
                  src="/assets/images/partners/banco-inter.png"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                />
                <Image
                  className="inline-flex"
                  src="/assets/images/partners/delivery-direto.png"
                  alt=""
                  width={160}
                  height={160}
                  quality={100}
                />
                <Image
                  className="inline-flex"
                  src="/assets/images/partners/neemo.png"
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                />
                <Image
                  className="inline-flex"
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
