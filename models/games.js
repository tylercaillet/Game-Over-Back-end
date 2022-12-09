'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Games.belongsTo(models.User, {
        as: 'owner',
        forgeinKey: 'owner_id'
      })
      Games.belongsToMany(models.User, {
        as: 'games',
        foreginKey: 'games_id'
      })
    }
  }
  Games.init(
    {
      owner_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        reference: {
          model: 'users',
          key: 'id'
        }
      },
      title: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Games',
      tableName: 'games'
    }
  )
  return Games
}
