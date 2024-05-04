import Link from "next/link";
import { ReactNode } from "react";
import { GithubIcon, LinkedinIcon, MailIcon, WhatsIcon } from "../Icons/Icons";

interface PanelProps {
    setExpandedKeys: React.Dispatch<React.SetStateAction<string[]>>
    isLargeScreen: boolean
}

export default function Panel({ setExpandedKeys, isLargeScreen}: PanelProps) {
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