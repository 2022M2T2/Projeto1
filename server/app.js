const express = require("express");
const router = require("./router");

const app = express();

const port = 3000;

app.use(express.static("../client"));

app.use('/', router);

app.get("/doacao", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/src/screens/donate.html"));
});

app.listen(port, () => {
  console.log(`App running on http://127.0.0.1:${port}/`);
});
