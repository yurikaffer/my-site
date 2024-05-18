import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../firebase';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const articlesSnapshot = await db.collection('articles_resume').get();
        const articles = articlesSnapshot.docs.map(doc => doc.data());

        if (articles.length === 0) {
            return new Response('Nenhum artigo encontrado', { status: 404 })
        } else {
            return new Response(JSON.stringify(articles), { status: 200, headers: {'Content-Type': 'application/json'} });
        }
    } catch (error) {
        return new Response('Server error', { status: 500 })
    }
}
