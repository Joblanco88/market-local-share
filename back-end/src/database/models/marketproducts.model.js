/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 *
 */

const MarketModel = (sequelize, DataTypes) => {
  const Market = sequelize.define('Market', {
    marketid: { type: DataTypes.INTEGER, primaryKey: true },
    productid: DataTypes.INTEGER
  },
  {
    timestamps: false,
    underscored: true
  });
  return Market;
};

module.exports = MarketModel;
