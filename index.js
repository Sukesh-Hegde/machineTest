const express = require("express");

const app = express();
const port = process.env.PORT || 4000;
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(expressLayout);

app.listen(port, function (error) {
  if (error) {
    console.log("Error in running Server");
  }
  console.log(`Server is running on port:${port}`);
});