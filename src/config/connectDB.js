import { Sequelize } from 'sequelize';
require('dotenv').config()
const sequelize = new Sequelize(process.env.DB_DATABASE_NAMESQL, process.env.DB_USERNAMESQL, process.env.DB_PASSWORDSQL, {
  host: process.env.DB_HOSTSQL,
  dialect: 'mysql',
  logging: false,
});
let connectD = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
export default connectD;

// import { Sequelize } from 'sequelize';
// // require('dotenv').config();
// import dotenv from 'dotenv';
// dotenv.config();
// const sequelize = new Sequelize(
//     process.env.DB_DATABASE_NAME,
//     process.env.DB_USERNAME,
//     process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: 'postgres',
//     logging: false,
//     dialectOptions:
//         process.env.DB_SSL === 'true' ?
//             {
//                 ssl: {
//                     require: true,
//                     rejectUnauthorized: false
//                 }
//             } : {}
//     ,
//     query: {
//         "raw": true
//     },
//     timezone: "+07:00"
//   }
// )
// let connectD = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }
// export default connectD;
