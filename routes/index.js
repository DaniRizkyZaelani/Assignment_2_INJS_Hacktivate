const router = require("express").Router();

const { TeacherController } = require("../controllers/TeacherController");
const { UserController } = require("../controllers/UserController");
const { authentication } = require("../middlewares/auth");

router.post("/login", UserController.login);
router.use(authentication);
router.get("/teacher", TeacherController.getAllTeachers);

module.exports = router;
