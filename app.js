const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");

const homeRouter = require("./router/index");
app.use(express.static(path.join(__dirname, "public")));
app.use(homeRouter);

app.listen(port, () => {
  console.log("listening Port On :", port);
});
