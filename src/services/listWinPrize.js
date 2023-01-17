import bcrypt from 'bcryptjs';
import db from '../models/index.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
//const salt = bcrypt.genSaltSync(10);
//const jwtCode = process.env.JWTCODE;

//tao mới quà
let createRecordSpin = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            //console.log(data)
            let resData = {};
            let prize = await db.Prize.create({

                prizesName: data.prizesName,
                percent: 0,
                image: data.image,
                number: data.number,

            })
            if (prize) {
                resolve(true)

            } else {
                resolve(true)
            }
        } catch (e) {
            reject(e)
        }
    })
} //ok



export {
    createRecordSpin
}