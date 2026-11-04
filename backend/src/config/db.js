import mongoose from 'mongoose';


export const connectDB = async  () => {

    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MONGODB Connected Successfully');
        
    } catch (error) {
        console.error('Failed to connect database', error);
        process.exit(1)
    }
}