'use client'
import Footer from "@/components/Layout/Footer";
import NavbarComponent from "@/components/Layout/Navbar";
import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import Link from "next/link";
import { ReactNode } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Resume() {
    return (
        <main className="dark:bg-[#04060c] ">
            <NavbarComponent />
            <section className="flex pb-[7rem] pt-[4rem] w-full justify-center min-h-[100vh] px-5">
                <div className=" flex w-full max-w-[80rem] gap-10 justify-between">
                    <Accordion className="flex flex-col gap-5" selectionMode="multiple" defaultExpandedKeys={["1", "2", "3", "4", "5",]}>
                        <AccordionItem key="1" aria-label="Intro" id="Intro"
                            startContent={
                                <p className="text-[32px] font-bold">Introdução</p>
                            }>
                            <p className="text-text">
                                Sou um apaixonado desenvolvedor de software autodidata (e ex-dono de restaurante e chef)
                                em busca de um novo desafio. Sou especialista em desenvolvimento front-end e backend
                                sem servidor usando Typescript, React.js e Node.js. Como defensor do desempenho e
                                acessibilidade da web e evangelista do JAM Stack e da pilha T3 mais recente , crio aplicativos
                                da web incríveis para tornar a Internet um lugar melhor. Adoro encontrar problemas difíceis
                                de resolver e abordá-los com paciência, determinação e perseverança implacável.
                            </p>
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Experiencia" id="Experiencia" 
                            startContent={
                                <p className="text-[32px] font-bold">Experiencia</p>
                            }>
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
                        <AccordionItem key="3" aria-label="Educacao" id="Educacao"
                            startContent={
                                <p className="text-[32px] font-bold">Educação</p>
                            }>
                            Teste Acordionnnnn
                        </AccordionItem>
                        <AccordionItem key="4" aria-label="Certificacoes" id="Certificacoes"
                            startContent={
                                <p className="text-[32px] font-bold">Certificações</p>
                            }>
                            Teste Acordionnnnn
                        </AccordionItem>
                        <AccordionItem key="5" aria-label="Interesses" id="Interesses"
                            startContent={
                                <p className="text-[32px] font-bold">Interesses</p>
                            }>
                            Teste Acordionnnnn
                        </AccordionItem>
                    </Accordion>
                    <div className="hidden md:flex flex-col sticky top-20 h-[calc(100vh-30rem)]">
                        <div className="pt-8">
                            <img src="aventureiro.jpeg" alt="foto-cv" className=" object-cover max-w-[160px] max-h-[170px] rounded-md" />
                        </div>
                        <div className=" flex flex-col py-5 gap-2">
                            <CustomLink href="#Intro">Introdução</CustomLink>
                            <CustomLink href="#Experiencia">Experiencia</CustomLink>
                            <CustomLink href="#Educacao">Educação</CustomLink>
                            <CustomLink href="#Certificacoes">Certificações</CustomLink>
                            <CustomLink href="#Interesses">Interesses</CustomLink>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-3 pt-[5rem]">
                                <MailIcon />
                                <GithubIcon />
                                <LinkedinIcon />
                            </div>
                            <span className="text-text text-[14px]">Joinville, Santa Catarina</span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative pt-[5rem]">
                <Footer />
            </div>
        </main>
    )
}

function GithubIcon() {
    return (
        <Link
            className="icon-button text-text hover:text-blue "
            href='https://github.com/yurikaffer'
            referrerPolicy="no-referrer"
            target="_blank"
            rel="noreferrer"
        >
            <BsGithub className="w-5 h-5" />
        </Link>
    )
}

function LinkedinIcon() {
    return (
        <Link
            className="icon-button  hover:text-blue text-text"
            href='https://www.linkedin.com/in/yuri-k-a97755133/'
            referrerPolicy="no-referrer"
            target="_blank"
            rel="noreferrer"
        >
            <FaLinkedin className="w-5 h-5" />
        </Link>
    )
}

function MailIcon() {
    return (
        <Link
            className="icon-button  hover:text-blue text-text"
            href='mailto:yurikaffer@gmail.com'
            referrerPolicy="no-referrer"
            target="_blank"
            rel="noreferrer"
        >
            <IoMdMail className="w-5 h-5" />
        </Link>
    )
}

interface TimelineItemProps {
    jobTitle: string;
    company: string;
    location: string;
    duration: string;
    items: string[];
}

function TimelineItem({ jobTitle, company, location, duration, items }: TimelineItemProps) {
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

function CustomLink({ children, href }: { children: ReactNode, href: string }) {
    return (
        <Link className="transition-colors duration-1000 ease-in-out text-text font-medium hover:text-blue" href={href}>
            {children}
        </Link>
    );
}