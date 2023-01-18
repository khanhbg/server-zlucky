'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Prize extends Model {
        static associate(models) {
            Prize.hasMany(models.ListWinPrize, { foreignKey: 'prizeId', as: 'r_prizeId' })
        }
    }
    Prize.init({
        prizesName: DataTypes.STRING, 
        percent: DataTypes.INTEGER, 
        image: DataTypes.STRING, 
        number: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Prize',
    });
    return Prize;
};