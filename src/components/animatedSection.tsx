import Image from 'next/image';

export function AnimatedSection() {
  return (
    <>
      <div className="items-center flex flex-col justify-center">
        <div className="flex items-center overflow-hidden">
          <div className="marquee-container flex items-center overflow-x-hidden mb-10">
            <div className="marquee">
              <div className="flex overflow-y-hidden gap-5">
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
              <div className="overflow-y-hidden gap-14 flex">
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
