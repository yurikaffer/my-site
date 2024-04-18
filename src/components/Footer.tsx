import Link from "next/link"
import { BsGithub } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="dark:bg-[#04060c]" >
      <div className="w-full p-[2rem] flex justify-center">
        <div className="flex justify-between w-[78rem]">
          <p className="text-text">© 2024 Yuri Kaffer, Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link
              className="icon-button hover:text-blue text-text"
              href='https://github.com/yurikaffer'
              referrerPolicy="no-referrer"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="w-5 h-5"/>
            </Link>
            <Link
              className="icon-button  hover:text-blue text-text"
              href='https://github.com/yurikaffer'
              referrerPolicy="no-referrer"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="w-5 h-5"/>
            </Link>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer
