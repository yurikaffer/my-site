import { GithubIcon, LinkedinIcon, MailIcon } from "../ui/Icons/Icons"

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full" >
      <div className="w-full p-[1rem] md:p-[2rem] flex justify-center">
        <div className="flex flex-col gap-2 items-center md:flex-row md:justify-between w-full max-w-[80rem]">
          <p className="hidden md:flex text-text text-[13px] text-center">© 2024 Yuri Kaffer. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <MailIcon h="5" w="5"/>
            <GithubIcon h="5" w="5"/>
            <LinkedinIcon h="5" w="5"/>
          </div>
          <p className="md:hidden text-text text-[13px] text-center">© 2024 Yuri Kaffer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
