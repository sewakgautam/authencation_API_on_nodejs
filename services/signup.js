import { db } from "../.config/database.js";

export const signup = (req, res) => {
  let { username, email, password, name } = req.body;
  db.run(
    `Insert into users values(?,?,?,?)`,
    username,
    email,
    password,
    name,
    (err) => {
      if (err) {
        res.send("data not satisfied");
      } else {
        return res.send({"message":"dataadded","redirectedurl":"/login"});
      }
    }
  );
};
