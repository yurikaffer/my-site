import ThemeSwitcherCheckBox from "@/components/ThemeSwitcher/CheckBox/ThemeSwitcherCheckBox";
import { Button } from "@nextui-org/react";
import { FcLike } from "react-icons/fc";
import { TiStarFullOutline } from "react-icons/ti";

export default function ButtonsExemple() {
    return (
        <div className="animate-appearance-in flex px-[1rem] gap-2 items-center pt-2 justify-start xl:pl-[3rem] xl:px-0">
            <Button className="rounded-full h-8 bg-bg border-border z-10" variant="faded">
                <FcLike className="w-full h-4" />
                <p className="text-xsm">Like</p>
            </Button>
            <Button isIconOnly className="rounded-full z-10 min-w-0 min-h-0 w-8 h-8 border-border hover:bg-[#DD9520] dark:hover:bg-[#DD9520] hover:text-[#f0f0f3] dark:hover:text-[#27272A] bg-bg" color="warning" variant="faded">
                <TiStarFullOutline className="w-full h-4" />
            </Button>
            <ThemeSwitcherCheckBox />
        </div>
    )
}