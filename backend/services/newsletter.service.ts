import connectDB from '../database/mongodb';
import Newsletter from '../models/Newsletter';

export async function subscribeEmail(email: string) {
  await connectDB();
  
  const existing = await Newsletter.findOne({ email });
  if (existing) {
    return { success: false, status: 'exists' };
  }

  const newSub = new Newsletter({ email });
  await newSub.save();
  
  return { success: true, status: 'success' };
}
