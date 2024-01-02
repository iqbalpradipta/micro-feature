import * as express from "express";
import articleController from "../controller/article-controller";
import uploadFiles from "../middlewares/uploadFiles";
import paslonController from "../controller/paslon-controller";
import partaiController from "../controller/partai-controller";

const routes = express.Router();

routes.get("/article", articleController.find);
routes.get("/article/:id", articleController.findById);
routes.get("/articleDetail", articleController.findDetail);
routes.post("/article", uploadFiles.upload("img"), articleController.insert);

routes.post("/paslon", uploadFiles.upload("img"), paslonController.insert);
routes.get("/paslon", paslonController.find);
routes.get("/paslon/:id", paslonController.findById);

routes.post("/partai", uploadFiles.upload("img"), partaiController.insert);
routes.get("/partai", partaiController.find);
routes.get("/partai/:id", partaiController.findById);


export default routes;
