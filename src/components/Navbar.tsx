'use client'
import React, { ReactNode } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import ThemeSwitcherCheckBox from "./ThemeSwitcher/CheckBox/ThemeSwitcherCheckBox";
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
    <Navbar shouldHideOnScroll className="shadow-sm dark:shadow-large bg-transparent backdrop-filter backdrop-blur-2xl py-1" >

      <NavbarBrand className="w-full ">
        <Link color="foreground" href="/">
          <p className="font-bold text-inherit">YURI</p>
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
            <BsGithub />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}