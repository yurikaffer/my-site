import './ButtonComponent.css'
import React from 'react';

interface ButtonComponentProps {
  name: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({name}) => {
    return (
        <button className="button-style z-10 bg-bg transition duration-custom border-2 border-border text-text hover:bg-[#1E293B] dark:hover:text-[#1E293B] dark:hover:bg-[#ececec] hover:text-white hover:border-transparent">
            {name}
        </button>
    )
}

export default ButtonComponent