'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Reviews, {
        as: 'owner',
        foreignKey: 'id'
      })
      User.belongsToMany(models.Games, {
        as: 'listing',
        through: models.Reviews,
        foreginKey: 'owner_id'
      })
    }
  }
  User.init(
    {
      userName: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
