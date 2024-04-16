import './ButtonRGB.css'
import React from 'react';

interface ButtonRGBProps {
  name: string;
}

const ButtonRGB: React.FC<ButtonRGBProps> = ({name}) => {
    return (
        <button className="gradient-shadow bg-[#1E293B] border-[#424E61] text-[#A4ADB9]">
            {name}
        </button>
    )
}

export default ButtonRGB