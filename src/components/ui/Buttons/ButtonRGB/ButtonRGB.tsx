import './ButtonRGB.css'
import React from 'react';

interface ButtonRGBProps {
  name: string;
}

const ButtonRGB: React.FC<ButtonRGBProps> = ({name}) => {
    return (
        <button className="gradient-shadow z-10 transition duration-custom bg-opacity-80 backdrop-blur bg-bg border-2 border-border text-text hover:text-[#111] dark:hover:text-[#cfcfcf] hover:bg-opacity-90 hover:border-transparent ">
            {name}
        </button>
    )
}

export default ButtonRGB