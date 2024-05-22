import { Input } from "@nextui-org/react";
import { useState } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";

interface SearchInputProps {
    loadAllArticles: () => Promise<void>
    loadArticlesBySearch: (search: string) => Promise<void>
}

const SearchInput = ({ loadAllArticles, loadArticlesBySearch }: SearchInputProps) => {
    const [search, setSearch] = useState('');
    
    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            loadArticlesBySearch(search)
        }
    };

    const handleClearSearch = () => {
        setSearch('')
        loadAllArticles()
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value)
        if (value.trim() === '') {
            loadAllArticles()
        }
    };

    const SearchButton = () => {
        return (
            <div className="flex gap-2">
                <button
                    className="bg-gray-100 dark:bg-gray-800 px-[10px] py-[7px] rounded-md text-text"
                    onClick={() => loadArticlesBySearch(search)}
                >
                    <FaSearch className="w-5 h-5" />
                </button>
                {search && (<button
                    className="bg-gray-100 dark:bg-gray-800 px-[10px] py-[7px] rounded-md text-text"
                    onClick={() => handleClearSearch()}
                >
                    <FaTrash className="w-5 h-5" />
                </button>)}
            </div>
        )
    }

    return (
        <div className="pb-10">
            <Input
                label="Pesquisar"
                radius="lg"
                value={search}
                onChange={handleInputChange}
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
                endContent={
                    <SearchButton />
                }
            />
        </div>
    )
}

export default SearchInput