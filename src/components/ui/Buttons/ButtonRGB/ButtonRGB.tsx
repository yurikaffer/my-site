import './ButtonRGB.css'
import React from 'react';

interface ButtonRGBProps {
  name: string;
}

const ButtonRGB: React.FC<ButtonRGBProps> = ({name}) => {
    return (
        <button className="gradient-shadow bg-[#0F172A] text-white">
            {name}
        </button>
    )
}

export default ButtonRGB