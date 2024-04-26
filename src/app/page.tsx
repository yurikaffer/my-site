'use client'
import { TbBrandNextjs } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { FaNodeJs, FaRegCopy } from "react-icons/fa";
import ButtonRGB from "@/components/ui/Buttons/ButtonRGB/ButtonRGB";
import ButtonComponent from "@/components/ui/Buttons/Button/ButtonComponent";
import { useEffect } from "react";
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import './globals.css'
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Link, User } from "@nextui-org/react";
import ThemeSwitcherCheckBox from "@/components/ThemeSwitcher/CheckBox/ThemeSwitcherCheckBox";
import { TiStarFullOutline } from "react-icons/ti";
import { FcLike } from "react-icons/fc";
import Photos from "@/components/Photos/Photos";
import Informations from "@/components/Informations/Informations";
import Carousel from "@/components/Carousel/CardCarousel";
import NavbarComponent from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import BgLayoutRoot from "@/components/BgLayoutRoot/BgLayoutRoot";

export default function Home() {
  return (
    <main>
      <BgLayoutRoot>
        <div className="z-10">
          <NavbarComponent />
          <section className="xl:h-screen ">
            <div className="flex justify-center">
              <div className="flex flex-col pt-[4rem] w-[100vw] xl:flex-row xl:justify-between xl:max-w-[80rem] xl:px-0 xl:pt-[8rem]">
                <Apresentação />
                <div >
                  <Tags />
                  <div className="pt-1 px-[1rem]">
                    <CodeCard />
                  </div>
                  <ButtonsExemple />
                </div>
              </div>
            </div>
            <CardTwitter />
          </section>

          <section id="about" className="relative dark:bg-[#04060c]">
            <div className="flex justify-center pt-[2rem] w-full">
              <div className=" flex flex-col gap-20 px-[1rem] max-w-[80rem] justify-center items-center xl:flex-row xl:px-0">
                <Photos />
                <Informations />
              </div>
            </div>
            <div className="absolute -top-10 -left-20 h-[25rem] md:h-[35rem] md:-left-10 xl:-top-40 xl:left-[10rem]">
              <img src="blue-purple-1.svg" className="relative rounded-large h-full z-0"></img>
            </div>
          </section>

          <section id="projects" className="relative dark:bg-[#04060c]">
            <Carousel />
          </section>

          <div className="relative pt-[5rem]">
            <Footer />
          </div>

        </div>
      </BgLayoutRoot>
    </main>
  )
}

function Apresentação() {
  return (
    <div className="flex flex-col px-[1rem]">
      <p className="text-[16px] text-blue font-semibold">Bem-vindo ao meu site.</p>
      <div className="flex">
        <h1 className="text-[38px] font-extrabold leading-none tracking-tight md:text-xl">
          Sou <strong className="gradient-text"> Yuri Kaffer</strong>, <br />
          Full Stack developer.
        </h1>
      </div>
      <div className="flex gap-4 py-2 text-text">
        <div className="flex items-center gap-2">
          <TbBrandNextjs size={'27px'} />
          <p className="text-[15px]" >Next.js</p>
        </div>
        <div className="flex items-center gap-2">
          <FaNodeJs size={'27px'} />
          <p className="text-[15px]" >Node.js</p>
        </div>
        <div className="flex items-center gap-2">
          <SiReact size={'27px'} />
          <p className="text-[15px]" >React.js</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-1 text-text max-w-[45rem]">
        <p className="text-[16px] italic">
          Um mero entusiasta da tecnologia. Curioso, proativo e buscando pelo próximo desafio.
        </p>
        <p className="text-[16px]">
          Profissionalmente, me considero um desenvolvedor em transição, focado em direcionar minha carreira para a
          especialização em tecnologias como Node.js, React.js e TypeScript, aprofundando meu conhecimento nessas ferramentas
          para ser capaz de desenvolver soluções modernas, performáticas e capazes de proporcionar uma experiência única.
        </p>
      </div>

      <div className="flex gap-5 pt-5">
        <ButtonRGB name="Vamos Conversar" />
        <ButtonComponent name="Resumo" />
      </div>
    </div>
  )
}

