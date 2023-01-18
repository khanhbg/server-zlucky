'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       User.hasMany(models.ListWinPrize, { foreignKey: 'userId', as: 'r_userId' })
    }
  }
  User.init({
    userName: DataTypes.STRING,//ho ten day du
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    hight: DataTypes.STRING,
    weight: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    cccd: DataTypes.STRING,
    permanentAddress: DataTypes.STRING,// dia chi thuong chu
    phoneNumber: DataTypes.STRING,
    teamporaryRecidence:DataTypes.STRING, //dia chi tam tru
    email: DataTypes.STRING,
    facebook: DataTypes.STRING, //link
    zalo: DataTypes.STRING, //sdt
    other: DataTypes.STRING,//phuong thuc lien lac khac
    job: DataTypes.STRING, 
    income: DataTypes.INTEGER,//thu nhap
    education: DataTypes.STRING,
    hobbies: DataTypes.STRING,  //so thich
    marriage: DataTypes.STRING, // tinh trang hon nhan
    fatherName: DataTypes.STRING,
    motherName: DataTypes.STRING,
    brotherName: DataTypes.STRING,
    sisterName: DataTypes.STRING,
    fatherPhoneNumber: DataTypes.STRING,
    motherPhoneNumber: DataTypes.STRING,
    brotherPhoneNumber: DataTypes.STRING,
    sisterPhoneNumber: DataTypes.STRING,
    numberChildren: DataTypes.INTEGER,
    role: DataTypes.STRING,
    gameNumber: DataTypes.INTEGER, //so lan quay con lai
    gameNumberVip: DataTypes.INTEGER, // luot  quay vip
    numberLogin: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};