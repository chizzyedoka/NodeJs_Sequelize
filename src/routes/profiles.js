const { Router } = require("express");

const router = Router();

// Get a profile
router.get("/:username", (req, res) => {
  res.send({
    profile: {
      username: req.params.username,
      bio: "I work at statefarm",
      image: "https://static.productionready.io/images/smiley-cyrus.jpg",
      following: false,
    },
  });
});

module.exports = router;
