'use client'
import 'prismjs/themes/prism-okaidia.css';
import './globals.css'
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Link, User } from "@nextui-org/react";
import ThemeSwitcherCheckBox from "@/components/ThemeSwitcher/CheckBox/ThemeSwitcherCheckBox";
import { TiStarFullOutline } from "react-icons/ti";
import { FcLike } from "react-icons/fc";
import Photos from "@/components/Photos/Photos";
import Informations from "@/components/Informations/Informations";
import Carousel from "@/components/Carousel/CardCarousel";
import Footer from "@/components/Layout/Footer";
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
  loading: () => <div className='min-w-[32rem] min-h-[24rem] rounded-[7px] bg-transparent'/>,
  ssr: false
});

const ButtonsExemple = dynamic(() => import('@/components/ui/Buttons/ButtonsComponent'), {
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

          {/*<section id="about" className="relative ">
            <div className="flex justify-center pt-[2rem] w-full">
              <div className="relative flex flex-col justify-center items-center gap-20 max-w-[80rem] px-[1rem] pt-[5rem] xl:flex-row xl:px-0 z-[10]">
                <Photos />
                <Informations />
              </div>
            </div>
            <div className="absolute -top-[5rem] -left-[20rem] opacity-70">
              <img src="docs-left.png" className="relative h-full object-cover"></img>
            </div>
          </section>

          <section id="projects" className="relative">
            <Carousel />
          </section>

          <div className="relative pt-[5rem] ">
            <Footer />
  </div>*/}

        </div>
      </BgLayoutRoot>
    </main>
  )
}
