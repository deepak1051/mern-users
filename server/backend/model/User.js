import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please add a email'],
  },
  phone: {
    type: String,
    required: [true, 'Please add a phone number'],
  },
});

const User = mongoose.model('User', userSchema);
export default User;
