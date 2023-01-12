import bcrypt from 'bcryptjs';
import db from '../models/index';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
//const salt = bcrypt.genSaltSync(10);
//const jwtCode = process.env.JWTCODE;

//tao mới quà
let createPrize = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            //console.log(data)
            let resData = {};
            if (data.prizesName) {
                    if (data.image) {
                        if(data.number){
                            let prize = await db.Prize.findOrCreate({
                                where: { prizesName: data.prizesName },
                                defaults: {
                                    prizesName: data.prizesName,
                                    percent: 0,
                                    image: data.image,
                                    number: data.number,
                                }
                            })
                            if (prize) {
                                if (prize[1]) {
                                    resData.code = 0
                                    resData.message = 'Tạo thành công quà';
                                } else {
                                    resData.code = 1
                                    resData.message = 'Quà đã tồn tại';
                                }
                            } else {
                                resData.code = 2 
                                resData.message = 'Tạo phần quà thất bại';
                            }
    
                        } else {
                            resData.code = 3
                            resData.message = 'Bạn cần nhập số lượng quà';
                        }
                    } else {
                        resData.code = 4 
                        resData.message = 'Bạn cần tải ảnh lên';
                    }
            } else{
                    resData.code = 4 
                    resData.message = 'Bạn cần nhập tên quà';
                 }         
                 resolve(resData);
        } catch (e) {
            console.log(e)
            reject(e)
        }
    })
} //ok


//updatePrizeById
let updatePrizeById = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let resData = {};
            let prize = await db.Prize.findOne({ where: { id: data.idPrize } })
            if (prize) {
                prize.prizesName = data.prizesName
                prize.percent = data.percent;
                prize.image = data.image;
                prize.number = data.number;
                await prize.save();
                resData = {
                    code: 0,
                    message: "Cập nhật thông tin quà thành công"
                }
            } else {
                resData = {
                    code: 1,
                    message: "Quà không tồn tại"
                }
                
            }
            resolve(resData);
        } catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

//lay het qua 
let getAllPrizes = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let resData = {};
            let listPrizes = await db.Prize.findAll({
                order: [
                    ['percent','DESC']
                ],
                attributes: ['id', 'prizesName', 'percent','image','number'],
                raw:true,
            });
            if (listPrizes) {
                resData.code = 0;
                resData.message = "OK";
                resData.listPrizes = listPrizes;
            } else {
                resData.code = 1;
                resData.message = "Loi DB";
            }
            resolve(resData);

        } catch (e) {
            reject(e)
        }
    })
} //ok
export {
    createPrize, updatePrizeById, getAllPrizes
}