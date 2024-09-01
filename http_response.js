const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/miarchivo", (req, res) => {
  res.sendFile("./image1.jpg", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "JT24",
    lastname: "Tael",
    age: 29,
    points: [1, 2, 3],
    adress: {
      city: "LONDON",
      street: "some steet 123",
    },
  });
});

app.get("/isalive", (req, res) => {
    res.sendStatus(204);
  });

app.listen(3000);
console.log(`Server on port ${3000}`);
