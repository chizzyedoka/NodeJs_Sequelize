const { Router } = require("express");

const router = Router();

const users = require("./users");
const user = require("./user");
const profiles = require("./profiles");
const tags = require("./tags");
const articles = require("./articles");

router.use("/users", users);
router.use("/user", user);
router.use("/profiles", profiles);
router.use("/tags", tags);
router.use("/articles", articles);

module.exports = router;
