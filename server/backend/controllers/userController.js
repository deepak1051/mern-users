import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import User from '../model/User.js';

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

const createUser = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  const user = await User.findOne({ email });
  if (user) {
    res.status(400);
    throw new Error('User already exists');
  }

  const newUser = await User.create({
    name,
    email,
    phone,
  });

  return res.status(201).json(newUser);
});

const getSingleUser = asyncHandler(async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400);
    throw new Error('Please provide a valid mongoose ID');
  }

  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error('The user with the given ID was not found.');
  }
  res.status(200).json(user);
});

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, phone, email } = req.body;

  if (!name || !phone || !email) {
    res.status(400);
    throw new Error('Please provide a text fields');
  }

  if (!mongoose.isValidObjectId(id)) {
    res.status(400);
    throw new Error('Please provide a valid mongoose ID');
  }

  const _user = await User.findById(req.params.id);

  if (!_user) {
    res.status(401);
    throw new Error('User not found');
  }

  const duplicateEmail = await User.findOne({ email });

  const user = await User.findByIdAndUpdate(
    id,
    {
      name,
      phone,
      email,
    },
    { new: true }
  );

  res.status(200).json(user);
});

const deleteUser = asyncHandler(async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400);
    throw new Error('Please provide a valid mongoose ID');
  }

  const _user = await User.findById(req.params.id);

  if (!_user) {
    res.status(401);
    throw new Error('User not found');
  }

  const user = await User.findByIdAndRemove(req.params.id);

  res.status(200).json({ id: user._id });
});

export { getSingleUser, createUser, getUsers, deleteUser, updateUser };
