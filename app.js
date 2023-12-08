const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/index");

app.set("view engine", "ejs");

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.render("home");
});

app.use(router);
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
