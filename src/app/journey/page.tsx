'use client'
import Footer from "@/components/Layout/Footer";
import { GithubIcon, LinkedinIcon, MailIcon, WhatsIcon } from "@/components/Icons/Icons";
import { Accordion, AccordionItem, Divider, ScrollShadow } from "@nextui-org/react";
import Link from "next/link";
import React, { ReactNode, useRef } from "react";
import { useIsLargeScreen } from "@/Utils/Utils";

export default function Resume() {
    const [expandedKeys, setExpandedKeys] = React.useState<string[]>(['1', '2', '3', '4', '5', '6']);
    const scrollRef = useRef<HTMLDivElement>(null);

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

    return (
        <main>
            <section className="flex pt-[5rem] md:pt-[8rem] w-full px-2 md:px-5 justify-center">
                <div className="flex w-full max-w-[80rem] gap-10 justify-between">
                    <ScrollShadow ref={scrollRef} size={40} className="pr-2 w-full max-h-[78vh] lg:max-h-[80vh] xl:overflow-y-hidden xl:hover:overflow-y-auto scrollbar-thin dark:scrollbar-thumb-gray-800 scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <Accordion selectionMode="multiple"
                            selectedKeys={expandedKeys}
                        >
                            <AccordionItem key="1" aria-label="Intro" id="Intro" onPress={() => handleKeysController('1')}
                                startContent={<ItemName name="Introdução" />}>
                                <p className="text-text">
                                    Sou um desenvolvedor de software autodidata, apaixonado por tecnologia e em busca de
                                    um novo desafio. Me considero um desenvolvedor em transição, me
                                    especializando no desenvolvimento front-end e back-end utilizando Typescript,
                                    React.js e Node.js. Ao longo dos anos como desenvolvedor, tive a oportunidade de
                                    trabalhar no desenvolvimento de sistemas integrados e em soluções como ERP, CRM,
                                    BPM, WMS, GED e Chatbots.
                                </p>
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Experiencia" id="Experiencia" onPress={() => handleKeysController('2')}
                                startContent={<ItemName name="Experiência" />}>
                                <TimelineItem
                                    jobTitle="Full-stack Developer"
                                    company="Softdata Soluções Ltda."
                                    location="Joinville, SC"
                                    duration="Agosto 2022 - Agosto 2023 (1 ano)"
                                    items={['Desenvolvimento de projetos envolvendo novas funcionalidades, customizações e manutenção de código em um sistema ERP e WMS.',
                                        'Utilizamos a linguagem DataFlex tanto para a parte back-end quanto front-end do sistema.',
                                    ]}
                                />
                                <TimelineItem
                                    jobTitle="Back-end Developer"
                                    company="Algar Tech"
                                    location="Uberlândia, Minas Gerais (Remoto)"
                                    duration="Fevereiro 2022 - Outubro 2022 (9 meses)"
                                    items={[
                                        'Desenvolvimento de chatbots e URAs eletrônicas como solução omnichannel.',
                                        'Utilizamos a plataforma Genesys para mapear e desenvolver os fluxos de atendimento.',
                                        'Utilizamos a linguagem JavaScript para o desenvolvimento de lógica de negócio e consumo de APIs.'
                                    ]}
                                />
                                <TimelineItem
                                    jobTitle="Desenvolvedor Full-Stack Júnior"
                                    company="Neomind"
                                    location="Joinville, SC"
                                    duration="Março 2021 - Fevereiro 2022 (11 meses)"
                                    items={[
                                        'Desenvolvimento de correções emergenciais no time de complexidade técnica.',
                                        'Tecnologias utilizadas: Java, Spring Boot, JavaScript, Angular Js, Banco de dados (SQL, MySQL e Oracle) e Git.',
                                    ]}
                                />
                                <TimelineItem
                                    jobTitle="Analista de suporte técnico"
                                    company="Neomind"
                                    location="Joinville, SC"
                                    duration="Maio 2020 - Março 2021 (11 meses)"
                                    items={[
                                        'Atendimento, análise e solução de problemas técnicos reportados pelo cliente no time de Suporte técnico.',
                                        'Análise de erros e bugs através de logs e código.',
                                        'Banco de dados (SQL, MySQL e Oracle).',
                                    ]}
                                />
                                <TimelineItem
                                    jobTitle="Trainee suporte técnico"
                                    company="Neomind"
                                    location="Joinville, SC"
                                    duration="Dezembro 2019 - Maio 2020 (6 meses)"
                                    items={[]}
                                />
                                <TimelineItem
                                    jobTitle="Estágio suporte técnico"
                                    company="Neomind"
                                    location="Joinville, SC"
                                    duration="Julho 2019 - Dezembro 2019 (6 meses)"
                                    items={[]}
                                />
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Competencias" id="Competencias" onPress={() => handleKeysController('3')}
                                startContent={<ItemName name="Competências" />}>
                                <div className="flex flex-col gap-4">
                                    <SkillItem title="Linguagens de programação" skills="TypeScript, JavaScript, Java, DataFlex, Python, HTML, e CSS." />
                                    <SkillItem title="Libs & Frameworks" skills="React.js, Next.js, Nest.js, Adonis.js, Node.js, Tailwindcss, Material UI e nextUI." />
                                    <SkillItem title="Banco de dados" skills="SQL, MySQL, Oracle e MongoDB." />
                                    <SkillItem title="Provedores" skills="Vercel, AWS, Firebase, Google Cloud, Github, GitLab e Tortoise." />
                                    <SkillItem title="Ferramentas" skills="VSCode, Intellij Idea, Eclipse, Git, Yarn, NPM, Figma, Postman, MS Office, e Dev Tools." />
                                </div>
                            </AccordionItem>
                            <AccordionItem key="4" aria-label="Educacao" id="Educacao" onPress={() => handleKeysController('4')}
                                startContent={<ItemName name="Educação" />}>
                                <div>
                                    <TimelineItem
                                        jobTitle="Graduação em Análise e Desenvolvimento de Sistemas"
                                        company="Anhanguera"
                                        location="Joinville, SC"
                                    />
                                    <TimelineItem
                                        jobTitle="Técnico em Eletromecânica Industrial"
                                        company="Senai SC"
                                        location="Joinville, SC"
                                    />
                                    <TimelineItem
                                        jobTitle="Ensino médio"
                                        company="EEB João Colin"
                                        location="Joinville, SC"
                                    />
                                </div>
                            </AccordionItem>
                            <AccordionItem key="5" aria-label="Certificacoes" id="Certificacoes" onPress={() => handleKeysController('5')}
                                startContent={<ItemName name="Certificações" />}>
                                <div>
                                    <CertificateItem institution="Udemy" name="Java COMPLETO Programação Orientada a Objetos + Projetos" />
                                    <CertificateItem institution="Udemy" name="Curso Web Moderno Completo com JavaScript + Projetos" />
                                    <CertificateItem institution="Udemy" name="Formação Cientista de Dados: O Curso Completo" />
                                    <CertificateItem institution="Udemy" name="GERENCIAMENTO POR PROCESSOS DE NEGÓCIO (BPM) CONFORME O CBOK" />
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </ScrollShadow>
                    <Panel setExpandedKeys={setExpandedKeys}/>
                    <BgShadow/>
                </div>
            </section>
            <div className="md:hidden">
                <Footer />
            </div>
        </main>
    )
}

