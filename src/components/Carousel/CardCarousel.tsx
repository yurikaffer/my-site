import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { ReactNode, useCallback, useRef, useState } from "react";
import { BsGithub, BsInfoCircleFill } from "react-icons/bs";
import { IoIosLink } from "react-icons/io";

const projects = [
    {
        img: "site-apresentacao.png",
        description: "Projeto front-end com o objetivo de estudar as tecnologias utilizadas e expor o meu trabalho de forma estratégica na web.",
        tags: ['Next.js', 'React.js', 'Tailwind', 'NextUI'],
        title: "Portfólio",
        demo: "teste",
        git: "teste",
        style: "cardRed"
    },
    {
        img: "site-apresentacao.png",
        description: "Esse é um projeto comercial real com o propósito de ajudar a empresa a construir uma identidade digital e otimizar vendas.",
        tags: ['React.js', 'TS', 'Mui'],
        title: "Tec Embalagens",
        demo: "https://tecembalagens.com.br/",
        git: "https://github.com/yurikaffer/site-tec",
        style: "cardBlue  "
    },
    {
        img: "price-of-life.png",
        description: "Price of Life é uma ideia de aplicativo que tem como propósito promover uma mudança de perspectiva em relação ao dinheiro.",
        tags: ['Next.js', 'React.js', 'TS', 'Mui'],
        title: "Price of Life",
        demo: "https://price-of-life.vercel.app/",
        git: "https://github.com/yurikaffer/price-of-life",
        style: "cardGreen"
    },
    {
        img: "rede-social.png",
        description: "Esse projeto teve o propósito de estudar as tecnologias utilizadas, a estrutura de um projeto Full-Stack Node e o relecionamento de dados.",
        tags: ['Nest.js', 'TypeORM', 'React.js', 'Node.js'],
        title: "Rede Social",
        demo: "https://rede-social-frontend.vercel.app/",
        git: "https://github.com/yurikaffer/rede-social-frontend",
        style: "cardPink"
    },
    {
        img: "gamehub.png",
        description: "Um projeto Full-Stack simples com funcionalidades de CRUD. Desenvolvido com o propósito de estudar as tecnologias utilizadas.",
        tags: ['Adonis.js', 'Node.js', 'React.js', 'TS'],
        title: "Game Hub",
        git: "https://github.com/yurikaffer/game-hub-frontend",
        style: "cardPurple "
    },
    {
        img: "todo-list.png",
        description: "Um projeto Full-Stack simples com funcionalidades de CRUD. Desenvolvido com o propósito de estudar as tecnologias utilizadas.",
        tags: ['Adonis.js', 'Node.js', 'React.js', 'TS'],
        title: "Desafio toDo List",
        git: "https://github.com/yurikaffer/frontend-challenge-to-do-list",
        style: "cardDark "
    }
];

export default function Carousel() {
    const [activeButton, setActiveButton] = useState('Todos');
    const handleButtonClick = useCallback((button: string) => {
        setActiveButton(button);
    }, []);

    return (
        <>
            <div className="pt-[5rem] flex flex-col justify-center items-center w-full ">
                <div className="w-full max-w-[80rem] justify-start ">
                    <div className="px-[1rem] 2xl:px-0">
                        <p className="text-blue text-[16px] font-bold">Portfolio</p>
                        <h1 className="text-[38px] lg:text-xl font-extrabold leading-none tracking-tight">Projetos de estudo.</h1>
                    </div>

                    <div className="flex gap-2 py-[1rem] overflow-x-auto whitespace-nowrap pl-[1rem] 2xl:pl-0">
                        <TagButtons activeButton={activeButton} onButtonClick={handleButtonClick} />
                    </div>
                </div>
            </div>

            <div className=" flex justify-center w-full pb-[5rem] ">
                <div className="w-full max-w-[80rem] pl-[1rem] 2xl:pl-0 ">
                    <CardCarousel activeButton={activeButton} />
                </div>
            </div>

        </>
    );
}

