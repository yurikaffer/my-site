'use client'
import CardArticle from "@/components/CardArticle/CardArticle";
import { useCallback, useEffect, useState } from "react";
import { fetchAllArticles, fetchAllCategories, fetchArticlesByCategory, fetchArticlesBySearch } from "../services/apiService";
import SearchInput from "@/components/SearchInput/SearchInput";
import Footer from "@/components/Layout/Footer";

export interface ArticleResumeProps {
    title: string
    intro: string
    categories: string[]
    img: string
    article_id: number
}

interface Category {
    name: string
}

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [articles, setArticles] = useState<ArticleResumeProps[]>();
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoadingArticle, setIsLoadingArticle] = useState(true);
    const [isLoadingCategory, setIsLoadingCategory] = useState(true);

    const loadAllArticles = useCallback(async () => {
        try {
            const articlesData = await fetchAllArticles();
            setArticles(articlesData);
        } catch (error) {
            console.error('Erro ao carregar artigos:', error);
        } finally {
            setIsLoadingArticle(false)
        }
    }, []);

    const loadArticlesBySearch = useCallback(async (value: string) => {
        try {
            const articlesData = await fetchArticlesBySearch(value);
            setArticles(articlesData);
        } catch (error) {
            console.error('Erro ao carregar artigos:', error);
        }
    }, []);

    useEffect(() => {
        const loadCategories = async () => {
            setIsLoadingCategory(true)
            try {
                const categoriesData = await fetchAllCategories();
                setCategories(categoriesData);
            } catch (error) {
                console.error('Erro ao carregar categorias:', error);
            } finally {
                setIsLoadingCategory(false)
            }
        };

        loadCategories();
        loadAllArticles();
    }, [loadAllArticles]);

    const handleSelectCategory = useCallback(async (category: string) => {
        setSelectedCategory(category);
        if (category === 'Todos') {
            loadAllArticles();
        } else {
            try {
                const articlesData = await fetchArticlesByCategory(category);
                setArticles(articlesData);
            } catch (error) {
                console.error('Erro ao carregar artigos por categoria:', error);
            }
        }
    }, [loadAllArticles]);

    const handleActiveButton = (categoryName: string) => (
        categoryName === selectedCategory ? 'text-active-tag' : 'text-[#696969] dark:text-text'
    );

    return (
        <div className="w-full flex flex-col justify-center items-center px-[1rem]">
            <div className="flex flex-col full w-full max-w-[80rem] pt-[8rem] gap-4 ">
                <HeaderBlog />
                <Categories categories={categories} handleSelectCategory={handleSelectCategory} handleActiveButton={handleActiveButton} isLoading={isLoadingCategory} />
                <SearchInput loadAllArticles={loadAllArticles} loadArticlesBySearch={loadArticlesBySearch} />
                <ArticlesGrid articles={articles} isLoading={isLoadingArticle} />
                <Footer />
            </div>
        </div>
    );
}

interface ArticlesGridProps {
    articles?: ArticleResumeProps[];
    isLoading: boolean;
}

const ArticlesGrid = ({ articles, isLoading }: ArticlesGridProps) => (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>
        {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
                <SkeletonArticle key={index} />
            ))
        ) : articles && articles.length !== 0 ? (
            articles.map(article => (
                <CardArticle
                    key={article.article_id}
                    img={article.img}
                    title={article.title}
                    description={article.intro}
                    tags={article.categories}
                    article_id={article.article_id}
                />
            ))
        ) : (
            <div className="flex w-full justify-center col-span-full">Nenhum artigo encontrado...</div>
        )}
    </div>
);

const SkeletonArticle = () => (
    <div className="animate-pulse flex flex-col gap-4 bg-transparent">
        <div className="h-[220px] w-full bg-gray-300 dark:bg-gray-600 rounded-large"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-md w-4/5"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-3/5"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-3/5"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-3/5"></div>
    </div>
);

interface CategoriesProps {
    categories: Category[];
    handleSelectCategory: (category: string) => void;
    handleActiveButton: (categoryName: string) => string;
    isLoading: boolean
}

const Categories = ({ categories, handleSelectCategory, handleActiveButton, isLoading }: CategoriesProps) => (
    <div className="flex gap-2 overflow-scroll sm:overflow-hidden pb-2">
        {isLoading ? (
            Array.from({ length: 5 }).map((_, index) => (
                <SkeletonCategories key={index} />
            ))
        ) :
            categories && (categories.map((category, index) => (
                <button
                    key={index}
                    className={`rounded-full border-1 transition duration-custom border-border bg-[#F4F6F8] dark:bg-bg px-4 py-[2px] text-xsm font-semibold ${handleActiveButton(category.name)} hover:text-active-tag dark:hover:text-active-tag`}
                    onClick={() => handleSelectCategory(category.name)}
                >
                    {category.name}
                </button>
            )))}
    </div>
)

const SkeletonCategories = () => (
    <div className="animate-pulse h-[26px] w-[5rem] bg-gray-300 dark:bg-gray-600 rounded-full"></div>
);

const HeaderBlog = () => (
    <header>
        <p className="text-blue text-[16px] font-bold">Blog</p>
        <h1 className="text-[38px] lg:text-xl font-extrabold leading-none tracking-tight" >Artigos</h1>
    </header>
)