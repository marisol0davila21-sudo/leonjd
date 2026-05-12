import { NextResponse } from 'next/server';
import { getApprovedTestimonials, submitTestimonial } from '@backend/services/testimonial.service';

export async function GET() {
  try {
    const testimonials = await getApprovedTestimonials();
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Testimonials GET Error:', error);
    return NextResponse.json({ success: false, message: 'Error fetching testimonials' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const result = await submitTestimonial(data);
    return NextResponse.json({ success: true, data: result }, { status: 201 });
  } catch (error) {
    console.error('Testimonials POST Error:', error);
    return NextResponse.json({ success: false, message: 'Error submitting testimonial' }, { status: 500 });
  }
}
