import { NextResponse } from 'next/server';
import { subscribeEmail } from '@backend/services/newsletter.service';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, message: 'Email required' }, { status: 400 });
    }

    const result = await subscribeEmail(email);
    
    if (result.status === 'exists') {
      return NextResponse.json(result, { status: 200 });
    }

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Newsletter API Error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
