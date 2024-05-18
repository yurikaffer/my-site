'use client'
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface articleResumeProps {
    title: string
    intro: string
    categories: string[]
    img: string
    article_id: number
}

interface categoriesProps {
    name: string
}

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [articles, setArticles] = useState<articleResumeProps[]>();
    const [categories, setCategories] = useState<categoriesProps[]>();

    const handleSetArticles = (value: articleResumeProps[]) => {
        setArticles(value)
    }

    useEffect(() => {
        fetchArticles();
        fetchCategories();
    }, []);

    useEffect(() => {
        fetchArticles(selectedCategory);
    }, [selectedCategory]);

    async function fetchCategories() {
        let categories: categoriesProps[]
        try {
            const response = await fetch('/api/categories/');
            if (!response.ok) {
                throw new Error('Falha ao buscar categorias');
            }
            categories = await response.json();
            categories.push({name: 'Todos'})
            console.log('categories: ', categories)
            setCategories(categories)

        } catch (error) {
            console.error('Erro ao buscar categorias:', error);
        }
    }

    async function fetchArticles(category?: string) {
        try {
            let response

            if (category) {
                response = await fetch(`/api/articles_resume/category/${category}`);
            } else {
                response = await fetch(`/api/articles_resume/`);
            }

            if (!response.ok) {
                throw new Error('Falha ao buscar artigos');
            }
            const articles = await response.json();
            setArticles(articles)
        } catch (error) {
            console.error('Erro ao buscar artigos:', error);
        }
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="full max-w-[80rem]">
                <h1 className="pt-[7rem] text-[38px] pb-1 font-bold" >Categorias</h1>
                <div className="flex gap-2">
                    {categories && (categories.map((category, index) => (
                        <button
                            key={index}
                            className={`rounded-full border-1 transition duration-custom border-border bg-[#F4F6F8] dark:bg-bg px-4 py-[2px] text-xsm font-semibold ${selectedCategory === category.name ? 'text-active-tag' : 'text-[#696969] dark:text-text'} hover:text-active-tag dark:hover:text-active-tag`}
                            onClick={() => setSelectedCategory(category.name)}
                        >
                            {category.name}
                        </button>
                    )))}
                </div>
                <SearchButton handleSetArticles={handleSetArticles} />

                <h1 className="pt-[3rem] text-[38px] pb-5 font-bold" >Artigos</h1>
                <div className="flex flex-col gap-4">
                    {articles && (articles.map(article => (
                        resumeArticle(article)
                    )))}
                </div>

            </div>
        </div>
    );
}

function resumeArticle(article: articleResumeProps) {
    const router = useRouter();

    return (
        <div onClick={() => router.push(`blog/article/${article.article_id}`)} className="flex cursor-pointer border-2 border-border rounded-2xl h-full max-h-[15rem] w-full max-w-[80rem] overflow-hidden">
            <div className="w-full max-w-[30%]">
                <img className="object-cover h-full w-full" src={article.img} alt="imagem do artigo" />
            </div>
            <div className="flex flex-col pl-4 ">
                <h1 className="text-text text-[22px] font-bold"> {article.title}</h1>
                <p className="text-text text-[22px] font-bold"> {article.intro}</p>
                <p className="pl-4">{article.categories}</p>
            </div>
        </div>
    )
}

interface SearchButtonProps {
    handleSetArticles: (value: articleResumeProps[]) => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({handleSetArticles}) => {
    const [search, setSearch] = useState('');

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            fetchArticles(search)
        }
    };

    async function fetchArticles(search: string) {
        try {
            const response = await fetch(`/api/articles_resume/${search}`);

            if (!response.ok) {
                throw new Error('Falha ao buscar artigos');
            }
            const articles = await response.json();
            handleSetArticles(articles)
        } catch (error) {
            console.error('Erro ao buscar artigos:', error);
        }
    }

    return (
        <div className="py-[1rem]">
            <Input
                label="Pesquisar"
                isClearable
                radius="lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={handleSearch}
                classNames={{
                    label: "text-text",
                    input: [
                        "bg-transparent",
                        "text-text",
                        "placeholder:text-text",
                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [
                        "shadow-md",
                        "bg-bg",
                        "backdrop-blur-xl",
                        "backdrop-saturate-200",
                        "hover:bg-bg-100/70",
                        "dark:hover:bg-bg/70",
                        "group-data-[focus=true]:bg-bg-100/70",
                        "dark:group-data-[focus=true]:bg-bg/60",
                        "!cursor-text",
                        "border-1 border-border"
                    ],
                }}
                placeholder="Qual artigo está procurando?"
                startContent={
                    <SearchIcon />
                }
            />
        </div>
    )
}

const SearchIcon = () => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        className="text-text mb-0.5 pointer-events-none flex-shrink-0"
    >
        <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
        <path
            d="M22 22L20 20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);
