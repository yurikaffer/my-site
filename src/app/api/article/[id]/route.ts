import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../../firebase';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const id = req.url?.split('/').pop()

    try {
        if (!id) {
            return new Response('ID inválido ou ausente', { status: 400 })
        }
        const articleDoc = await db.collection('articles').doc(id).get();

        if (!articleDoc.exists) {
            //return res.status(404).json({ error: 'Artigo não encontrado' });
            return new Response('Artigo não encontrado', { status: 404 })
        } else {
            //return res.status(200).json(articleDoc.data());
            return new Response(JSON.stringify(articleDoc.data()), { status: 200, headers: {'Content-Type': 'application/json'} });
        }
    } catch (error) {
        return new Response('Server error', { status: 500 })
    }
}

