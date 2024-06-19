import path from "path";

export default class employeeController {
  //GET/ Homepage

  async homepage(req, res) {
    res.render("home", { title: "Recipe Hunt - Home" });
  }

}
