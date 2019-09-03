const express = require("express");
const app = express();
const path = require("path");
const favicon = require("serve-favicon");
const fs = require("fs");
app.use(require("cors")());
app.use(require("body-parser").json());
app.use(require("body-parser").text());
app.use(express.static(path.join(__dirname, "../dist")));

app.post("/api/savefile", (req, res) => {
  var text = JSON.stringify(req.body);
  if (!fs.existsSync("./server/savefiles")) {
    fs.mkdirSync("./server/savefiles");
  }
  fs.writeFile("./server/savefiles/SaveFile", text, err => {
    if (err) throw err;
    res.send("success");
  });
});
app.get("/api/savefile", (req, res) => {
  try {
    fs.readFile("./server/savefiles/SaveFile", (err, data) => {
      if (data) {
        res.send(data);
      } else {
        res.send("");
      }
    });
  } catch {
    res.send("");
    return;
  }
});
app.post("/api/tempfile", (req, res) => {
  var text = JSON.stringify(req.body);
  if (!fs.existsSync("./server/savefiles")) {
    fs.mkdirSync("./server/savefiles");
  }
  fs.writeFile("./server/savefiles/TempFile", text, err => {
    if (err) throw err;
    res.send("success");
  });
});
app.get("/api/tempfile", (req, res) => {
  try {
    fs.readFile("./server/savefiles/TempFile", (err, data) => {
      if (data) {
        res.send(data);
      } else {
        res.send("");
      }
    });
  } catch {
    res.send("");
    return;
  }
});
app.get("/api/deleteAllFiles", (req, res) => {
  try {
    if (!fs.existsSync("./server/savefiles")) res.send("file not found!");
    fs.unlinkSync("./server/savefiles/TempFile", err => {
      if (err) throw err;
    });
    fs.unlinkSync("./server/savefiles/SaveFile", err => {
      if (err) throw err;
    });
    res.send("success");
  } catch {
    res.send("");
    return;
  }
});

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/index.html"), err => {
    if (err) res.status(500).send(err);
  });
});

app.listen(3000, () => console.log("Listening on port 3000"));
