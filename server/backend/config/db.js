import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const db = await mongoose.connect(
      'mongodb+srv://light:light@cluster0.drlit.mongodb.net/internDummyDB?retryWrites=true&w=majority'
    );

    console.log(`mongodb commected: ${db.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
