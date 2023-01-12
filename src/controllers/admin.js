import * as s_user from "../services/user.js"
import * as s_prize from "../services/prize.js"

// thêm phần quà mới
let postCreatePrize = async (req, res) => {
    try {
        let resData = await s_prize.createPrize(req.body);
        if (resData) {
            return res.status(200).json({
                code: resData.code,
                message: resData.message,
            });
        }
        else {
            return res.status(200).json({
                code: 11,
                message: 'Tạo quà thất bại'
            })
        }
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            code: 12,
            message: 'Tạo quà thất bại'
        })
    }

} //ok

// cập nhật thông tin quà
let postUpdatePrize = async (req, res) => {
    try {
        let resData = await s_prize.updatePrizeById(req.body);
        if (resData) {
            return res.status(200).json({
                code: resData.code,
                message: resData.message,
            });
        }
        else {
            return res.status(200).json({
                code: 11,
                message: "Cập nhật quà thất bại"
            })
        }
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            code: 12,
            message: "Cập nhật quà thất bại"
        })
    }

} //ok


export {
    postCreatePrize,postUpdatePrize
}
