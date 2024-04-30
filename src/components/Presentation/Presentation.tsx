import { FaNodeJs } from "react-icons/fa"
import { SiReact } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import './ButtonRGB.css'

export default function Presentation() {
    return (
        <div className="animate-appearance-in flex flex-col h-screen justify-center pt-[72px] px-[1rem] 2xl:px-0 xl:justify-normal xl:pt-0 xl:h-auto">
            <p className="text-[16px] text-blue font-semibold">Bem-vindo ao meu site.</p>
            <header className="flex">
                <h1 className="text-[38px] font-extrabold leading-none tracking-tight md:text-xl">
                    Sou <strong className="gradient-text"> Yuri Kaffer</strong>, <br />
                    Full Stack developer.
                </h1>
            </header >
            <TechnologyIcons />
            <Biography/>
            <ButtonsComponent />
        </div>
    )
}

function Biography() {
    return (
        <div className="flex flex-col gap-4 pt-1 text-text max-w-[45rem]">
            <h2 className="text-[16px] italic">
                Um mero entusiasta da tecnologia. Curioso, proativo e buscando pelo próximo desafio.
            </h2>
            <h3 className="text-[16px]">
                Profissionalmente, me considero um desenvolvedor em transição, focado em direcionar minha carreira para a
                especialização em tecnologias como Node.js, React.js e TypeScript, aprofundando meu conhecimento nessas ferramentas
                para ser capaz de desenvolver soluções modernas, performáticas e capazes de proporcionar uma experiência única.
            </h3>
        </div>
    )
}

function TechnologyIcons() {
    const icons = [
        { Icon: TbBrandNextjs, label: "Next.js" },
        { Icon: FaNodeJs, label: "Node.js" },
        { Icon: SiReact, label: "React.js" }
    ];

    return (
        <div className="flex gap-4 py-2 text-text">
            {icons.map(({ Icon, label }, index) => (
                <div key={index} className="flex items-center gap-2">
                    <Icon size="27px" />
                    <p>{label}</p>
                </div>
            ))}
        </div>
    );
}

function ButtonsComponent() {
    const style = "relative inline-block  py-[7px] px-[30px] rounded-md transition duration-custom backdrop-blur bg-bg border-2 border-border text-text hover:text-[#111] dark:hover:text-[#cfcfcf] hover:bg-opacity-90 hover:border-transparent"

    return (
        <div className="flex gap-5 pt-5">
            <button className={`gradient-shadow ${style}`}>
                Vamos Conversar
            </button>
            <button className={`gradient-shadow-reverse ${style}`}>
                Jornada
            </button>
        </div>
    )
}