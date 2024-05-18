import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../../../firebase';

export async function GET(req: NextRequest) {
    const category = req.url?.split('/').pop()
    console.log('category: ', category)

    try {
        if (!category) {
            return new NextResponse('Artigo inválido!', { status: 400 })
        }
        const querySnapshot = await db.collection('articles_resume')
            .where('categories', 'array-contains', category)
            .get();

        if (querySnapshot.empty) {
            return new NextResponse('Artigo não encontrado', { status: 404 })
        } else {
            const articles = querySnapshot.docs.map(doc => doc.data());
            return new NextResponse(JSON.stringify(articles), { status: 200, headers: { 'Content-Type': 'application/json' } });
        }

    } catch (error) {
        return new NextResponse('Server error', { status: 500 })
    }
}

