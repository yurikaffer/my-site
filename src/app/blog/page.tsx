'use client'
import CardArticle from "@/components/CardArticle/CardArticle";
import { Input } from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";
import { fetchAllArticles, fetchAllCategories, fetchArticlesByCategory, fetchArticlesBySearch } from "../services/apiService";
import SearchInput from "@/components/SearchInput/SearchInput";

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

    const loadAllArticles = useCallback(async () => {
        try {
            const articlesData = await fetchAllArticles();
            setArticles(articlesData);
        } catch (error) {
            console.error('Erro ao carregar artigos:', error);
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
            try {
                const categoriesData = await fetchAllCategories();
                setCategories(categoriesData);
            } catch (error) {
                console.error('Erro ao carregar categorias:', error);
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
                <Categories categories={categories} handleSelectCategory={handleSelectCategory} handleActiveButton={handleActiveButton} />
                <SearchInput loadAllArticles={loadAllArticles} loadArticlesBySearch={loadArticlesBySearch} />
                <ArticlesGrid articles={articles} />
            </div>
        </div>
    );
}

interface ArticlesGridProps {
    articles?: ArticleResumeProps[];
}

const ArticlesGrid = ({ articles }: ArticlesGridProps) => (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>
        {articles && articles.length !== 0 ? (
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
            <div className="flex w-full justify-center">Nenhum artigo encontrado...</div>
        )}
    </div>
);

interface CategoriesProps {
    categories: Category[];
    handleSelectCategory: (category: string) => void;
    handleActiveButton: (categoryName: string) => string;
}

const Categories = ({ categories, handleSelectCategory, handleActiveButton }: CategoriesProps) => (
    <div className="flex gap-2 overflow-scroll  sm:overflow-hidden pb-2">
        {categories && (categories.map((category, index) => (
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

const HeaderBlog = () => (
    <div>
        <p className="text-blue text-[16px] font-bold">Blog</p>
        <h1 className="text-[38px] lg:text-xl font-extrabold leading-none tracking-tight" >Artigos</h1>
    </div>
)
