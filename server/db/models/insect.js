'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Insect.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        testCase(string) {
          const words = string.split(' ');
          words.forEach(word => {
            if(word[0] !== word[0].toUpperCase()) {
              throw new Error('Each word must be capitalized.')
            }
          })
        }
      }
    },
    description: DataTypes.STRING,
    territory: DataTypes.STRING,
    fact: {
      type: DataTypes.STRING(240),
      validate: {
        len: [1,240]
      }
    },
    millimeters: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min:0
      }
    }
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};
