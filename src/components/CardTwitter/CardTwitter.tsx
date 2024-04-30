import { Button, Card, CardBody, CardFooter, CardHeader, User } from "@nextui-org/react";
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function CardTwitter() {
    const isLargeScreen = useIsLargeScreen();
    if (!isLargeScreen) return null;

    return (
        <div className="absolute z-50 flex rounded-[7px] right-[38%] top-[69%] 2xl:top-[69%] 2xl:right-[42%] shadow-custom animate-float">
            <Card className="border-2 border-border rounded-[7px] max-w-[24rem] bg-bg bg-opacity-80 backdrop-blur animate-appearance-in">
                <CardHeader className="flex justify-between">
                    <UserCard />
                    <Button variant="solid" className="rounded-full h-7 bg-[#057BB9] ">
                        <CustomLink content="Follow" style="text-white text-[15px]" />
                    </Button>
                </CardHeader>
                <CustomCardBody/>
                <CustomCardFooter/>
            </Card>
        </div>
    );
}

function CustomCardBody() {
    return (
        <CardBody className="text-text text-[14px]">
            <p> Certamente este não é o Twitter. 🙃 </p>
            <p>
                Mas você pode se conectar comigo através do Linkedin clicando em algum lugar deste card.
            </p>
        </CardBody>
    )
}

function CustomCardFooter() {
    return (
        <CardFooter className="flex gap-4 text-[14px] text-text">
            <div className="flex gap-2">
                <p className="font-semibold">210</p>
                <p>Following</p>
            </div>
            <div className="flex gap-2">
                <p className="font-semibold">51</p>
                <p>Followers</p>
            </div>
        </CardFooter>
    )
}

function UserCard() {
    return (
        <User className="font-semibold"
            name="Yuri Kaffer"
            description={( <CustomLink content="@yuri_kaffer" style="text-text font-normal" />)}
            avatarProps={{
                src: "https://avatars.githubusercontent.com/u/303714325?v=4",
                className: "border-2 border-border"
            }}
        />
    )
}

function CustomLink({style, content}: {style: string, content: string}) {
    return (
        <Link 
            className={style}
            href='https://www.linkedin.com/in/yuri-k-a97755133/'
            referrerPolicy="no-referrer"
            target="_blank"
            rel="noreferrer" 
          >
            {content}
          </Link>
    )
}

function useIsLargeScreen() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1280);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        // Limpeza do listener
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return isLargeScreen;
}