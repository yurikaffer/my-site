interface Category {
    name: string
}

export const fetchAllCategories = (): Promise<Category[]> => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('/api/categories/');
            if (!response.ok) {
                throw new Error('Falha ao buscar categorias');
            }
            const categoriesData: Category[] = await response.json();
            resolve([{ name: 'Todos' }, ...categoriesData]);
        } catch (error) {
            console.error('Erro ao buscar categorias:', error);
            reject(error);
        }
    });
};

export const fetchArticlesByCategory = async (category: string) => {
    try {
        const response = await fetch(`/api/articles_resume/category/${category}`);
        if (!response.ok) {
            throw new Error('Falha ao buscar artigos');
        }
        const articlesData = await response.json();
        return articlesData;
    } catch (error) {
        console.error('Erro ao buscar artigos:', error);
        throw error;
    }
};

export const fetchArticlesBySearch = async ( search: string) => {
    try {
        const response = await fetch(`/api/articles_resume/${search}`);
        if (!response.ok) {
            throw new Error('Falha ao buscar artigos');
        }
        const articlesData = await response.json();
        return articlesData;
    } catch (error) {
        console.error('Erro ao buscar artigos:', error);
        throw error;
    }
};

export const fetchAllArticles = async () => {
    try {
        const response = await fetch(`/api/articles_resume/`);
        if (!response.ok) {
            throw new Error('Falha ao buscar artigos');
        }
        const articlesData = await response.json();
        return articlesData;
    } catch (error) {
        console.error('Erro ao buscar artigos:', error);
        throw error;
    }
};
