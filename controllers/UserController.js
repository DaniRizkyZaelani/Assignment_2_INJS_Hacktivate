const fs = require("fs");
const { generateToken } = require("../utils/jwt");

class UserController {
  static login(req, res) {
    try {
      fs.readFile("./data/users.json", "utf8", (err, data) => {
        let users = JSON.parse(data);
        let user = users.find((user) => user.username === req.body.username);
        if (user) {
          if (user.password === req.body.password) {
            let token = generateToken({
              id: user.id,
              username: user.username,
              password: user.password,
            });
            res.status(200).json({ msg:"succes", token });
          } else {
            res.status(400).json({ message: "email/password wrong" });
          }
        } 
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = { UserController };
