
import userRouter from "./user.js"
import adminRouter from "./admin.js"
let initWebRoutes = (app) => {
   app.use('/user', userRouter);
   app.use('/admin', adminRouter);
   // app.use('/test', testRouter);
}
export default initWebRoutes;