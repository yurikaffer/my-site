import { Tooltip } from "@nextui-org/react";
import { memo, useEffect, useState } from "react";
import { GiClick } from "react-icons/gi";
import { HiCursorClick } from "react-icons/hi";
import { PiCursorClickFill } from "react-icons/pi";
import { TbClick, TbHandClick } from "react-icons/tb";

interface PhotosProps {
    url: string,
    rotate: string,
    alt: string,
    tooltip: string
}

const initialPhotos: PhotosProps[] = [
    { url: '/fogueira.jpeg', rotate: '-2', alt: 'foto da fogueira', tooltip: 'A vida sem ser compartilhada com pessoas incríveis não faria sentido. <3' },
    { url: '/camping.jpeg', rotate: '6', alt: 'foto do camping', tooltip: 'Final de semana de camping com os amigos. 🏕️' },
    { url: '/praia.jpeg', rotate: '-2', alt: 'foto andando na praia', tooltip: 'Uma visita ao sul da ilha. 🏝️' },
    { url: '/aventureiro.jpeg', rotate: '3', alt: 'foto na mata', tooltip: 'Dia de pescaria no Paraná. 🎣' },
    { url: '/praiano.jpeg', rotate: '-4', alt: 'foto na praia', tooltip: 'Essa foto está digna de férias em Cancún, mas era Guaratuba. 🏖' },
    { url: '/amigos.webp', rotate: '2', alt: 'foto dos amigos', tooltip: 'Sushi night com os de verdade. 🍣🥢' },
    { url: '/familia.webp', rotate: '-3', alt: 'foto em familia', tooltip: 'Road trip em família. 🌅' },
    { url: '/mary.jpeg', rotate: '5', alt: 'foto no computador', tooltip: 'Mestre Jedi e a jovem padawan em seu habitat natural.' },
    { url: '/escola.jpeg', rotate: '-4', alt: 'foto antiga na escola', tooltip: '' }, //Clique nas fotos e conheça um pouco da minha história. 🤗
];

export default function Photos() {
    const [photos, setPhotos] = useState(initialPhotos);
    const [lastIndex, setLastIndex] = useState(initialPhotos.length - 1);
    const [startAnimate, setStartAnimate] = useState(true)

    const handleRemovePhoto = (index: number) => {
        setPhotos(photos => photos.filter((_, i) => i !== index));
        setStartAnimate(false)
    };

    useEffect(() => {
        if (photos.length === 0) {
            setPhotos([...initialPhotos]);
            setStartAnimate(true)
        }
        setLastIndex(photos.length - 1)
    }, [photos]);

    return (
        <div className="relative flex h-[25rem] w-full items-end pb-[3rem] mb:h-[35rem] sm:h-[35rem] sm:pb-2 xl:items-center">
            {photos.map((photo, index) => (
                <Photo
                    key={photo.url}
                    index={index}
                    imageUrl={photo.url}
                    rotate={photo.rotate}
                    handleRemove={handleRemovePhoto}
                    alt={photo.alt}
                    tooltip={photo.tooltip}
                    lastIndex={lastIndex}
                />
            ))}

            <Tooltip content='Clique nas fotos 🤗' placement={'bottom'} className='relative bg-white text-black border-2 border-border'>
                <div style={{zIndex: 200}} className={`absolute bottom-16 right-2 lg:bottom-28 lg:right-10 w-[3rem] h-[3rem] ${startAnimate ?  'animate-bounce' : 'animate-slide'} cursor-pointer`}>
                    <HiCursorClick className="relative w-full h-full text-[#3587F3] "/>
                </div>
            </Tooltip>

        </div>
    );
}

interface PhotoProps {
    imageUrl: string;
    rotate: string;
    index: number;
    alt: string;
    tooltip: string;
    lastIndex: number;
    handleRemove: (index: number) => void;
}

const Photo = memo<PhotoProps>(({ imageUrl, rotate, index, handleRemove, alt, tooltip, lastIndex }) => {
    const [startAnimate, setStartAnimate] = useState(false)

    const handleClick = () => {
        setStartAnimate(true);
        setTimeout(() => {
            handleRemove(index);
        }, 300);
    };

    return (
        <div onClick={() => handleClick()}
            className={`${startAnimate ? 'animate-slide' : 'animate-entrance'} 
                        absolute transition duration-300 ease-in-out mt-auto
                        border-2 cursor-pointer border-border rounded-[15px] shadow-medium`}
            style={{transform: `rotate(${rotate}deg)`}}
        >
            <Tooltip style={{ zIndex: 100 }} isOpen={(lastIndex === index) && Boolean(tooltip)} content={tooltip} placement={'bottom'} offset={-20} className="relative bg-white text-black border-2 border-border">
                <img
                    src={imageUrl}
                    alt={alt}
                    className="relative object-cover rounded-[15px] w-[100vw] sm:w-[35rem] sm:max-h-[30rem]"
                    loading="eager"
                />
            </Tooltip>
            
        </div>
    );
});