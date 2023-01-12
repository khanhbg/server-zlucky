import express from "express";
import * as c_admin from "../controllers/admin.js"
let router = express.Router();

router.post('/createPrize',c_admin.postCreatePrize);// thêm quà
router.post('/updatePrize',c_admin.postUpdatePrize);// sửa quà

export default router;


  