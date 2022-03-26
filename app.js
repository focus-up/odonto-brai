const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const emailRoutes = require("./routes/email");

app.use("/", express.json(), emailRoutes);

app.use("/", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("Running on port", PORT);
});
