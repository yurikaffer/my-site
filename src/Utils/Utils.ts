import { useEffect, useState } from "react";

export function useIsLargeScreen(size: number): boolean {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= size);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        // Limpeza do listener
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return isLargeScreen;
}