function BgShadow(){
    return (
        <div className="hidden xl:flex absolute h-[50rem] -top-[10rem] left-[60rem] opacity-30 dark:opacity-30  z-[-10] ">
            <img src="blue-purple-1.svg" ></img>
        </div>
    )
}

interface PanelProps {
    setExpandedKeys: React.Dispatch<React.SetStateAction<string[]>>
}

function Panel({setExpandedKeys}: PanelProps) {
    const isLargeScreen = useIsLargeScreen(768);
    if (!isLargeScreen) return null;

    function CustomLink({ children, href, iKey }: { children: ReactNode, href: string, iKey: string }) {
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
                className='transition-colors duration-300 ease-in-out font-medium hover:text-blue text-text'
                onClick={() => handleClick(iKey)} href={href}
            >
                {children}
            </Link>
        );
    }

    return (
        <div className="hidden md:flex flex-col max-w-[170px] justify-between">
            <div className="" >
                <img loading="eager" src="user.jpeg" alt="foto-cv" className="object-cover h-[190px] rounded-[10px] border-1 border-border" />
            </div>
            <div className="flex flex-col gap-2 items-center">
                <CustomLink iKey="1" href="#Intro">Introdução</CustomLink>
                <CustomLink iKey="2" href="#Experiencia">Experiência</CustomLink>
                <CustomLink iKey="3" href="#Competencias">Competências</CustomLink>
                <CustomLink iKey="4" href="#Educacao">Educação</CustomLink>
                <CustomLink iKey="5" href="#Certificacoes">Certificações</CustomLink>
            </div>
            <div className="flex flex-col gap-2 ">
                <div className="flex gap-3 justify-center">
                    <WhatsIcon h="5" w="5" />
                    <MailIcon h="5" w="5" />
                    <LinkedinIcon h="5" w="5" />
                    <GithubIcon h="5" w="5" />
                </div>
                <span className="text-text text-[14px] text-center">Joinville, Santa Catarina</span>
                <span className="text-text text-[13px] text-center pt-1">© 2024 Yuri Kaffer. Todos os direitos reservados.</span>
            </div>
        </div>
    )
}

function SkillItem({ title, skills }: { title: string, skills: string }) {
    return (
        <div>
            <strong className="text-text text-[17px]">{title}</strong>
            <p className="text-text text-[14px]">{skills}</p>
        </div>
    )
}

function CertificateItem({ institution, name }: { institution: string, name: string }) {
    return (
        <div className="flex gap-1">
            <p className="font-semibold text-text text-[14px]">{institution}</p>
            <p className="text-text text-[14px]"> - </p>
            <p className="text-text text-[14px]">{name}</p>
        </div>
    )
}

interface TimelineItemProps {
    jobTitle: string;
    company: string;
    location: string;
    duration?: string;
    items?: string[];
}

function TimelineItem({ jobTitle, company, location, duration, items, }: TimelineItemProps) {
    return (
        <div className="relative flex pb-2">
            <div className="flex flex-col items-center px-4 pt-1">
                <div className="flex h-4 w-4 min-h-4 rounded-full bg-gray-300 dark:bg-gray-400 items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-gray-500 dark:bg-gray-700" />
                </div>
                <div className="h-full pt-2">
                    <Divider orientation="vertical" className="w-[2px] rounded-full bg-gray-300 dark:bg-gray-700" />
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
                    {items &&
                        <ul className="list-disc pl-4 text-text text-[14px] pt-2">
                            {items.map((item, index) => (
                                <li key={index} className="pl-2">{item}</li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}