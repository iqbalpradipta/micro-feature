import * as express from "express";
import articleController from "../controller/article-controller";
import uploadFiles from "../middlewares/uploadFiles";
import paslonController from "../controller/paslon-controller";
import partaiController from "../controller/partai-controller";
import authController from "../controller/auth-controller";
import authMiddlewares from "../middlewares/authMiddlewares";
import votingController from "../controller/voting-controller";
import Roles from "../middlewares/rolesJWT";

const routes = express.Router();

routes.get("/article", articleController.find);
routes.get("/article/:id",  articleController.findById);
routes.post("/article", authMiddlewares.Auth('admin'), uploadFiles.upload("img"), articleController.insert);
routes.put("/article/:id", authMiddlewares.Auth('admin'), uploadFiles.upload("img"), articleController.update);
routes.delete("/article/:id", authMiddlewares.Auth('admin'), articleController.delete);

routes.post("/paslon", authMiddlewares.Auth('admin'),uploadFiles.upload("img"), paslonController.insert);
routes.get("/paslon",  paslonController.find);
routes.get("/paslon/:id",  paslonController.findById);

routes.post("/partai", authMiddlewares.Auth('admin'),uploadFiles.upload("img"), partaiController.insert);
routes.get("/partai", partaiController.find);
routes.get("/partai/:id", partaiController.findById);
routes.post("/partai/:id", authMiddlewares.Auth('admin'), partaiController.paslonPick)

routes.post("/auth/register", authController.authRegister);
routes.post("/auth/register", authController.authRegister);
routes.post("/auth/register/admin", authController.registerAdmin);
routes.post("/auth/login", authController.authLogin);

routes.get("/voting", votingController.find);
routes.post("/voting", authMiddlewares.Auth('users'), votingController.paslonVote)

export default routes;
