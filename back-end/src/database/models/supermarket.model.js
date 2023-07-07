/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 *
 */

const SupermarketModel = (sequelize, DataTypes) => {
  const Supermarket = sequelize.define('Supermarket', {
    name: DataTypes.STRING,
    marketid: { type: DataTypes.INTEGER, primaryKey: true }
  },
  {
    timestamps: false,
    underscored: true
  });
  return Supermarket;
};

module.exports = SupermarketModel;
