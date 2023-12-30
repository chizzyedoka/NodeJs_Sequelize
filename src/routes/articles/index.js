const { Router } = require("express");

const router = Router();

const comments = require("./comments");

router.use("/comments", comments);

module.exports = router;
