import { NextResponse } from 'next/server';
import { db } from '../../../../firebase';

export async function GET() {
    try {
        const categoriesSnapshot = await db.collection('categories').get();
        const categories = categoriesSnapshot.docs.map(doc => doc.data());

        if (categories.length === 0) {
            return new NextResponse('Nenhuma categoria encontrada', { status: 404 })
        } else {
            return new NextResponse(JSON.stringify(categories), { status: 200, headers: {'Content-Type': 'application/json'} });
        }
    } catch (error) {
        return new NextResponse('Server error', { status: 400 })
    }
}
