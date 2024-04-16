'use client'
import { TbBrandNextjs } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { FaNodeJs, FaRegCopy } from "react-icons/fa";
import ButtonRGB from "@/components/ui/Buttons/ButtonRGB/ButtonRGB";
import ButtonComponent from "@/components/ui/Buttons/Button/ButtonComponent";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import './globals.css'
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Link, User } from "@nextui-org/react";
import ThemeSwitcherCheckBox from "@/components/ThemeSwitcher/CheckBox/ThemeSwitcherCheckBox";
import { TiStarFullOutline } from "react-icons/ti";
import { FcLike } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { IoIosLink } from "react-icons/io";

export default function Home() {
  return (
    <>
      <main >
        <section >
          <div className="flex justify-center items-center gap-[3%] ">
            <Apresentação />
            <div className="pt-[15rem]">
              <div className="py-2">
                <Tags />
              </div>
              <div className="w-[30rem] shadow-lg">
                <CodeCard />
              </div>
              <ButtonsExemple />
            </div>
          </div>
          <CardTwitter />
        </section>
        <section >
          <div className="pt-[20rem] flex gap-12 justify-center">
            <Fotos />
            <Informacoes />
          </div>
        </section>
        <section className="dark:bg-[#04060c]">
          <div className="pt-[15rem]">
            <p className="text-blue text-sm font-bold ml-[15rem]">Portfolio</p>
            <h1 className="text-xl font-extrabold ml-[15rem] leading-none tracking-tight" >Projetos de estudo.</h1>
          </div>
          <div className="pt-[2rem]">
            <Carousel />
          </div>
        </section>
      </main>
    </>
  )
}

interface TagProps {
  name: string
}

function Tag({ name }: TagProps) {
  return (
    <div className="bg-[#dad9d9] rounded hover:bg-opacity-50 bg-opacity-30 border-[1.5px] border-[#000000] border-opacity-20">
      <p className="text-[13px] text-white px-2 py-1 font-semibold opacity-90 pointer-events-none">{name}</p>
    </div>
  )
}

interface CardProjectProps {
  img: string
  title: string
  description: string
  tags: string[]
  git?: string
  demo?: string
  style: string
}

function CardProject({ img, title, description, tags, git, demo, style }: CardProjectProps) {
  return (
    <div className={`${style} min-w-[25rem] p-[1rem] rounded-large transition-transform duration-300 hover:scale-105`}>
      <img src={img} alt={'imagem' + title} className="object-cover rounded-large [mask-image:linear-gradient(180deg,#fff_56.35%,rgb(255_255_255_/_0%)_96.00%)]" />
      <div className="pt-4 flex flex-col gap-2 ">
        <h3 className="text-[24px] font-extrabold text-white opacity-95 ">{title}</h3>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <p key={index}><Tag name={tag} /></p>
          ))}
        </div>
        <p className="text-white opacity-90">{description}</p>
      </div>
      <div className="flex justify-between pt-6 items-center">
          <p className="font-bold text-[17px] leading-none mt-auto opacity-60 text-[#FFF]">2024</p>
          <div className="flex gap-6">
            {git && (
              <Link
                className="icon-button opacity-60 text-[#FFF]"
                href={git}
                referrerPolicy="no-referrer"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="w-6 h-6 " />
              </Link>
            )}
            {demo && (
              <Link
                className="icon-button opacity-60 text-[#FFF]"
                href={demo}
                referrerPolicy="no-referrer"
                target="_blank"
                rel="noreferrer"
              >
                <IoIosLink className="w-6 h-6 "/>
              </Link>
            )}
          </div>
      </div>
    </div>
  )
}

function Carousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -435, behavior: 'smooth' });
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 435, behavior: 'smooth' });
    }
  }

  return (
    <div className="relative">
      <div className="flex overflow-x-hidden gap-8 p-[2rem] " ref={carouselRef}>
        <CardProject
          img="site-apresentacao.png"
          description="Teste description Teste description Teste description Teste description Teste description Teste description Teste description"
          tags={['Typescript', 'Next.js', 'React.js', 'Mui']}
          title="Teste Title"
          demo="teste"
          git="teste"
          style="cardPurple"
        />
        <CardProject
          img="site-apresentacao.png"
          description="Teste description Teste description Teste description Teste description Teste description Teste description Teste description"
          tags={['Typescript', 'Next.js', 'React.js', 'Mui']}
          title="Teste Title"
          demo="teste"
          git="teste"
          style="cardRed"
        />
        <CardProject
          img="site-apresentacao.png"
          description="Teste description Teste description Teste description Teste description Teste description Teste description Teste description"
          tags={['Typescript', 'Next.js', 'React.js', 'Mui']}
          title="Teste Title"
          demo="teste"
          git="teste"
          style="cardBlue"
        />
        <CardProject
          img="site-apresentacao.png"
          description="Teste description Teste description Teste description Teste description Teste description Teste description Teste description"
          tags={['Typescript', 'Next.js', 'React.js', 'Mui']}
          title="Teste Title"
          demo="teste"
          git="teste"
          style="cardPink"
        />
        <CardProject
          img="site-apresentacao.png"
          description="Teste description Teste description Teste description Teste description Teste description Teste description Teste description"
          tags={['Typescript', 'Next.js', 'React.js', 'Mui']}
          title="Teste Title"
          demo="teste"
          git="teste"
          style="cardGreen"
        />

      </div>
      <div className="flex justify-between py-2 ">
        <button
          onClick={scrollLeft}
        >
          <p className="text-text hover:text-blue ">← anterior</p>
        </button>
        <button
          onClick={scrollRight}
        >
          <p className="text-text hover:text-blue ">próximo →</p>
        </button>
      </div>
    </div>
  )
}

