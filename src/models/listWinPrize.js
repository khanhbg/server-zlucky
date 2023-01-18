'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ListWinPrize extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            ListWinPrize.belongsTo(models.Prize, { foreignKey: 'prizeId', as: 'r_prizeId' })
            ListWinPrize.belongsTo(models.User, { foreignKey: 'userId', as: 'r_userId' })
        }
    }
    ListWinPrize.init({
        userId: DataTypes.INTEGER, //id nguoi trung giai
        prizeId: DataTypes.INTEGER, // id giai thuong
        status: DataTypes.STRING, //tinh trang trao giai
    }, {
        sequelize,
        modelName: 'ListWinPrize',
    });
    return ListWinPrize;
};