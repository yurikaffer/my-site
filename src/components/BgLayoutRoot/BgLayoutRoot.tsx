import React, { ReactNode } from 'react';
import './BgLayoutRoot.css'
import { useIsLargeScreen } from '@/utils/Utils';

interface BgLayoutRootProps {
    children: ReactNode;
}
const BgLayoutRoot: React.FC<BgLayoutRootProps> = ({children}) => {
    const isLargeScreen = useIsLargeScreen(640)
    return (
        <main>
            {isLargeScreen ? (
                <div className="relative flex flex-col h-[100vh]">
                    {children}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="jumbo absolute -inset-[10px] opacity-50"></div>
                    </div>
                </div>
            ) :
                <div className="relative h-[100vh]">
                    {children}
                </div>
            }
        </main>
    )
}

export default BgLayoutRoot