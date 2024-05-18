'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './markdown.css'

interface articleProps {
    author: string;
    subtitle: string;
    id: number;
    title: string;
    content: string;
    categories: number[];
}

export default function ArticlePage() {
    const [article, setArticle] = useState<articleProps>();
    const { id } = useParams();

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
            }
        }
        fetchArticle();
    }, [id]);

    const formattedContent = article?.content.replace(/\\n/g, '  \n');

    return (
        <div className='flex w-screen justify-center pt-[10rem]'>
            <div className=''>
                <h1>{article?.title}</h1>
                <h1>{article?.author}</h1>
                <p>{article?.subtitle}</p>
                <p>{article?.categories}</p>
                
                <div className="markdown-body">
                    {formattedContent && <Markdown remarkPlugins={[remarkGfm]}>{formattedContent}</Markdown>}
                </div>
            </div>
        </div>
    );
}