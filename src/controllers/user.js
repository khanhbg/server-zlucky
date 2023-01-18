import * as s_user from "../services/user.js"
import * as s_prize from "../services/prize.js"

import jwt from 'jsonwebtoken'
const jwtCode = process.env.JWTCODE;
//register
let postRegister = async (req, res) => {
    try {
        let resData = await s_user.createUser(req.body);
        //console.log(resData);
        if (resData) {
            return res.status(200).json({
                code: resData.code,
                message: resData.message
            });
        }
        else {
            return res.status(200).json({
                code: 11,
                message: 'Đăng ký thất bại '
            })
        }
    } catch (e) {
        //console.log(e)
        return res.status(200).json({
            code: 12,
            message: 'Đăng ký thất bại '
        })
    }
} //ok
//login
let postLogin = async (req, res) => {
    //console.log(req.body);
    try {
        let phoneNumber = req.body.phoneNumber;
        let password = req.body.password;
        // console.log(phoneNumber)
        // console.log(password)
        let resData = await s_user.checkLogin(phoneNumber, password)
        if (resData) {
            //console.log(resData)
            return res.status(200).json({
                code: resData.code,
                message: resData.message,
                cId: resData.cId, // tooken
                user: resData.user ? resData.user : {}

            });
        } else {
            return res.status(200).json({
                code: 11,
                message: 'Login thất bại'
            })
        }

    } catch (e) {
        console.log(e)
        return res.status(200).json({
            code: 12,
            message: 'Login thất bại'
        })
    }
}//ok

//update user
let postUpdateProfile = async (req, res) => {
    try {
        let reqData = req.body
        
        reqData.userId = req.userId
        let resData = await s_user.updateUserById(reqData);
        if (resData) {
            return res.status(200).json({
                code: resData.code,
                message: resData.message,
            });
        }
        else {
            return res.status(200).json({
                code: 11,
                message: 'Update that bai'
            })
        }
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            code: 12,
            message: 'Update that bai'
        })
    }

} //ok

//change password
let postUpdatePassword = async (req, res) => {
    try {
        console.log(req.body)
        let reqData = req.body
        
        reqData.userId = req.userId
        let resData = await s_user.updatePassword(reqData);
        if (resData) {
            return res.status(200).json({
                code: resData.code,
                message: resData.message,
            });
        }
        else {
            return res.status(200).json({
                code: 11,
                message: 'Cap nhat mat khau that bai'
            })
        }
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            code: 12,
            message: 'Cap nhat mat khau that bai'
        })
    }
}

//show prizes
let getListPrizes = async (req, res) => {
    try {
        console.log('abc')
        let resData = await s_prize.getAllPrizes();
        if (resData) {
            return res.status(200).json({
                code: resData.code,
                message: resData.message,
                listPrizes: resData.listPrizes
            });
        }
        else {
            return res.status(400).json({
                code: 11,
                message: 'Lỗi DB'
            })
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({
            code: 12,
            message: 'Lỗi DB'
        })
    }
}
let getProfile = async(req,res)=>{
    try {
        let resData = await s_user.getProfile(req.userId);
        if (resData) {
            return res.status(200).json({
                code: resData.code,
                message: resData.message,
                profile: resData.user
            });
        }
        else {
            return res.status(400).json({
                code: 11,
                message: 'Lỗi DB'
            })
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({
            code: 12,
            message: 'Lỗi DB'
        })
    }
}
// updateLateSpin
let postUpdateSpin = async (req, res) => {
    try {
        let reqData = req.body 
        reqData.userId = req.userId
        let resData = await s_user.updateSpin(reqData);
        if (resData) {
            return res.status(200).json({
                code: resData.code,
                message: resData.message,
            });
        }
        else {
            return res.status(200).json({
                code: 11,
                message: 'Loi server'
            })
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({
            code: 12,
            message: 'Loi server'
        })
    }
}
let test=(req,res)=>{
    return res.status(200).json({
        code: 11,
        message: 'hayy'
    })
}
export {
    postRegister, postLogin, postUpdateProfile, postUpdatePassword, getListPrizes, postUpdateSpin,getProfile
}