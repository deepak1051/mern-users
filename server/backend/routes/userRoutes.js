import express from 'express';
import {
  getUsers,
  createUser,
  deleteUser,
  getSingleUser,
  updateUser,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getSingleUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
