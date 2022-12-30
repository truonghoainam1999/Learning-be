import express from "express";
import { getHomePage, getCrud, postCRUD } from "../controllers/homeControllers";

let router = express.Router();

let initWebRouters = (app) => {
  router.get("/", getHomePage);
  router.get("/crud", getCrud);
  router.post("/post-crud", postCRUD);
  return app.use("/", router);
};

module.exports = initWebRouters;
