'use client'
import React, { ReactNode } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Tooltip, CircularProgress } from "@nextui-org/react";
import ThemeSwitcherButton from "../ThemeSwitcher/ButtonSwitcher/ThemeSwitcherButton";
import { BsGithub } from "react-icons/bs";

export default function NavbarComponent() {
  const menuItems = [
    "Sobre",
    "Projetos",
    "Resumo",
    "Blog",
  ];

  return (
    <Navbar isBordered maxWidth={'full'} className="fixed bg-transparent backdrop-filter backdrop-blur-2xl py-2 z-[1000]" >
      <div className="flex justify-center w-full">
        <div className="flex justify-between w-full max-w-[80rem]">
          <div>
            <NavbarBrand >
              <Link color="foreground" href="/">
                <p className="gradient-text font-extrabold text-[18px]">{'<YK />'}</p>
              </Link>
            </NavbarBrand>
          </div>
          <div>
            <NavbarContent className="hidden sm:flex gap-12" >
              <NavbarItem>
                <CustomLink href="#about">Sobre</CustomLink>
              </NavbarItem>
              <NavbarItem>
                <CustomLink href="#projects">Projetos</CustomLink>
              </NavbarItem>
              <NavbarItem>
                <CustomLink href="/resume">Resumo</CustomLink>
              </NavbarItem>
              <Tooltip
                content={inDevelopment()}>
                <NavbarItem className="cursor-pointer">
                  <Link isDisabled className="text-text font-semibold">
                    Blog
                  </Link>
                </NavbarItem>
              </Tooltip>
            </NavbarContent>
          </div>
          <div className="flex gap-5 ">
            <NavbarItem className="lg:flex text-text hover:text-blue ">
              <ThemeSwitcherButton />
            </NavbarItem>
            <NavbarItem className="lg:flex">
              <Link
                className="icon-button text-text hover:text-blue "
                href='https://github.com/yurikaffer'
                referrerPolicy="no-referrer"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="w-5 h-5" />
              </Link>
            </NavbarItem>
            <NavbarContent className="sm:hidden" justify="start">
              <NavbarMenuToggle />
            </NavbarContent>
          </div>
        </div>

        <NavbarMenu className="pt-5 ">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full text-text hover:text-blue"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

      </div>
    </Navbar>
  );
}

function CustomLink({ children, href }: { children: ReactNode, href: string }) {
  return (
    <Link className="transition-colors duration-1000 ease-in-out text-text font-semibold hover:text-blue" href={href}>
      {children}
    </Link>
  );
}

function inDevelopment() {
  return (
    <p className="flex gap-2 items-center">
      <svg
        className="animate-spin h-4 w-4 text-current"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          fill="currentColor"
        />
      </svg>
      Em desenvolvimento..
    </p>
  )
}