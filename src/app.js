const express = require("express");

const app = express();

const users = require("./routes/users");
const user = require("./routes/user");
const profiles = require("./routes/profiles");
const tags = require("./routes/tags");

const PORT = 3000;

// For POST request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", users);
app.use("/api/user", user);
app.use("/api/profiles", profiles);
app.use("/api/tags", tags);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
