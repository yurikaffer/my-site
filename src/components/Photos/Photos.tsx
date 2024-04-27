import { memo, useEffect, useState } from "react";

interface PhotosProps {
    url: string,
    rotate: string
}

const initialPhotos: PhotosProps[] = [
    { url: 'aventureiro.jpeg', rotate: '3' },
    { url: 'praiano.jpeg', rotate: '-4' },
    { url: 'amigos.jpeg', rotate: '2' },
    { url: 'familia.jpeg', rotate: '-3' },
    { url: 'mary.jpeg', rotate: '5' },
    { url: 'escola.jpeg', rotate: '-4' },
];

export default function Photos() {
    const [photos, setPhotos] = useState(initialPhotos);

    const handleRemovePhoto = (index: number) => {
        setPhotos(photos => photos.filter((_, i) => i !== index));
    };

    useEffect(() => {
        if (photos.length === 0) {
            setPhotos([...initialPhotos]);
        }
    }, [photos]);
        
    return (
        <div className="relative flex w-full h-[20rem] py-[10rem] justify-center items-center ">
            {photos.map((photo, index) => (
                <Photo
                    key={photo.url}
                    index={index}
                    imageUrl={photo.url}
                    rotate={photo.rotate}
                    handleRemove={handleRemovePhoto}
                />
            ))}
        </div>
    );
}

interface PhotoProps {
    imageUrl: string;
    rotate: string;
    index: number;
    handleRemove: (index: number) => void;
}

const Photo = memo<PhotoProps>(({ imageUrl, rotate, index, handleRemove }) => {
    const [startAnimate, setStartAnimate] = useState(false)

    const handleClick = () => {
        setStartAnimate(true);
        setTimeout(() => {
            handleRemove(index);
        }, 300);
    };

    return (
        <div onClick={() => handleClick()}
            className={`${startAnimate ? 'animate-slide' : 'animate-entrance'} absolute mx-[2rem]
                       transition duration-300 ease-in-out border-2 cursor-pointer border-[#8999b3] dark:border-[#1c2636]
                       bg-[#0F172A] rounded-[15px] shadow-large`}
            style={{
                transform: `rotate(${rotate}deg)`
            }}>
            <img src={imageUrl} alt={`Foto `} className="object-cover w-[100vw] sm:w-[30rem]  max-h-[14rem] sm:max-h-[25rem] xl:max-h-[25rem] rounded-[15px]" />
        </div>
    );
});