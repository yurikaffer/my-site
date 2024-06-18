import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../../firebase';

interface articleResumeProps {
    title: string
    intro: string
    categories: string[]
    img: string
    article_id: number
}

export async function GET(req: NextRequest) {
    let search = req.url?.split('/').pop()

    if (search) {
        search = decodeURIComponent(search);
    }

    try {
        if (!search) {
            return new NextResponse('Pesquisa inválida!', { status: 400 })
        }

        const querySnapshot = await db.collection('articles_resume').get();

        // Filtra os documentos
        const searchLower = search.toLowerCase();
        const articles = querySnapshot.docs
            .map(doc => doc.data() as articleResumeProps)
            .filter(article => {
                const categoriesMatch = article.categories?.some(category => category.toLowerCase().includes(searchLower)) ?? false;
                const introMatch = article.intro.toLowerCase().includes(searchLower);
                const titleMatch = article.title.toLowerCase().includes(searchLower);
                return categoriesMatch || introMatch || titleMatch;
            });

        return new NextResponse(JSON.stringify(articles), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch (error) {
        return new NextResponse('Server error.', { status: 500 })
    }
}

