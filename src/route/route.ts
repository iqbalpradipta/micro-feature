import * as express from "express";
import articleController from "../controller/article-controller";
import uploadFiles from "../middlewares/uploadFiles";

const routes = express.Router();

routes.get("/article", articleController.find);
routes.get("/articleDetail", articleController.findDetail);
routes.post("/article", uploadFiles.upload("img"), articleController.insert);

export default routes;
