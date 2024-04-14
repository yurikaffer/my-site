import './ButtonComponent.css'
import React from 'react';

interface ButtonComponentProps {
  name: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({name}) => {
    return (
        <button className="button-style bg-[#0F172A] text-white">
            {name}
        </button>
    )
}

export default ButtonComponent