function CardTwitter() {
  return (
    <div className="absolute hidden xl:flex xl:top-[67%] xl:right-[42%]  z-50 floating shadow-custom rounded-[7px]">
      <Card className="border-2 border-border rounded-[7px] max-w-[24rem] bg-bg bg-opacity-80 backdrop-blur">
        <CardHeader className="flex justify-between">
          <UserCard />
          <Button variant="solid" className="rounded-full h-7 bg-[#057BB9] ">
            <Link
              className="text-white text-[15px]"
              href='https://www.linkedin.com/in/yuri-k-a97755133/'
              referrerPolicy="no-referrer"
              target="_blank"
              rel="noreferrer"
            >
              Follow
            </Link>
          </Button>
        </CardHeader>
        <CardBody className="text-text text-[14px]">
          <p> Certamente este não é o Twitter. 🙃 </p>
          <p>
            Mas você pode se conectar comigo através do Linkedin clicando em algum lugar deste card.
          </p>
        </CardBody>
        <CardFooter className="flex gap-4 text-[14px] text-text">
          <div className="flex gap-2">
            <p className="font-semibold">210</p>
            <p>Following</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">51</p>
            <p>Followers</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

function UserCard() {
  return (
    <User className="font-semibold"
      name="Yuri Kaffer"
      description={(
        <Link 
          className="text-text font-normal" 
          href='https://www.linkedin.com/in/yuri-k-a97755133/'
          referrerPolicy="no-referrer"
          target="_blank"
          rel="noreferrer" size="sm" 
        >
          @yuri_kaffer
        </Link>
      )}
      avatarProps={{
        src: "https://avatars.githubusercontent.com/u/303714325?v=4",
        className: "border-2 border-border"
      }}
    />
  )
}

function ButtonsExemple() {
  return (
    <div className="w-full dark:bg-[#04060c] pl-[1rem] xl:dark:bg-transparent">
      <div className="flex gap-2 items-center pt-4 justify-start xl:pl-[4rem] ">
        <Button className="rounded-full h-8 dark:bg-[#0F172A] border-border z-10" variant="faded">
          <FcLike className="w-full h-4" />
          <p className="text-xsm">Like</p>
        </Button>
        <Button isIconOnly className="rounded-[100%] z-10 min-w-0 min-h-0 w-8 h-8 border-border hover:bg-[#DD9520] dark:hover:bg-[#DD9520] hover:text-[#f0f0f3] dark:hover:text-[#27272A] bg-bg" color="warning" variant="faded">
          <TiStarFullOutline className="w-full h-4" />
        </Button>
        <ThemeSwitcherCheckBox />
      </div>
    </div>
  )
}

function CodeCard() {
  return (
    <div className="border-2 border-border bg-[#0F172A] rounded-[7px] shadow-large w-full max-w-[32rem] xl:min-w-[32rem]">
      <div className="px-2 py-1">
        <div className="flex flex-col">
          <div className="flex justify-between items-center p-1">
            <div className="flex gap-1 items-center">
              <div className="bg-[#334155] w-3 h-3 rounded-full transition duration-custom hover:bg-red-500 hover:cursor-pointer " />
              <div className="bg-[#334155] w-3 h-3 rounded-full transition duration-custom hover:bg-yellow-500 hover:cursor-pointer " />
              <div className="bg-[#334155] w-3 h-3 rounded-full transition duration-custom hover:bg-green-500 hover:cursor-pointer " />
            </div>
            <div>
              <p className="text-xsm text-[#526175] font-medium">/index.tsx</p>
            </div>
            <FaRegCopy className="cursor-pointer text-[#334155] transition duration-custom hover:text-[#78889e]" />
          </div>
          <div>
            <Divider orientation="horizontal" className="mt-1 bg-[#202835] " />
          </div>
        </div>
        <div>
          <CodeBlock />
        </div>
      </div>
    </div>
  )
}

const CodeBlock = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="custom-pre custom-scroll">
      <code className="custom-code language-javascript">
        {
          `import { FC } from "react";

type WelcomeProps = {
    uses:
    | "me conhecer um pouquinho melhor"
    | "explorar meus projetos"
    | "encontrar o dev que está procurando"
    | "entrar em contato comigo <3";
};

const Welcome: React.FC<WelcomeProps> = ({ uses }) => {
    return (
        <>
            <h1>Bem vindo ao meu site!</h1>
            <p>
                Aqui você pode <em>{uses}</em>
            </p>
        </>
    )
}

export default Welcome`
        }
      </code>
    </pre>
  );
};

const Tags = () => {
  return (
    <div className="relative flex px-[1rem] overflow-x-auto gap-2 justify-start py-4 whitespace-nowrap xl:pt-[4rem] xl:py-0 xl:justify-end">
      <button className="transition duration-custom border-2 bg-blue-bg rounded-md border-blue-border hover:bg-blue-hover">
        <p className="text-xsm text-[#1c3e5f] dark:text-white px-2 opacity-70">Dev</p>
      </button>
      <button className="transition duration-custom border-2 bg-orange-bg rounded-md border-orange-border hover:bg-orange-hover">
        <p className="text-xsm text-[#4d2f1c] dark:text-white px-2 opacity-70">Gamer</p>
      </button>
      <button className="transition duration-custom border-2 bg-green-bg rounded-md border-green-border hover:bg-green-hover">
        <p className="text-xsm text-[#133a23] dark:text-white px-2 opacity-70">Explorador</p>
      </button>
      <button className="transition duration-custom border-2 bg-pink-bg rounded-md border-pink-border hover:bg-pink-hover">
        <p className="text-xsm text-[#881f5c] dark:text-white px-2 opacity-70">Astrônomo</p>
      </button>
      <button className="transition duration-custom border-2 bg-gray-bg rounded-md border-gray-border hover:bg-gray-hover">
        <p className="text-xsm text-[#14181b] dark:text-white px-2 opacity-70">Mestre do Xadrez</p>
      </button>
    </div>
  )
}