
import { generateQuery } from '../../actions';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { query } = await request.json();
    const result = await generateQuery(query);
    return NextResponse.json({ result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate query' }, { status: 500 });
  }
}
