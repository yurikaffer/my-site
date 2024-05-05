'use client'
import 'prismjs/themes/prism-okaidia.css';
import Presentation from "@/components/Presentation/Presentation";
import dynamic from 'next/dynamic';
import BgLayoutRoot from '@/components/BgLayoutRoot/BgLayoutRoot';

const CardTwitter = dynamic(() => import('@/components/CardTwitter/CardTwitter'), {
  loading: () => null,
  ssr: false
});

const Tags = dynamic(() => import('@/components/MyTags/Tags'), {
  loading: () => null,
  ssr: false
});

const CodeCard = dynamic(() => import('@/components/CodeCard/CodeCard'), {
  loading: () => <div className='min-w-[32rem] min-h-[24rem] rounded-[7px] bg-transparent' />,
  ssr: false
});

const ButtonsExemple = dynamic(() => import('@/components/ButtonsExemple/ButtonsExemple'), {
  loading: () => null,
  ssr: false
});

const Photos = dynamic(() => import('@/components/Photos/Photos'), {
  loading: () => null,
  ssr: false
});

const Informations = dynamic(() => import('@/components/Informations/Informations'), {
  loading: () => null,
  ssr: false
});

const Carousel = dynamic(() => import('@/components/Carousel/CardCarousel'), {
  loading: () => null,
  ssr: false
});

const Footer = dynamic(() => import('@/components/Layout/Footer'), {
  loading: () => null,
  ssr: false
});

export default function Home() {
  return (
    <main>
      <BgLayoutRoot>
        <div className="z-10">
          <section className="xl:h-screen">
            <div className="flex justify-center">
              <div className="flex flex-col w-[100vw] xl:flex-row xl:justify-between xl:max-w-[80rem] xl:h-screen xl:items-center ">
                <Presentation />
                <div className="xl:pt-[14rem]">
                  <Tags />
                  <CodeCard />
                  <ButtonsExemple />
                </div>
              </div>
            </div>
            <CardTwitter />
          </section>
          <section id="about" className='relative flex justify-center w-full'>
            <div className="relative z-20 flex flex-col justify-center items-center max-w-[80rem] mt-[10rem] mb-[5rem] px-[1rem] xl:flex-row xl:px-0 xl:gap-20">
              <Photos />
              <Informations />
            </div>
            <div className="absolute -top-[5rem] -left-[20rem] opacity-70 z-[-10]">
              <img src="docs-left.png" alt='Sombra azul' className="relative h-full object-cover " loading='lazy'></img>
            </div>
          </section>
          <section id="projects" className="relative xl:pt-[6rem]">
            <Carousel />
          </section>
          <div className="relative pt-[10rem] ">
            <Footer />
          </div>
        </div>
      </BgLayoutRoot>
    </main>
  )
}