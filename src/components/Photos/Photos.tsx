import { memo, useCallback, useState } from "react";

export default function Photos() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [hidden, setHidden] = useState<boolean[]>([false, false, false, false]);
    const [entranceAnimation, setEntranceAnimation] = useState<boolean[]>([false, false, false, false]);
    const [clickable, setClickable] = useState<boolean>(true);

    const imageUrls = ['foto-exemplo.webp', 'foto-exemplo.webp', 'foto-exemplo.webp', 'foto-exemplo.webp'];

    const handlePhotoClick = useCallback((index: number) => {
        if (!clickable) return;
        setClickable(false);

        setActiveIndex(index);
        setTimeout(() => {
            const newHidden = [...hidden];
            newHidden[index] = true;
            setHidden(newHidden);
            setActiveIndex(null);

            if (newHidden.every(h => h)) {
                setHidden([false, false, false, false]);
                setEntranceAnimation(new Array(4).fill(true));
                setTimeout(() => setEntranceAnimation(new Array(4).fill(false)), 600);
            }

            setClickable(true);
        }, 600);
    }, [clickable, hidden]);

    return (
        <div className="relative flex w-full h-[20rem] py-[10rem] justify-center items-center ">
            {hidden.map((isHidden, index) => (
                <Photo
                    key={index}
                    index={index}
                    isHidden={isHidden}
                    entranceActive={entranceAnimation[index]}
                    active={index === activeIndex}
                    handleClick={handlePhotoClick}
                    imageUrl={imageUrls[index]}
                />
            ))}
        </div>
    );
}

interface PhotoProps {
    index: number;
    isHidden: boolean;
    entranceActive: boolean;
    active: boolean;
    handleClick: (index: number) => void;
    imageUrl: string;
}

const Photo = memo<PhotoProps>(({ index, isHidden, entranceActive, active, handleClick, imageUrl }) => {
    const [isHovering, setIsHovering] = useState(false);

    const allowedRotations = [2, 3, 6, 12];
    const rotationIndex = index % allowedRotations.length;
    const rotationDegree = allowedRotations[rotationIndex];
    const rotationDirection = index % 2 === 0 ? '-' : '';

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    return (
        <div onClick={() => handleClick(index)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${active ? 'animate-slide' : ''} ${isHidden ? 'hidden' : ''} 
                       ${entranceActive ? 'animate-entrance' : ''} absolute mx-[2rem]
                       transition duration-300 ease-in-out border-2 cursor-pointer border-[#8999b3] dark:border-[#1c2636]
                       bg-[#0F172A] rounded-[15px] shadow-large  z-${40 - index * 10}`}
            style={{
                transform: `rotate(${isHovering ? '0' : `${rotationDirection}${rotationDegree}`}deg)`
            }}>
            <img src={imageUrl} alt={`Foto ${index}`} className="object-cover w-[100vw] sm:w-[30rem]  max-h-[25rem] rounded-[15px]" />
        </div>
    );
});