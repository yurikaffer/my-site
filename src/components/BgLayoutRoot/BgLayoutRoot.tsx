import React, { ReactNode } from 'react';
import './BgLayoutRoot.css'

interface BgLayoutRootProps {
    children: ReactNode;
}
const BgLayoutRoot: React.FC<BgLayoutRootProps> = ({children}) => {
    return (
        <main>
            <div className="relative flex flex-col h-[100vh] bg-white dark:bg-black transition-bg">
                {children}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="jumbo absolute -inset-[10px] opacity-50"></div>
                </div>
            </div>
        </main>
    )
}

export default BgLayoutRoot