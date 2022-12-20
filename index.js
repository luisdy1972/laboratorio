const { json } = require("express");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

data = [
  ({
    id: 1,
    coment: "bla, bla, bla",
    important: true,
  },
  {
    id: 2,
    coment: "bla, bla, bla",
    important: true,
  },
  {
    id: 3,
    coment: "bla, bla, bla",
    important: true,
  })
];

app.get("/", (req, res) => {
  res.send();
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`app runig en http://localhost:${port}`);
});
