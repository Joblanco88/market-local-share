/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 *
 */

const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productid: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    marketid: DataTypes.INTEGER,
    valuesid: DataTypes.INTEGER
  },
  {
    timestamps: false,
    underscored: true
  });
  return Product;
};

module.exports = ProductModel;
