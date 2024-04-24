'use client'
import Footer from "@/components/Layout/Footer";
import NavbarComponent from "@/components/Layout/Navbar";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/Icons/Icons";
import { Accordion, AccordionItem, Divider, ScrollShadow } from "@nextui-org/react";
import Link from "next/link";
import React, { ReactNode, useEffect, useRef } from "react";

export default function Resume() {
    const [expandedKeys, setExpandedKeys] = React.useState<string[]>(['1', '2', '3', '4', '5', '6']);
    const [hasScrolled, setHasScrolled] = React.useState('Intro');
    const scrollRef = useRef<HTMLDivElement>(null);

    const debounce = (func: () => void, delay: number) => {
        let inDebounce: NodeJS.Timeout | undefined;
        return function () {
            clearTimeout(inDebounce);
            inDebounce = setTimeout(func, delay);
        };
    };

    useEffect(() => {
        const handleScroll = debounce(() => { //         AJUSTAR ESSA LOGICA QUANDO POPULAR OS TEXTOS DESSA PAGINA!!!
            const scrollPosition = scrollRef.current ? scrollRef.current.scrollTop : 0;
            
            if (scrollPosition > 450) {
                setHasScrolled('Interesses');
              } else if (scrollPosition > 399) {
                setHasScrolled('Certificacoes');
              } else if (scrollPosition > 299) {
                setHasScrolled('Educacao');
              } else if (scrollPosition > 199) {
                setHasScrolled('Competencias');
              } else if (scrollPosition > 99) {
                setHasScrolled('Experiencia');
              } else {
                setHasScrolled('Intro');
              }
        }, 100);
        
        // Certificando-se de que a referência existe e o conteúdo é suficiente
        if (scrollRef.current) {
            scrollRef.current.addEventListener('scroll', handleScroll);
        }

        // Removendo o event listener quando o componente for desmontado
        return () => {
            if (scrollRef.current) {
                scrollRef.current.removeEventListener('scroll', handleScroll);
            }
        };

    }, [scrollRef.current]);

    function handleKeysController(iKey: string) {
        setExpandedKeys(prevKeys => {
            const index = prevKeys.indexOf(iKey);
            if (index === -1) {
                return [...prevKeys, iKey];
            } else {
                return prevKeys.filter(key => key !== iKey);
            }
        });
    }

    function ItemName({ name }: { name: string }) {
        return (
            <p className="text-[28px] md:text-[32px] font-bold">{name}</p>
        )
    }

    function CustomLink({ children, href, color, iKey }: { children: ReactNode, href: string, color?: string, iKey: string }) {
        function handleClick(iKey: string) {
            setExpandedKeys(prevKeys => {
                const index = prevKeys.indexOf(iKey);
                if (index === -1) {
                    return [...prevKeys, iKey];
                } else {
                    return [...prevKeys];
                }
            });
        }

        return (
            <Link
                className={`transition-colors duration-300 ease-in-out font-medium hover:text-blue ${color}`}
                onClick={() => handleClick(iKey)} href={href}
            >
                {children}
            </Link>
        );
    }

    return (
        <main>
            <NavbarComponent />
            <section className="flex md:pt-[4rem] w-full justify-center px-2 md:px-5 ">
                <div className="flex w-full max-w-[80rem] gap-10 justify-between">
                    <ScrollShadow ref={scrollRef} size={40} className="pr-2 w-full max-h-[77vh] lg:max-h-[75vh] scrollbar-thin dark:scrollbar-thumb-gray-800 scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <Accordion selectionMode="multiple"
                            selectedKeys={expandedKeys}
                        >
                            <AccordionItem key="1" aria-label="Intro" id="Intro" onPress={() => handleKeysController('1')}
                                startContent={<ItemName name="Introdução" />}>
                                <p className="text-text">
                                    Sou um apaixonado desenvolvedor de software autodidata (e ex-dono de restaurante e chef)
                                    em busca de um novo desafio. Sou especialista em desenvolvimento front-end e backend
                                    sem servidor usando Typescript, React.js e Node.js. Como defensor do desempenho e
                                    acessibilidade da web e evangelista do JAM Stack e da pilha T3 mais recente , crio aplicativos
                                    da web incríveis para tornar a Internet um lugar melhor. Adoro encontrar problemas difíceis
                                    de resolver e abordá-los com paciência, determinação e perseverança implacável.
                                </p>
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Experiencia" id="Experiencia" onPress={() => handleKeysController('2')}
                                startContent={<ItemName name="Experiencia" />}>
                                    <TimelineItem
                                        jobTitle="Cargo Full Stack"
                                        company="Empresa"
                                        location="Cidade, Estado"
                                        duration="Março de 2020 - Novembro de 2022"
                                        items={['Exp 1', 'Exp 2', 'Exp 3', 'Exp 4']}
                                    />
                                    <TimelineItem
                                        jobTitle="Cargo Full Stack Senior"
                                        company="Empresa do caraio"
                                        location="Joinville, SC"
                                        duration="Março de 2023 - Novembro de 2024"
                                        items={['desenvolvendo nada', 'aprendendo tudo', 'tudo passa', 'tudo sabe', 'mais ainda', 'quem te pega']}
                                    />
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Competencias" id="Competencias" onPress={() => handleKeysController('3')}
                                startContent={<ItemName name="Competências" />}>
                                    Teste Acordionnnnn
                            </AccordionItem>
                            <AccordionItem key="4" aria-label="Educacao" id="Educacao" onPress={() => handleKeysController('4')}
                                startContent={<ItemName name="Educação" />}>
                                    Teste Acordionnnnn
                            </AccordionItem>
                            <AccordionItem key="5" aria-label="Certificacoes" id="Certificacoes" onPress={() => handleKeysController('5')}
                                startContent={<ItemName name="Certificações" />}>
                                    Teste Acordionnnnn
                            </AccordionItem>
                            <AccordionItem key="6" aria-label="Interesses" id="Interesses" onPress={() => handleKeysController('6')}
                                startContent={<ItemName name="Interesses" />}>
                                    Teste Acordionnnnn
                            </AccordionItem>
                        </Accordion>
                    </ScrollShadow>
                    <div className="hidden md:flex flex-col ">
                        <div className="" >
                            <img src="aventureiro.jpeg" alt="foto-cv" className=" object-cover max-w-[160px] max-h-[170px] rounded-md border-2 border-border" />
                        </div>
                        <div className=" flex flex-col pt-14 gap-2 items-center">
                            <CustomLink color={hasScrolled === 'Intro' ? 'text-blue' : 'text-text'} iKey="1" href="#Intro">Introdução</CustomLink>
                            <CustomLink color={hasScrolled === 'Experiencia' ? 'text-blue' : 'text-text'} iKey="2" href="#Experiencia">Experiencia</CustomLink>
                            <CustomLink color={hasScrolled === 'Competencias' ? 'text-blue' : 'text-text'} iKey="3" href="#Competencias">Competências</CustomLink>
                            <CustomLink color={hasScrolled === 'Educacao' ? 'text-blue' : 'text-text'} iKey="4" href="#Educacao">Educação</CustomLink>
                            <CustomLink color={hasScrolled === 'Certificacoes' ? 'text-blue' : 'text-text'} iKey="5" href="#Certificacoes">Certificações</CustomLink>
                            <CustomLink color={hasScrolled === 'Interesses' ? 'text-blue' : 'text-text'} iKey="6" href="#Interesses">Interesses</CustomLink>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-3 pt-14 justify-center">
                                <MailIcon h="4" w="4" />
                                <GithubIcon h="4" w="4" />
                                <LinkedinIcon h="4" w="4" />
                            </div>
                            <span className="text-text text-[14px]">Joinville, Santa Catarina</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

interface TimelineItemProps {
    jobTitle: string;
    company: string;
    location: string;
    duration: string;
    items: string[];
}

function TimelineItem({ jobTitle, company, location, duration, items, }: TimelineItemProps) {
    return (
        <div className="relative flex pb-2">
            <div className="flex flex-col items-center px-4 pt-1">
                <div className="flex h-4 w-4 min-h-4 rounded-full bg-gray-300 dark:bg-gray-400 items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-gray-500 dark:bg-gray-700" />
                </div>
                <div className="h-full pt-3">
                    <Divider orientation="vertical" className="w-[3px] rounded-full bg-gray-300 dark:bg-gray-700" />
                </div>
            </div>
            <div>
                <div>
                    <strong className="text-text text-[17px]">{jobTitle}</strong>
                    <span className="flex gap-2 text-text text-[14px]">
                        <span className="font-semibold">{company}</span>
                        <span>-</span>
                        <span className="text-text opacity-90">{location}</span>
                    </span>
                    <span className="text-text text-[12px] font-medium">{duration}</span>
                </div>
                <div>
                    <ul className="list-disc pl-4 text-text text-[14px] pt-2">
                        {items.map((item, index) => (
                            <li key={index} className="pl-2">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}