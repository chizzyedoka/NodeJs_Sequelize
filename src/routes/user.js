const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send({
    user: {
      email: "chizzyedoka@gmail.com",
      token: "jwt.token.here",
      username: "chizzy",
      bio: "I work at unilag",
      image: "null",
    },
  });
});
module.exports = router;
