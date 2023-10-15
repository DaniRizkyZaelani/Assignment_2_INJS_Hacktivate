const { verifyToken } = require("../utils/jwt");

function authentication(req, res, next) {
  try {

    const token = req.headers["authorization"];
    if (!token) {
      throw {
        code: 401,
        message: "Please login first",
      };
    }

    const decoded = verifyToken(token);
    req.decoded = decoded;
    next();

    // let decoded = verifyToken(req.headers.token);
    // req.decoded = decoded;
    // next();
  } catch (error) {
    res.status(error.code || 500).json(error.message);
  }
}

module.exports = { authentication };
