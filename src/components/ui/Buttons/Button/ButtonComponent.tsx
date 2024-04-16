import './ButtonComponent.css'
import React from 'react';

interface ButtonComponentProps {
  name: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({name}) => {
    return (
        <button className="button-style bg-bg border-border text-text hover:bg-[#1E293B] hover:text-white hover:border-white">
            {name}
        </button>
    )
}

export default ButtonComponent