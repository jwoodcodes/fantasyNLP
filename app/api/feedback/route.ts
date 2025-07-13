import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../app/generated/prisma';
const prisma = new PrismaClient();

export async function GET() {
  try {
    const feedback = await prisma.feedback.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json({ feedback });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch feedback' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
    console.log('Received feedback submission:', body);
    const { query = '', sql = '', isExpected: isExpectedRaw, reason }         = body; 
    const isExpected = Boolean(isExpectedRaw);
    await prisma.feedback.create({
      data: {
        query,
        sql,
        isExpected,
        reason,
      },
    });
    return NextResponse.json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    return NextResponse.json({ error: 'Failed to submit feedback' }, { status: 500 });
  }
}