function Informacoes() {
  return (
    <div className="flex flex-col gap-6 max-w-[32rem]">
      <div className="flex justify-between leading-tight">
        <div className="flex flex-col">
          <span className="gradient-text text-md font-extrabold tracking-tight">23</span>
          <p className="text-text">Anos</p>
        </div>
        <div className="flex flex-col   ">
          <span className="gradient-text text-md font-extrabold tracking-tight ">2+</span>
          <p className="text-text" >Anos de dev</p>
        </div>
        <div className="flex flex-col  ">
          <span className="gradient-text text-md font-extrabold tracking-tight ">1</span>
          <p className="text-text" >Amazing dog</p>
        </div>
        <div className="flex flex-col  ">
          <span className="gradient-text text-md font-extrabold tracking-tight ">263</span>
          <p className="text-text" >Commits</p>
        </div>
      </div>

      <p className="text-text" >
        Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri
        Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri
        Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri
      </p>
      <p className="text-text" >
        Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri
        Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri
        Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri
        Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri
        Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri
      </p>
      <p className="text-text" >
        Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri
      </p>
    </div>
  )
}

interface PhotoProps {
  index: number;
  isHidden: boolean;
  entranceActive: boolean;
  active: boolean;
  handleClick: (index: number) => void;
  imageUrl: string;
}

const Photo = memo<PhotoProps>(({ index, isHidden, entranceActive, active, handleClick, imageUrl }) => {
  console.log('photo component')
  const [isHovering, setIsHovering] = useState(false);

  const allowedRotations = [2, 3, 6, 12];
  const rotationIndex = index % allowedRotations.length;
  const rotationDegree = allowedRotations[rotationIndex];
  const rotationDirection = index % 2 === 0 ? '-' : '';

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div onClick={() => handleClick(index)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${active ? 'animate-slide' : ''} ${isHidden ? 'hidden' : ''} 
                     ${entranceActive ? 'animate-entrance' : ''} absolute
                     transition duration-300 ease-in-out border-2 cursor-pointer border-[#8999b3] dark:border-[#1c2636]
                     bg-[#0F172A] rounded-[15px] shadow-large z-${40 - index * 10}`}
      style={{
        transform: `rotate(${isHovering ? '0' : `${rotationDirection}${rotationDegree}`}deg)`
      }}>
      <img src={imageUrl} alt={`Foto ${index}`} className="object-cover w-[25rem] h-[25rem] rounded-[15px]" />
    </div>
  );
});

function Fotos() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hidden, setHidden] = useState<boolean[]>([false, false, false, false]);
  const [entranceAnimation, setEntranceAnimation] = useState<boolean[]>([false, false, false, false]);
  const [clickable, setClickable] = useState<boolean>(true);
  console.log('Fotos component')

  const imageUrls = ['foto-exemplo.webp', 'foto-exemplo.webp', 'foto-exemplo.webp', 'foto-exemplo.webp'];

  const handlePhotoClick = useCallback((index: number) => {
    if (!clickable) return;
    setClickable(false);

    setActiveIndex(index);
    setTimeout(() => {
      const newHidden = [...hidden];
      newHidden[index] = true;
      setHidden(newHidden);
      setActiveIndex(null);

      if (newHidden.every(h => h)) {
        setHidden([false, false, false, false]);
        setEntranceAnimation(new Array(4).fill(true));
        setTimeout(() => setEntranceAnimation(new Array(4).fill(false)), 600);
      }

      setClickable(true);
    }, 600);
  }, [clickable, hidden]);

  return (
    <div className="relative w-[30rem] h-[30rem] justify-center items-center">
      {hidden.map((isHidden, index) => (
        <Photo
          key={index}
          index={index}
          isHidden={isHidden}
          entranceActive={entranceAnimation[index]}
          active={index === activeIndex}
          handleClick={handlePhotoClick}
          imageUrl={imageUrls[index]}
        />
      ))}
    </div>
  );
}

