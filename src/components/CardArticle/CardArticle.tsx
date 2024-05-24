import { useRouter } from "next/navigation"
import { Tag } from "../Carousel/CardCarousel"

interface CardArticleProps {
    img: string
    title: string
    description: string
    tags: string[]
    article_id: number
}

const CardArticle: React.FC<CardArticleProps> = ({ img, title, description, tags, article_id }) => {
    const router = useRouter();

    return (
        <div 
            onClick={() => router.push(`blog/article/${article_id}`)} 
            className={`cursor-pointer animate-entrance overflow-hidden flex flex-col rounded-large transition duration-custom w-full h-full lg:hover:-translate-y-3`}
        >
            <img src={img} alt={'imagem' + title} loading="lazy" className="object-cover h-[220px] w-full rounded-large" />
            <div className="pt-4 flex flex-col gap-2 p-[1rem]">
                <h3 className="text-[24px] font-extrabold text-black opacity-75 dark:text-white dark:opacity-90 ">{title}</h3>
                <div className="flex gap-2">
                    {tags.map((tag, index) => ( <Tag key={index} name={tag} /> ))}
                </div>
                <p className="text-black opacity-75 dark:text-white dark:opacity-90 font-medium line-clamp-6">{description}</p>
            </div>
        </div>
    )
}

export default CardArticle