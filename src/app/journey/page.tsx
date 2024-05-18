'use client'
import Footer from "@/components/Layout/Footer";
import { Accordion, AccordionItem, Divider, ScrollShadow } from "@nextui-org/react";
import React, { useRef } from "react";
import { useIsLargeScreen } from "@/utils/Utils";
import { certificateItems, educationItems, expItems, skillItems } from "./cv-data";
import Panel from "@/components/Panel/Panel";

export default function Resume() {
    const [expandedKeys, setExpandedKeys] = React.useState<string[]>(['1', '2', '3', '4', '5', '6']);
    const scrollRef = useRef<HTMLDivElement>(null);
    const isLargeScreen = useIsLargeScreen(768);

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

    return (
        <main>
            <section className="flex pt-[5rem] md:pt-[8rem] w-full px-2 md:px-5 justify-center">
                <div className="flex w-full max-w-[80rem] gap-10 justify-between">
                    <ScrollShadow ref={scrollRef} size={40} className="pr-2 w-full max-h-[78vh] lg:max-h-[80vh] xl:overflow-y-hidden xl:hover:overflow-y-auto scrollbar-thin dark:scrollbar-thumb-gray-800 scrollbar-thumb-gray-300 scrollbar-track-transparent scroll-smooth">
                        <Accordion selectionMode="multiple"
                            selectedKeys={expandedKeys}
                        >
                            <AccordionItem
                                key="1" 
                                aria-label="Intro" 
                                id="Intro" 
                                onPress={() => handleKeysController('1')}
                                startContent={<ItemName name="Introdução" />}
                            >
                                <p className="text-text">
                                    Sou um desenvolvedor de software autodidata, apaixonado por tecnologia e em busca de
                                    um novo desafio. Me considero um desenvolvedor em transição, me
                                    especializando no desenvolvimento front-end e back-end utilizando Typescript,
                                    React.js e Node.js. Ao longo dos anos como desenvolvedor, tive a oportunidade de
                                    trabalhar no desenvolvimento de sistemas integrados e em soluções como ERP, CRM,
                                    BPM, WMS, GED e Chatbots.
                                </p>
                            </AccordionItem>
                            <AccordionItem 
                                key="2" 
                                aria-label="Experiencia" 
                                id="Experiencia" 
                                onPress={() => handleKeysController('2')}
                                startContent={<ItemName name="Experiência" />}
                            >
                                {expItems.map((item, index) => (
                                    <TimelineItem
                                        jobTitle={item.jobTitle}
                                        company={item.company}
                                        location={item.location}
                                        duration={item.duration}
                                        items={item.items}
                                        key={index}
                                    />
                                ))}
                            </AccordionItem>
                            <AccordionItem 
                                key="3" 
                                aria-label="Competencias" 
                                id="Competencias" 
                                onPress={() => handleKeysController('3')}
                                startContent={<ItemName name="Competências" />}
                            >
                                <div className="flex flex-col gap-4">
                                    {skillItems.map((item, index) => (
                                        <SkillItem
                                            title={item.title}
                                            skills={item.skills}
                                            key={index}
                                        />
                                    ))}
                                </div>
                            </AccordionItem>
                            <AccordionItem 
                                key="4" 
                                aria-label="Educacao" 
                                id="Educacao" 
                                onPress={() => handleKeysController('4')}
                                startContent={<ItemName name="Educação" />}
                            >
                                <div>
                                    {educationItems.map((item, index) => (
                                        <TimelineItem
                                            jobTitle={item.jobTitle}
                                            company={item.company}
                                            location={item.location}
                                            key={index}
                                        />
                                    ))}
                                </div>
                            </AccordionItem>
                            <AccordionItem 
                                key="5" 
                                aria-label="Certificacoes" 
                                id="Certificacoes" 
                                onPress={() => handleKeysController('5')}
                                startContent={<ItemName name="Certificações" />}
                            >
                                <div>
                                    {certificateItems.map((item, index) => (
                                        <CertificateItem
                                            name={item.name}
                                            institution={item.institution}
                                            key={index}
                                        />
                                    ))}
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </ScrollShadow>
                    <Panel setExpandedKeys={setExpandedKeys} isLargeScreen={isLargeScreen}/>
                    <BgShadow />
                </div>
            </section>
            {!isLargeScreen && <Footer />}
        </main>
    )
}

function ItemName({ name }: { name: string }) {
    return (<p className="text-[28px] md:text-[32px] font-bold">{name}</p> )
}

function BgShadow() {
    return (
        <div className="hidden xl:flex absolute h-[50rem] -top-[10rem] left-[60rem] opacity-30 dark:opacity-30 z-[-10] ">
            <img src="blue-purple-1.svg" ></img>
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