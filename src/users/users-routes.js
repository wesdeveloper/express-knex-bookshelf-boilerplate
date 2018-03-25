import express from 'express';
import UsersController from './users-controller';

const route = express.Router();

route
  /**
   * [Function that create a new user]{@link createUser }
   * @name createUser
   * @route {POST} /api/users
   * @bodyparam {Object} userSchema Look at userSchema in user-helpers to view.
   */
  .get('/', UsersController.getAllUsers);

export default route;
