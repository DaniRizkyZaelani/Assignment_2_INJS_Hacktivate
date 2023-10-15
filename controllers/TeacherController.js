const fs = require("fs");
class TeacherController {
  static getAllTeachers(req, res) {
    try {
      //mengambil data json dari file teachers.json
      let data = fs.readFileSync("./data/teachers.json", "utf8");
      res.status(200).json(JSON.parse(data));
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = { TeacherController };
