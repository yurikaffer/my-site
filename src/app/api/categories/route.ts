import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../firebase';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const categoriesSnapshot = await db.collection('categories').get();
        const categories = categoriesSnapshot.docs.map(doc => doc.data());

        if (categories.length === 0) {
            return new Response('Nenhuma categoria encontrada', { status: 404 })
        } else {
            return new Response(JSON.stringify(categories), { status: 200, headers: {'Content-Type': 'application/json'} });
        }
    } catch (error) {
        return new Response('Server error', { status: 400 })
    }
}
