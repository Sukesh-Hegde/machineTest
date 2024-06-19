import express from "express";
const employeeRouter = express.Router();
import employeeController from "../controller/employee.js";

const controller = new employeeController();


employeeRouter.get("/", (req, res) => {
  controller.homepage(req, res);
});

export default employeeRouter;