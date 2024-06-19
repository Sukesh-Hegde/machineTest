import express from "express";
import expressLayouts from "express-ejs-layouts";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

import employeeRouter from "./route/employeeRouter.js";
app.use("/", employeeRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
//   connectUsingMongoose();
});
