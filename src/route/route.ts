import * as express from "express";
import articleController from "../controller/article-controller";
import uploadFiles from "../middlewares/uploadFiles";
import paslonController from "../controller/paslon-controller";
import partaiController from "../controller/partai-controller";

const routes = express.Router();

routes.get("/article", articleController.find);
routes.get("/article/:id", articleController.findById);
routes.get("/articleDetail", articleController.findDetail);
routes.post("/article", uploadFiles.uploadArticle("img"), articleController.insert);

routes.post("/paslon", uploadFiles.uploadPaslon("img"), paslonController.insert);
routes.get("/paslon", paslonController.find);
routes.get("/paslon/:id", paslonController.findById);

routes.post("/partai", uploadFiles.uploadPartai("img"), partaiController.insert);


export default routes;
