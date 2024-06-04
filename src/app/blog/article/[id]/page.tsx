'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './markdown.css'
import { Tag } from '@/components/Carousel/CardCarousel';
import { Avatar } from '@nextui-org/react';
import Link from 'next/link';
import Footer from '@/components/Layout/Footer';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

interface articleProps {
    author: string;
    subtitle: string;
    title: string;
    content: string;
    categories: string[];
    date: string;
    time_read: string;
}

export default function ArticlePage() {
    const [article, setArticle] = useState<articleProps>();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchArticle() {
            try {
                const response = await fetch(`/api/article/${id}`);
                if (!response.ok) {
                    throw new Error('Falha ao buscar artigo');
                }
                const article = await response.json();
                setArticle(article);
            } catch (error) {
                console.error('Erro ao buscar artigo:', error);
            } finally {
                setIsLoading(false)
            }
        }
        fetchArticle();
    }, [id]);


    return (
        <div className='w-full pt-[8rem] px-[1rem]'>
            <div className='max-w-[80rem] mx-auto'>
                <RenderArticle article={article} isLoading={isLoading} />
            </div>
            <Footer />
        </div>
    );
}

const RenderArticle = ({ article, isLoading }: { article: articleProps | undefined, isLoading: boolean }) => {
    if (!isLoading && article) {
        const formattedContent = article?.content.replace(/\\n/g, '  \n');

        return (
            <div>
                <HeaderArticle article={article} />
                <div className=" markdown-body ">
                    {formattedContent && <Markdown remarkPlugins={[remarkGfm]}>{formattedContent}</Markdown>}
                </div>
                <div className='flex pt-[3rem] justify-between'>
                    <Link href={'/blog'} className='gradient-text font-bold text-[18px]' > {'<- Blog'} </Link>
                    <ButtonUpPage />
                </div>
            </div>
        )
    }
    return (<SkeletonArticle />)
}

const ButtonUpPage = () => {
    function pageUp() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <button onClick={() => pageUp()} className='w-10 h-10 rounded-full bg-gray-200 dark:bg-bg  duration-custom hover:scale-125'>
            <MdKeyboardDoubleArrowUp className='m-auto w-6 h-6' />
        </button>
    )
}

const HeaderArticle = ({ article }: { article: articleProps }) => (
    <header className='relative'>
        <p className="text-blue text-[16px] font-bold">Artigo</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-none tracking-tight" >{article.title}</h1>
        <div className="flex gap-2 py-4">
            {article.categories.map((categorie, index) => (<Tag key={index} name={categorie} />))}
        </div>
        <h2 className="text-[18px] font-normal italic text-text" >{article.subtitle}</h2>
        <div className='flex text-text  gap-2 sm:gap-3 py-6 items-center text-[14px] sm:text-[16px] overflow-x-auto sm:overflow-hidden text-nowrap'>
            <Link href={'https://www.linkedin.com/in/yurikaffer/'} className='flex items-center gap-2 dark:hover:text-white hover:text-black hover:underline'>
                <Avatar src="/user.jpeg" size="sm" />
                <p>{article.author} </p>
            </Link>
            <Divisor />
            <p>{article.date}</p>
            <Divisor />
            <p>Leitura: {article.time_read}</p>
        </div>
    </header>
)

const Divisor = () => (
    <p className='text-[13px]'> • </p>
)

const SkeletonArticle = () => (
    <div className="animate-pulse flex flex-col gap-3 bg-transparent">
        <div className="h-[20px] bg-gray-300 dark:bg-gray-600 rounded-md w-[50px]"></div>
        <div className="h-[50px] bg-gray-300 dark:bg-gray-600 rounded-md w-5/5"></div>
        <div className="h-[50px] bg-gray-300 dark:bg-gray-600 rounded-md w-3/5"></div>
        <div className='flex gap-2'>
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-md w-[80px]"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-md w-[80px]"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-md w-[80px]"></div>
        </div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-5/5"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-5/5"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-3/5"></div>
        <div className='flex gap-2 items-center pt-2 pb-7'>
            <div className="h-8 rounded-full bg-gray-300 dark:bg-gray-600 w-8"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-[80px]"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-[80px]"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-[80px]"></div>
        </div>
        <div className="h-[70vh]  bg-gray-300 dark:bg-gray-600 rounded-md w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-5/5"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-5/5"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-3/5"></div>
    </div>
)