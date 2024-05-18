import { NextResponse } from 'next/server';
import { db } from '../../../../firebase';

export async function GET() {
    try {
        const articlesSnapshot = await db.collection('articles_resume').get();
        const articles = articlesSnapshot.docs.map(doc => doc.data());

        if (articles.length === 0) {
            return new NextResponse('Nenhum artigo encontrado', { status: 404 })
        } else {
            return new NextResponse(JSON.stringify(articles), { status: 200, headers: { 'Content-Type': 'application/json' } });
        }
    } catch (error) {
        return new NextResponse('Server error', { status: 500 })
    }
}
