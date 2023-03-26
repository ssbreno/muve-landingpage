import Image from "next/image";
import Rectangle from '../../public/assets/images/rectangle.png';


export function AnimatedGreen() {
    return (
      <div className="flex items-center overflow-hidden bg-muve-verde">
        <div className="marquee-container py-10 bg-app-purple flex items-center flex-nowrap overflow-x-hidden">
          <div className="marquee">
            <div className="inline-flex overflow-y-hidden">
              <p className="inline-flex text-4xl font-bold mr-10">
              <Image
          className="block rectangle"
          src={Rectangle}
          alt="Muve Logo"
          quality={100}
        />{' '} Mais de 7.680.000 pedidos entregues pelo iFood 
              </p>
              <p className="inline-flex text-4xl font-bold mr-10">
              <Image
          className="block rectangle"
          src={Rectangle}
          alt="Muve Logo"
          quality={100}
        />{' '} {' '} Mais de 10 anos a serviço 
              </p>
              <p className="inline-flex text-4xl font-bold mr-10">
              <Image
          className="block rectangle"
          src={Rectangle}
          alt="Muve Logo"
          quality={100}
        />{' '} Mais de 25.000 entregadores ativos
              </p>
              <p className="inline-flex text-4xl font-bold mr-10">
              <Image
          className="block rectangle"
          src={Rectangle}
          alt="Muve Logo"
          quality={100}
        />{' '} Mais de 300 cidades, 20 estados
              </p>
            </div>
          </div>
          <div className="marquee">
            <div className="inline-flex overflow-y-hidden">
            <p className="inline-flex text-4xl font-bold mr-10">
            <Image
          className="block rectangle"
          src={Rectangle}
          alt="Muve Logo"
          quality={100}
        />{' '} Mais de 7.680.000 pedidos entregues pelo iFood 
              </p>
              <p className="inline-flex text-4xl font-bold mr-10">
              <Image
          className="block rectangle"
          src={Rectangle}
          alt="Muve Logo"
          quality={100}
        />{' '} Mais de 10 anos a serviço 
              </p>
              <p className="inline-flex text-4xl font-bold mr-10">
              <Image
          className="block rectangle"
          src={Rectangle}
          alt="Muve Logo"
          quality={100}
        />{' '} Mais de 25.000 entregadores ativos
              </p>
              <p className="inline-flex text-4xl font-bold mr-10">
              <Image
          className="block rectangle"
          src={Rectangle}
          alt="Muve Logo"
          quality={100}
        />{' '} Mais de 300 cidades, 20 estados
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }