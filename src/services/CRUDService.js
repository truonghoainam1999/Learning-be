import bcrypt from "bcrypt";
import db from "../models/index";

const saltRounds = 10;

let createNewUser = async (data) => {
  return new Promise(async (resolve, rejects) => {
    try {
      let hashPassWord = await hashUserPassWord(data?.passWord);
      await db.User.create({
        email: data?.email,
        password: hashPassWord,
        firstName: data?.firstName,
        lastName: data?.lastName,
        address: data?.address,
        gender: data?.gender === 1 ? true : false,
        roleId: data?.roleId || 1,
        phoneNumber: data?.phoneNumber,
      });
      resolve("Ok CREATE A NEW USER SUCCEED");
    } catch (e) {
      rejects(e);
    }
  });
};

let hashUserPassWord = (passWord) => {
  return new Promise(async (resolve, rejects) => {
    try {
      await bcrypt.hash(passWord, saltRounds).then(function (hash) {
        // Store hash in your password DB.
        resolve(hash);
      });
    } catch (error) {
      rejects(error);
    }
  });
};

module.exports = {
  createNewUser,
};
