import express from "express";
import * as c_user from "../controllers/user"
import * as s_user from "../services/user"
let router = express.Router();
router.post('/login',c_user.postLogin);//login ok
router.post('/register', c_user.postRegister);//dang ki  ok
router.post('/updateProfile',s_user.isLogin, c_user.postUpdateProfile); //cap nhat thong tin ca nhan ok
router.post('/changePassword', s_user.isLogin, c_user.postUpdatePassword); //doi mat khau ok
router.post('/updateSpin', s_user.isLogin, c_user.postUpdateSpin);
router.get('/getListPrizes',c_user.getListPrizes);
export default router;