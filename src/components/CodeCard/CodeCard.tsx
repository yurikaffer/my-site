import { Divider } from "@nextui-org/react";
import { useEffect } from "react";
import { FaRegCopy } from "react-icons/fa";
import Prism from 'prismjs';

export default function CodeCard() {
    return (
        <div className="animate-appearance-in pt-[2px] w-full px-[1rem] xl:px-0 xl:max-w-[32rem]">
            <div className="border-2 border-border bg-[#0F172A] rounded-[7px] shadow-large px-2 py-1">
                <div className="flex flex-col">
                    <div className="flex justify-between items-center p-1">
                        <div className="flex gap-1 items-center">
                            <div className="bg-[#334155] w-3 h-3 rounded-full transition duration-custom hover:bg-red-500 hover:cursor-pointer " />
                            <div className="bg-[#334155] w-3 h-3 rounded-full transition duration-custom hover:bg-yellow-500 hover:cursor-pointer " />
                            <div className="bg-[#334155] w-3 h-3 rounded-full transition duration-custom hover:bg-green-500 hover:cursor-pointer " />
                        </div>
                        <p className="text-xsm text-[#526175] font-medium">/index.tsx</p>
                        <FaRegCopy className="cursor-pointer text-[#334155] transition duration-custom hover:text-[#78889e]" />
                    </div>
                    <Divider orientation="horizontal" className="mt-1 bg-[#202835] " />
                </div>
                <CodeBlock />
            </div>
        </div>
    )
}

const CodeBlock = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const htmlCode =
        `
      <>
        <h1>Bem vindo ao meu site!</h1>
        <p>
            Aqui você pode <em>{uses}</em>
        </p>
      </>`

    const jsCode =
        `import { FC } from "react";
  
  type WelcomeProps = {
      uses:
      | "me conhecer um pouquinho melhor"
      | "explorar meus projetos"
      | "encontrar o dev que está procurando"
      | "entrar em contato comigo <3";
    };
  
  const Welcome: React.FC<WelcomeProps> = ({ uses }) => {
    return (`


    const endCode =
        `
    )
  }
  
  export default Welcome`

    return (
        <pre className="custom-pre custom-scroll text-[11px] xl:text-[14px]">
            <code className="custom-code language-javascript">{jsCode}</code>
            <code className="custom-code language-html">{htmlCode}</code>
            <code className="custom-code language-javascript">{endCode}</code>
        </pre>
    );
};