function Apresentação() {
  return (
      <div className="flex flex-col max-w-[45rem]">
        <p className="text-sm text-blue font-semibold">Bem-vindo ao meu site.</p>
        <div className="flex flex-row">
          <h1 className="text-xl font-extrabold leading-none tracking-tight">
            Sou <strong className="gradient-text"> Yuri Kaffer</strong>, <br />
            Full Stack developer.
          </h1>
        </div>
        <div className="flex gap-4 py-2 text-text">
          <div className="flex items-center gap-2">
            <TbBrandNextjs size={'27px'} />
            <p className="text-sm" >Next.js</p>
          </div>
          <div className="flex items-center gap-2">
            <FaNodeJs size={'27px'} />
            <p className="text-sm" >Node.js</p>
          </div>
          <div className="flex items-center gap-2">
            <SiReact size={'27px'} />
            <p className="text-sm" >React.js</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-1 text-text">
          <p className="text-sm">
            Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri
            Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri
            Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri
          </p>
          <p className="text-sm">
            Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri
            Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri
          </p>
        </div>

        <div className="flex gap-5 pt-4">
          <ButtonRGB name="Let's Talk" />
          <ButtonComponent name="Resume" />
        </div>
      </div>
  )
}

function CardTwitter() {
  return (
    <div className="absolute  top-[67%] right-[40%] transform -translate-y-1/2 z-50 floating">
      <Card className=" border-2 border-border rounded-[7px] max-w-[24rem] bg-bg shadow-lg bg-opacity-80 backdrop-blur">
        <CardHeader className="flex justify-between">
          <UserCard />
          <Button variant="solid" className="rounded-full h-7 bg-[#057BB9] text-white">
            Follow
          </Button>
        </CardHeader>
        <CardBody className="text-text text-[12px]">
          <p>
            Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri
            Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri Yuri yuri yuri yuri
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
        <Link className="text-text font-normal" href="" size="sm" >
          @yuri_kaffer
        </Link>
      )}
      avatarProps={{
        src: "https://avatars.githubusercontent.com/u/303714325?v=4",
        className: "border-2 border-[#dbdee2] dark:border-[#424E61]"
      }}
    />
  )
}

function ButtonsExemple() {
  return (
    <div className="flex gap-2 items-center pt-4 justify-start pl-[3.5rem] ">
      <Button className="rounded-full h-8 dark:bg-[#0F172A] dark:border-[#1c2636]" variant="faded">
        <FcLike className="w-full h-4" />
        <p className="text-xsm">Like</p>
      </Button>
      <Button isIconOnly className="rounded-[100%] min-w-0 min-h-0 w-8 h-8 dark:border-[#1c2636] hover:bg-[#DD9520] dark:hover:bg-[#DD9520] hover:text-[#f0f0f3] dark:hover:text-[#27272A] dark:bg-[#0F172A]" color="warning" variant="faded">
        <TiStarFullOutline className="w-full h-4" />
      </Button>
      <ThemeSwitcherCheckBox />
    </div>
  )
}

function CodeCard() {
  return (
    <div className="border-2 border-[#8999b3] dark:border-[#1c2636] bg-[#0F172A] rounded-[7px] shadow-large">
      <div className="px-2 py-1">
        <div className="flex flex-col">
          <div className="flex justify-between items-center p-1">
            <div className="flex gap-1 items-center">
              <div className="bg-[#334155] w-3 h-3 rounded-full hover:bg-red-500 hover:cursor-pointer" />
              <div className="bg-[#334155] w-3 h-3 rounded-full hover:bg-yellow-500 hover:cursor-pointer " />
              <div className="bg-[#334155] w-3 h-3 rounded-full hover:bg-green-500 hover:cursor-pointer " />
            </div>
            <div>
              <p className="text-xsm text-[#526175] font-medium">/index.tsx</p>
            </div>
            <FaRegCopy className="cursor-pointer text-[#334155] hover:text-[#78889e]" />
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
    | "explore new tech"
    | "display my skills"
    | "find freelancing opportunities"
    | "find a fulltime job";
};

type WelcomeProps = {
  uses: 
    | "explore new tech"
    | "display my skills"
    | "find freelancing opportunities"
    | "find a fulltime job";
};

console.log('Hello, world!');
        `}
      </code>
    </pre>
  );
};

const Tags = () => {
  return (
    <div className="flex gap-2 justify-end">
      <button className="border-2 bg-blue-bg rounded-md border-blue-border hover:bg-blue-hover">
        <p className="text-xsm text-[#1c3e5f] dark:text-white px-2 opacity-70">Gamer</p>
      </button>
      <button className="border-2 bg-orange-bg rounded-md border-orange-border hover:bg-orange-hover">
        <p className="text-xsm text-[#4d2f1c] dark:text-white px-2 opacity-70">Gamer</p>
      </button>
      <button className="border-2 bg-green-bg rounded-md border-green-border hover:bg-green-hover">
        <p className="text-xsm text-[#133a23] dark:text-white px-2 opacity-70">Gamer</p>
      </button>
      <button className="border-2 bg-pink-bg rounded-md border-pink-border hover:bg-pink-hover">
        <p className="text-xsm text-[#881f5c] dark:text-white px-2 opacity-70">Gamer</p>
      </button>
      <button className="border-2 bg-gray-bg rounded-md border-gray-border hover:bg-gray-hover">
        <p className="text-xsm text-[#14181b] dark:text-white px-2 opacity-70">Gamer</p>
      </button>
    </div>
  )
}