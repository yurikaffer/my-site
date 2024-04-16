import React, { ReactNode } from 'react';
import './BgLayoutRoot.css'

interface BgLayoutRootProps {
    children: ReactNode;
}
const BgLayoutRoot: React.FC<BgLayoutRootProps> = ({children}) => {
    return (
        <main>
            <div className="relative flex flex-col h-screen bg-white dark:bg-[#04060c] transition-bg">
                {children}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="jumbo absolute -inset-[10px] opacity-50"></div>
                </div>
            </div>
        </main>
    )
}

export default BgLayoutRoot