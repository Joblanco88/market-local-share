/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 *
 */

const ValuesModel = (sequelize, DataTypes) => {
  const Values = sequelize.define('Values', {
    userid: DataTypes.INTEGER,
    productid: DataTypes.INTEGER,
    valuesid: { type: DataTypes.INTEGER, primaryKey: true },
    values: DataTypes.STRING,
    date: DataTypes.DATE
  });
  return Values;
};

module.exports = ValuesModel;
