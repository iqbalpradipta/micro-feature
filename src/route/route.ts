import * as express from "express";
import articleController from "../controller/article-controller";
import uploadFiles from "../middlewares/uploadFiles";
import paslonController from "../controller/paslon-controller";
import partaiController from "../controller/partai-controller";
import authController from "../controller/auth-controller";
import authMiddlewares from "../middlewares/authMiddlewares";

const routes = express.Router();

routes.get("/article", articleController.find);
routes.get("/article/:id", articleController.findById);
routes.get("/articleDetail", articleController.findDetail);
routes.post("/article", authMiddlewares.Auth, uploadFiles.upload("img"), articleController.insert);

routes.post("/paslon", authMiddlewares.Auth,uploadFiles.upload("img"), paslonController.insert);
routes.get("/paslon", paslonController.find);
routes.get("/paslon/:id", paslonController.findById);

routes.post("/partai", authMiddlewares.Auth,uploadFiles.upload("img"), partaiController.insert);
routes.get("/partai", partaiController.find);
routes.get("/partai/:id", partaiController.findById);

routes.post("/auth/register", authController.authRegister);
routes.post("/auth/login", authController.authLogin);

export default routes;
