import Image from "next/image";

export function AnimatedSection() {
    return (
      <div className="flex items-center overflow-hidden mt-20">
        <h1 className="flex items-center overflow-hidden mt-20">Integrações</h1>
        <div className="marquee-container py-10  flex items-center flex-nowrap overflow-x-hidden">
          <div className="marquee">
            <div className="inline-flex overflow-y-hidden">
            <Image
                className="flex lg:h-full mr-20"
                src='/assets/images/partners/pagar-me.png'
                alt=""
                width={140}
                height={140}
                quality={100}
              />
            <Image
                className="flex lg:h-full mr-20"
                src='/assets/images/partners/banco-inter.png'
                alt=""
                width={100}
                height={100}
                quality={100}
              />
                            <Image
                className="flex lg:h-full mr-20"
                src='/assets/images/partners/delivery-direto.png'
                alt=""
                width={140}
                height={140}
                quality={100}
              />
                            <Image
                className="flex lg:h-full mr-20"
                src='/assets/images/partners/neemo.png'
                alt=""
                width={100}
                height={100}
                quality={100}
              />
                            <Image
                className="flex lg:h-full mr-20"
                src='/assets/images/partners/accon.png'
                alt=""
                width={100}
                height={100}
                quality={100}
              />
            </div>
          </div>
          <div className="marquee">
            <div className="inline-flex overflow-y-hidden">
            <Image
                className="flex lg:h-full mr-20"
                src='/assets/images/partners/pagar-me.png'
                alt=""
                width={140}
                height={140}
                quality={100}
              />
              <Image
                className="flex lg:h-full mr-20"
                src='/assets/images/partners/banco-inter.png'
                alt=""
                width={100}
                height={100}
                quality={100}
              />
                            <Image
                className="flex lg:h-full mr-20"
                src='/assets/images/partners/delivery-direto.png'
                alt=""
                width={140}
                height={140}
                quality={100}
              />
                            <Image
                className="flex lg:h-full mr-20"
                src='/assets/images/partners/neemo.png'
                alt=""
                width={100}
                height={100}
                quality={100}
              />
                            <Image
                className="flex lg:h-full mr-20"
                src='/assets/images/partners/accon.png'
                alt=""
                width={100}
                height={100}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }