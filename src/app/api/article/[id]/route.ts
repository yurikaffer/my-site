import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../../firebase';

export async function GET(req: NextRequest) {
    const id = req.nextUrl.pathname.split('/').pop();

    try {
        if (!id) {
            return new NextResponse('ID inválido ou ausente', { status: 400 });
        }
        const articleDoc = await db.collection('articles').doc(id).get();

        if (!articleDoc.exists) {
            return new NextResponse('Artigo não encontrado', { status: 404 });
        } else {
            return new NextResponse(JSON.stringify(articleDoc.data()), { status: 200, headers: { 'Content-Type': 'application/json' } });
        }
    } catch (error) {
        return new NextResponse('Server error', { status: 500 });
    }
}
