import Image from 'next/image';

export function AnimatedSection() {
  return (
    <>
      <div className="items-center flex flex-col justify-center bg-[#FAFBFF] py-20">
        <div className="flex overflow-hidden">
          <div className="marquee-container flex overflow-x-hidden">
            <div className="marquee">
              <div className="flex overflow-y-hidden gap-5">
                <Image
                  className="inline-flex"
                  src="/assets/images/partners/pagar-me.png"
                  alt=""
                  width={220}
                  height={220}
                  quality={100}
                />
                <Image
                  className="inline-flex "
                  src="/assets/images/partners/inter.png"
                  alt=""
                  width={220}
                  height={220}
                  quality={100}
                />
                <Image
                  className="inline-flex "
                  src="/assets/images/partners/delivery-direto.png"
                  alt=""
                  width={220}
                  height={220}
                  quality={100}
                />
                <Image
                  className="inline-flex"
                  src="/assets/images/partners/neemo.png"
                  alt=""
                  width={220}
                  height={220}
                  quality={100}
                />
                <Image
                  className="inline-flex"
                  src="/assets/images/partners/accon.png"
                  alt=""
                  width={220}
                  height={220}
                  quality={100}
                />
              </div>
            </div>
            <div className="marquee">
              <div className="overflow-y-hidden gap-14 flex">
                <Image
                  className="inline-flex"
                  src="/assets/images/partners/inter.png"
                  alt=""
                  width={220}
                  height={220}
                  quality={100}
                />
                <Image
                  className="inline-flex"
                  src="/assets/images/partners/delivery-direto.png"
                  alt=""
                  width={220}
                  height={220}
                  quality={100}
                />
                <Image
                  className="inline-flex"
                  src="/assets/images/partners/neemo.png"
                  alt=""
                  width={220}
                  height={220}
                  quality={100}
                />
                <Image
                  className="inline-flex"
                  src="/assets/images/partners/accon.png"
                  alt=""
                  width={220}
                  height={220}
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