function TagButtons({ activeButton, onButtonClick }: {activeButton: string, onButtonClick: (button: string) => void}) {
    const tags = ["Todos", "Next.js", "React.js", "Adonis.js", "Nest.js"];
    return (
        <div className="flex gap-2 pb-2 overflow-x-auto">
            {tags.map(tag => (
                <button
                    key={tag}
                    className={`rounded-full border-1 transition duration-custom border-border bg-[#F4F6F8] dark:bg-bg px-4 py-[2px] text-xsm font-semibold ${activeButton === tag ? 'text-active-tag' : 'text-[#696969] dark:text-text'} hover:text-active-tag dark:hover:text-active-tag`}
                    onClick={() => onButtonClick(tag)}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
}

function CardCarousel({ activeButton }: {activeButton: string}) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const filteredProjects = activeButton === "Todos"
        ? projects
        : projects.filter(project => project.tags.includes(activeButton));

    const scrollLeft = () => carouselRef.current?.scrollBy({ left: -410, behavior: 'smooth' });
    const scrollRight = () => carouselRef.current?.scrollBy({ left: 410, behavior: 'smooth' });

    return (
        <div>
            <div className="custom-scroll flex overflow-x-auto gap-4 py-[1rem] lg:overflow-x-hidden" ref={carouselRef}>
                {filteredProjects.map((project, index) => (
                    <CardProject key={index} {...project} />
                ))}

            </div>
            <div className="hidden lg:flex justify-between py-4 px-[2rem] ">
                <button onClick={scrollLeft} >
                    <p className=" text-text transition duration-custom hover:text-blue">← anterior</p>
                </button>
                <button onClick={scrollRight} >
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
        <div className={`${style} animate-entrance flex flex-col animate-in w-full min-w-[21rem] max-w-[21rem] h-[29rem] lg:max-w-[25rem] lg:min-w-[25rem] p-[1rem] rounded-large transition duration-custom lg:hover:-translate-y-3 `}>
            <img src={img} alt={'imagem' + title} className="object-cover h-full max-h-[13rem] w-full rounded-large [mask-image:linear-gradient(180deg,#fff_56.35%,rgb(255_255_255_/_0%)_96.00%)]" />
            <div className="pt-4 flex flex-col gap-2 ">
                <h3 className="text-[24px] font-extrabold text-white opacity-95 ">{title}</h3>
                <div className="flex gap-2">
                    {tags.map((tag, index) => ( <Tag key={index} name={tag} /> ))}
                </div>
                <p className="text-white opacity-90">{description}</p>
            </div>
            <div className="flex justify-between mt-auto">
                <p className="font-bold text-[17px] leading-none mt-2 opacity-60 text-[#FFF]">2024</p>
                <div className="flex gap-4 items-center">
                    <ProjectLinks content="Mais detalhes" href='/'>
                        <BsInfoCircleFill className="w-6 h-6 " />
                    </ProjectLinks>
                    {git && (
                        <ProjectLinks content="Repositório" href={git}>
                            <BsGithub className="w-6 h-6 " />
                        </ProjectLinks>
                    )}
                    {demo && (
                        <ProjectLinks content="Demonstração" href={demo}>
                            <IoIosLink className="w-6 h-6 " />
                        </ProjectLinks>
                    )}
                </div>
            </div>
        </div>
    )
}

function ProjectLinks({ content, href, children }: {content: string, href: string, children: ReactNode}) {
    return (
        <Tooltip content={content} placement="bottom">
            <Link
                className="icon-button opacity-60 transition duration-custom text-[#FFF] hover:opacity-90"
                href={href}
                referrerPolicy="no-referrer"
                target="_blank"
                rel="noreferrer"
            >
                {children}
            </Link>
        </Tooltip>
    );
}

function Tag({ name }: {name: string}) {
    return (
        <div className="bg-[#dad9d9] rounded transition duration-custom hover:bg-opacity-50 bg-opacity-30 border-[1.5px] border-[#000000] border-opacity-20">
            <p className="text-[13px] text-white px-2 py-[2px] font-semibold opacity-90 pointer-events-none">{name}</p>
        </div>
    )
}