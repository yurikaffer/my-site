'use client'
import React, { ReactNode } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import ThemeSwitcherButton from "./ThemeSwitcher/ButtonSwitcher/ThemeSwitcherButton";
import { BsGithub } from "react-icons/bs";

function CustomLink({ children, href }: { children: ReactNode, href: string }) {
  return (
    <Link className="transition-colors duration-1000 ease-in-out text-text font-semibold hover:text-blue" href={href}>
      {children}
    </Link>
  );
}


export default function NavbarComponent() {

  return (
    <Navbar isBordered maxWidth={'full'} className="fixed bg-transparent backdrop-filter backdrop-blur-2xl py-2" >
      <div className="flex justify-center w-full">
        <div className="flex justify-between w-[80rem]">
        <NavbarBrand className="w-full ">
          <Link color="foreground" href="/">
            <p className="gradient-text font-extrabold text-[18px]">{'<YK />'}</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-16" justify="center">
          <NavbarItem>
            <CustomLink href="/about">Sobre</CustomLink>
          </NavbarItem>
          <NavbarItem>
            <CustomLink href="/projects">Projetos</CustomLink>
          </NavbarItem>
          <NavbarItem>
            <CustomLink href="/resume">Resumo</CustomLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex text-text hover:text-blue">
            <ThemeSwitcherButton />
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Link
              className="icon-button text-text hover:text-blue "
              href='https://github.com/yurikaffer'
              referrerPolicy="no-referrer"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="w-5 h-5"/>
            </Link>
          </NavbarItem>
        </NavbarContent>
        </div>
      </div>
    </Navbar>
  );
}