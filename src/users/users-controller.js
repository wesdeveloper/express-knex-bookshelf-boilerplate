import UsersModel from './users-model';

export default {
  getAllUsers: async (req, res) => {
    const users = await UsersModel
      .forge()
      .fetchAll()
      .then(data => (data ? data.toJSON() : null));
    return res.send(users);
  },
};
