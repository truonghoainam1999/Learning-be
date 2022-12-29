import express from "express";
import { getHomePage } from "../controllers/homeControllers";

let router = express.Router();

let initWebRouters = (app) => {
  router.get("/", getHomePage);
  return app.use("/", router);
};

module.exports = initWebRouters;
