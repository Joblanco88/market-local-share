/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 *
 */

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    telefone: DataTypes.STRING,
    userid: { type: DataTypes.INTEGER, primaryKey: true }
  },
  {
    timestamps: false,
    underscored: true
  });
  // User.associate = (models) => {
  //   User.hasMany(models.)
  // }
  return User;
};

module.exports = UserModel;
