import mongoose from 'mongoose';

const uri = 'mongodb+srv://marcohuitron1327:AHOx9bXYMx96ehmB@cluster0.0qfdwzk.mongodb.net/';

export async function connectDB() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(uri);
}