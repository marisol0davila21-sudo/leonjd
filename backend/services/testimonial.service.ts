import connectDB from '../database/mongodb';
import Testimonial from '../models/Testimonial';

export async function getApprovedTestimonials() {
  await connectDB();
  return await Testimonial.find({ isApproved: true }).sort({ createdAt: -1 });
}

export async function submitTestimonial(data: any) {
  await connectDB();
  
  // Map frontend fields to database fields if necessary
  const testimonialData = {
    name: data.name,
    content: data.text || data.content,
    rating: data.stars || data.rating,
    avatar: data.image || data.avatar,
    role: data.role || 'Cliente',
    event: data.event || 'Experiencia León de Judá',
    isApproved: false // Always start as false for moderation
  };

  const newTestimonial = new Testimonial(testimonialData);
  await newTestimonial.save();
  return newTestimonial;
}
