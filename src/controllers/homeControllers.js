import db from "../models/index";
import { createNewUser } from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (error) {
    console.log(error);
  }
};

let postCRUD = async (req, res) => {
  try {
    let message = await createNewUser(req?.body);
    console.log("message", message);
  } catch (error) {}
};

let getCrud = async (req, res) => {
  try {
    return res.render("crud.ejs");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getHomePage,
  getCrud,
  postCRUD,
};
