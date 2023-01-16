import bcrypt from 'bcryptjs';
import db from '../models/index.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const salt = bcrypt.genSaltSync(10);
const jwtCode = process.env.JWTCODE;

let hashPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPass = await bcrypt.hashSync(password, salt);
            resolve(hashPass);
        } catch (e) {
            reject(e)
        }
    })
}
//check dang nhap
let isLogin = (req, res, next) => {
    try {
        let token = req.cookies.cId;
        //console.log(req)
        if(token){
            let userId = jwt.verify(token, jwtCode)
            if (userId) { //neu verify duoc > tooken dung
                req.userId = userId //gan id
                next();
            } else {
                return res.status(200).json({
                    code: 11,
                    message: 'Bạn chưa đăng nhập'
                })
            }
        }else{
            return res.status(200).json({
                code: 11,
                message: 'Bạn chưa đăng nhập'
            })
        }
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            code: 12,
            message: 'Lỗi hệ thống'
        })
    }
}
//tao moi user
let createUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            //console.log(data)
            let resData = {};
            if (data.userName) {
                if (data.password) {
                    if (data.phoneNumber) {
                        if(data.email){
                            let hassPass = await hashPassword(data.password);
                            let user = await db.User.findOrCreate({
                                where: { phoneNumber: data.phoneNumber },
                                defaults: {
                                    userName: data.userName,
                                    phoneNumber: data.phoneNumber,
                                    email: data.email,
                                    password: hassPass,
                                    role: 'user',
                                    gameNumber: 22,    
                                }
                            })
                            if (user) {
                                if (user[1]) {
                                    resData.code = 0
                                    resData.message = 'Đăng ký thành công';
                                } else {
                                    resData.code = 1
                                    resData.message = 'Tài khoản đã tồn tại';
                                }
                            } else {
                                resData.code = 2 
                                resData.message = 'Lỗi DB';
                            }
                        }else{
                            resData.code = 3
                        resData.message = 'Bạn cần nhập emailemail';
                        }
                    } else {
                        resData.code = 3
                        resData.message = 'Bạn cần nhập số điện thoại';
                    }
                } else {
                    resData.code = 33 
                    resData.message = 'Bạn cần nhập mật khẩu';
                }
            } else {
                resData.code = 3
                resData.message = 'Ban cần nhập userName';
            }
            resolve(resData);
        } catch (e) {
            console.log(e)
        }
    })
} //ok

//dang nhap
let checkLogin = (phoneNumber, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let user = await db.User.findOne({
                where: { phoneNumber: phoneNumber },
                raw: true,
            })
            if (user) {
                let checkPassword = await bcrypt.compareSync(password, user.password);
                if (checkPassword) {
                    userData.code = 0
                    userData.message = 'Đăng nhập thành công';
                    delete user.password;
                    userData.user = user;
                    let cId = jwt.sign(user.id, jwtCode);
                    userData.cId = cId;
                } else {
                    userData.code = 1
                    userData.message = 'Sai mật khẩu';
                }
            } else {
                userData.code = 2
                userData.message = 'Tài khoản không tồn tại';
            }

            resolve(userData);
        } catch (e) {
            console.log(e)
        }
    })
}//ok

