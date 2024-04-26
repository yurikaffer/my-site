import { Tooltip } from "@nextui-org/react";
import Link from "next/link"
import { BsGithub } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

interface IconProps {
    w: string;
    h: string;
}

export function GithubIcon({w, h}: IconProps) {
    return (
        <Tooltip content="GitHub">
            <Link
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

export function LinkedinIcon({w, h}: IconProps) {
    return (
        <Tooltip content="Linkedin">
            <Link
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

export function MailIcon({w, h}: IconProps) {
    return (
        <Tooltip content="yurikaffer@gmail.com">
            <Link
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