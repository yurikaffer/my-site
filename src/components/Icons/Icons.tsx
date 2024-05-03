import { Tooltip } from "@nextui-org/react";
import Link from "next/link"
import { BsGithub } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io"

interface IconProps {
    w: string;
    h: string;
}

export function GithubIcon({ w, h }: IconProps) {
    return (
        <Tooltip content="GitHub">
            <Link
                aria-label="GitHub"
                className="icon-button text-text hover:text-blue "
                href='https://github.com/yurikaffer'
                referrerPolicy="no-referrer"
                target="_blank"
                rel="noreferrer"
            >
                <BsGithub className={`w-${w} h-${h}`} />
            </Link>
        </Tooltip>

    )
}

export function LinkedinIcon({ w, h }: IconProps) {
    return (
        <Tooltip content="Linkedin">
            <Link
                aria-label="Linkedin"
                className="icon-button  hover:text-blue text-text"
                href='https://www.linkedin.com/in/yuri-k-a97755133/'
                referrerPolicy="no-referrer"
                target="_blank"
                rel="noreferrer"
            >
                <FaLinkedin className={`w-${w} h-${h}`} />
            </Link>
        </Tooltip>
    )
}

export function MailIcon({ w, h }: IconProps) {
    return (
        <Tooltip content="yurikaffer@gmail.com">
            <Link
                aria-label="Email"
                className="icon-button  hover:text-blue text-text"
                href='mailto:yurikaffer@gmail.com'
                referrerPolicy="no-referrer"
                target="_blank"
                rel="noreferrer"
            >
                <IoMdMail className={`w-${w} h-${h}`} />
            </Link>
        </Tooltip>
    )
}

export function WhatsIcon({ w, h }: IconProps) {
    return (
        <Tooltip content="47 99617-1843">
            <Link
                aria-label="Whatsapp"
                className="icon-button  hover:text-blue text-text"
                href='https://api.whatsapp.com/send?phone=5547996171843&text=Ol%C3%A1%20Yuri!%20tudo%20bem%3F%0A%0AVim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio.'
                referrerPolicy="no-referrer"
                target="_blank"
                rel="noreferrer"
            >
                <IoLogoWhatsapp className={`w-${w} h-${h}`} />
            </Link>
        </Tooltip>
    )
}