let getProfile = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let resData = {};
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true,
                attributes: ['id', 'userName', 'phoneNumber', 'email', 'gameNumber']
            })
            if (user) {
                resData = {
                    code: 0,
                    message: "OK",
                    user: user
                }
            } else {
                resData = {
                    code: 5,
                    message: "Loi DB"
                }
            }
            resolve(resData);
        } catch (e) {
            reject(e);
        }
    })
}
//update user
let updateUserById = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let resData = {};
            let user = await db.User.findOne({ where: { id: data.userId } })
            if (user) {
                user.userName = data.userName
                user.gender = data.gender;
                user.hight = data.hight;
                user.weight = data.weight;
                user.dateOfBirth = data.dateOfBirth;
                user.cccd = data.cccd;
                user.permanentAddress = data.permanentAddress;
                user.phoneNumber = data.phoneNumber;
                user.teamporaryRecidence = data.teamporaryRecidence;
                user.email = data.email;
                user.facebook = data.facebook;
                user.zalo = data.zalo;
                user.other = data.other;
                user.job = data.job;
                user.income = data.income;
                user.education = data.education;
                user.hobbies = data.hobbies;
                user.marriage = data.marriage;
                user.fatherName = data.fatherName;
                user.motherName = data.motherName;
                user.brotherName = data.brotherName;
                user.sisterName = data.sisterName;
                user.fatherPhoneNumber = data.fatherPhoneNumber;
                user.motherPhoneNumber = data.motherPhoneNumber;
                user.brotherPhoneNumber = data.brotherPhoneNumber;
                user.sisterPhoneNumber = data.sisterPhoneNumber;
                user.numberChildren = data.numberChildren;
                await user.save();
                resData = {
                    code: 0,
                    message: "Cap nhat thong tin thanh cong"
                }
                resolve(resData);
            } else {
                resData = {
                    code: 1,
                    message: "Tai khoan khong ton tai"
                }
                resolve(resData);
            }
        } catch (e) {
            console.log(e)
        }
    })
}

//update password
let updatePassword = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let resData = {};
            if(data.oldPassword){
                if(data.password){
                    if(data.rePassword){ // nhap lai ppassword moi
                        if(data.password==data.rePassword){ // mat khau moi trung mat khau moi nhap lai
                            let hassPass = await hashPassword(data.password);
                            let user = await db.User.findOne({ where: { id: data.userId } })
                            if (user) {
                                let compare = await bcrypt.compareSync(data.oldPassword, user.password);// so sanh nhap mat khau cu voi mat khau cu tren data
                                if (compare) {
                                    if (await bcrypt.compareSync(data.password, user.password)) {
                                        resData = {
                                            code: -1,
                                            message: "Mật khẩu  mới phải khác mật khẩu cũ"
                                        }
                                    }
                                    user.password = hassPass
                                    await user.save();
                                    resData = {
                                        code: 0,
                                        message: "Đổi mật khẩu thành công"
                                    }
                                }else{
                                    resData = {
                                        code: 1,
                                        message: "Mật khẩu cũ không đúng"
                                    }
                                }       
                            } else {
                                resData = {
                                    code: 2,
                                    message: "Tai khoan da bi xoa"
                                }
                            }
                        }else{
                            resData = {
                                code: 3,
                                message: "Mật khẩu nhập lại không trùng nhau"
                            }
                        }
                    }else{
                        resData = {
                            code: 3,
                            message: "Bạn cần nhập lại mật khẩu mới"
                        }
                    }
                }else{
                    resData = {
                        code: 4,
                        message: " Vui lòng nhập mật khẩu mới"
                    }
                }
            }else{
                resData = {
                    code: 5,
                    message: "Vui lòng nhập mật khẩu cũ"
                }
            } 
            resolve(resData)   
        } catch (e) {
            reject(e);
        }
    })
}

// job later spin
let jlSpin = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let resData = {};
            let user = await db.User.findOne({ 
                where: { id: data.userId },
            })
            let prize = await db.Prize.findOne({ where: { id: data.id } })
            if (user) {
                user.numberGame --;
                await user.save();
                prize.number--;
                await prize.save();
                let listWinPrize = await db.ListWinPrize.create({
                    userId: 1,
                    prizeId: 1,
                    status: 0  
                })
                console.log("a")
                console.log(listWinPrize)
                if(listWinPrize){
                    resData = {
                        code: 0,
                        message: "Cap nhat thong tin thanh cong"
                    }
                }else{
                    resData = {
                        code: 1,
                        message: "Loi server"
                    }
                }   
            } else {
                resData = {
                    code: 2,
                    message: "Loi server"
                }           
            }
            resolve(resData);
        } catch (e) {
            console.log(e)
        }
    })
}
export {
    createUser, checkLogin, isLogin, updateUserById, updatePassword,jlSpin,getProfile
}