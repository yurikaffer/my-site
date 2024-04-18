import Link from "next/link";
import { useRef, useState } from "react";
import { BsGithub, BsInfoCircleFill } from "react-icons/bs";
import { IoIosLink } from "react-icons/io";

export default function Carousel() {
    const [activeButton, setActiveButton] = useState('');

    const handleButtonClick = (button: string) => {
        setActiveButton(button);
    };

    return (
        <>
            <div className="pt-[10rem] flex flex-col justify-center items-center w-full">
                <div className="w-full max-w-[80rem] justify-start px-[1rem] xl:px-0">
                    <p className="text-blue text-[16px] font-bold ">Portfolio</p>
                    <h1 className="text-[38px] lg:text-xl font-extrabold leading-none tracking-tight">Projetos de estudo.</h1>
                    <div className="flex gap-2 py-[1rem] overflow-x-auto whitespace-nowrap">
                        <button
                            className={`rounded-full border-1 transition duration-custom border-border bg-[#F4F6F8] dark:bg-bg px-4 py-[2px] text-xsm font-semibold ${activeButton === '' ? 'text-active-tag' : 'text-[#696969] dark:text-text'} hover:text-active-tag dark:hover:text-active-tag`}
                            onClick={() => handleButtonClick('')}
                        >
                            All Projects
                        </button>
                        <button
                            className={`rounded-full border-1 transition duration-custom border-border bg-[#F4F6F8] dark:bg-bg px-4 py-[2px] text-xsm font-semibold ${activeButton === 'Typescript' ? 'text-active-tag' : 'text-[#696969] dark:text-text'} dark:hover:text-active-tag hover:text-active-tag`}
                            onClick={() => handleButtonClick('Typescript')}
                        >
                            Typescript
                        </button>
                        <button
                            className={`rounded-full border-1 transition duration-custom border-border bg-[#F4F6F8] dark:bg-bg px-4 py-[2px] text-xsm font-semibold ${activeButton === 'Next.js' ? 'text-active-tag' : 'text-[#696969] dark:text-text'} dark:hover:text-active-tag hover:text-active-tag`}
                            onClick={() => handleButtonClick('Next.js')}
                        >
                            Next.js
                        </button>
                        <button
                            className={`rounded-full border-1 transition duration-custom border-border bg-[#F4F6F8] dark:bg-bg px-4 py-[2px] text-xsm font-semibold ${activeButton === 'React.js' ? 'text-active-tag' : 'text-[#696969] dark:text-text'} dark:hover:text-active-tag hover:text-active-tag`}
                            onClick={() => handleButtonClick('React.js')}
                        >
                            React.js
                        </button>
                        <button
                            className={`rounded-full border-1 transition duration-custom border-border bg-[#F4F6F8] dark:bg-bg px-4 py-[2px] text-xsm font-semibold ${activeButton === 'Adonis.js' ? 'text-active-tag' : 'text-[#696969] dark:text-text'} dark:hover:text-active-tag hover:text-active-tag`}
                            onClick={() => handleButtonClick('Adonis.js')}
                        >
                            Adonis.js
                        </button>
                        <button
                            className={`rounded-full border-1 transition duration-custom border-border bg-[#F4F6F8] dark:bg-bg px-4 py-[2px] text-xsm font-semibold ${activeButton === 'Nest.js' ? 'text-active-tag' : 'text-[#696969] dark:text-text'} dark:hover:text-active-tag hover:text-active-tag`}
                            onClick={() => handleButtonClick('Nest.js')}
                        >
                            Nest.js
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="pt-[1rem] flex justify-center w-full pb-[5rem] ">
                <div className="w-full max-w-[80rem] px-4 xl:px-0 ">
                    <CardCarousel activeButton={activeButton} />
                </div>
            </div>
            
        </>
    );
}

interface CardCarouselProps {
    activeButton: string;
  }

function CardCarousel({ activeButton }: CardCarouselProps) {
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

    const projects = [
        {
            img: "site-apresentacao.png",
            description: "Teste description Teste description Teste description Teste description Teste description Teste description Teste description",
            tags: ['Next.js', 'React.js', 'Tailwind', 'NextUI'],
            title: "Portfolio",
            demo: "teste",
            git: "teste",
            style: "cardPurple"
        },
        {
            img: "site-apresentacao.png",
            description: "Teste description Teste description Teste description Teste description Teste description Teste description Teste description",
            tags: ['React.js', 'Typescript', 'Mui'],
            title: "Site tec",
            demo: "teste",
            git: "teste",
            style: "cardRed"
        },
        {
            img: "site-apresentacao.png",
            description: "Teste description Teste description Teste description Teste description Teste description Teste description Teste description",
            tags: ['Nest.js', 'TypeORM', 'React.js', 'Mui'],
            title: "Rede social",
            demo: "teste",
            git: "teste",
            style: "cardBlue"
        },
        {
            img: "site-apresentacao.png",
            description: "Teste description Teste description Teste description Teste description Teste description Teste description Teste description",
            tags: ['Typescript', 'Next.js', 'React.js', 'Mui'],
            title: "Titulo 3",
            demo: "teste",
            git: "teste",
            style: "cardPink"
        },
        {
            img: "site-apresentacao.png",
            description: "Teste description Teste description Teste description Teste description Teste description Teste description Teste description",
            tags: ['Adonis.js', 'Next.js', 'React.js', 'Mui'],
            title: "Titulo 4",
            demo: "teste",
            git: "teste",
            style: "cardGreen"
        }
    ];

    const filteredProjects = activeButton
        ? projects.filter(project => project.tags.includes(activeButton))
        : projects;


    return (
        <div>
            <div className="custom-scroll flex overflow-x-auto gap-4 py-[1rem] xl:overflow-x-hidden " ref={carouselRef}>
                {filteredProjects.map((project, index) => (
                    <CardProject
                        key={index}
                        img={project.img}
                        description={project.description}
                        tags={project.tags}
                        title={project.title}
                        demo={project.demo}
                        git={project.git}
                        style={project.style}
                    />
                ))}

            </div>
            <div className=" hidden lg:flex justify-between py-4 px-[2rem] ">
                <button
                    onClick={scrollLeft}
                >
                    <p className=" text-text transition duration-custom hover:text-blue">← anterior</p>
                </button>
                <button
                    onClick={scrollRight}
                >
                    <p className="text-text transition duration-custom hover:text-blue ">próximo →</p>
                </button>
            </div>
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
        <div className={`${style} min-w-[21rem] lg:max-w-[25rem] lg:min-w-[26rem] p-[1rem] rounded-large transition duration-custom lg:hover:-translate-y-3 `}>
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
                <p className="font-bold text-[17px] leading-none mt-2 opacity-60 text-[#FFF]">2024</p>
                <div className="flex gap-4 items-center">
                    <Link
                        className="icon-button opacity-60 transition duration-custom text-[#FFF] hover:opacity-90"
                        href='/'
                        referrerPolicy="no-referrer"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsInfoCircleFill className="w-6 h-6 " />
                    </Link>


                    {git && (
                        <Link
                            className="icon-button opacity-60 transition duration-custom text-[#FFF] hover:opacity-90"
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
                            className="icon-button opacity-60 transition duration-custom text-[#FFF] hover:opacity-90"
                            href={demo}
                            referrerPolicy="no-referrer"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IoIosLink className="w-6 h-6 " />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

interface TagProps {
    name: string
}

function Tag({ name }: TagProps) {
    return (
        <div className="bg-[#dad9d9] rounded transition duration-custom hover:bg-opacity-50 bg-opacity-30 border-[1.5px] border-[#000000] border-opacity-20">
            <p className="text-[13px] text-white px-2 py-1 font-semibold opacity-90 pointer-events-none">{name}</p>
        </div>
    )
}