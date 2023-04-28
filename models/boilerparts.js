'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BoilerParts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BoilerParts.init(
    {
      boiler_manufacturer: DataTypes.STRING,
      price: DataTypes.INTEGER,
      parts_manufacturer: DataTypes.STRING,
      vendor_code: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      images: DataTypes.STRING,
      in_stock: DataTypes.INTEGER,
      bestseller: DataTypes.BOOLEAN,
      new: DataTypes.BOOLEAN,
      popularity: DataTypes.INTEGER,
      compatibility: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'BoilerParts',
    },
  );
  return BoilerParts;
};
