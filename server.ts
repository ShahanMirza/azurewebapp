const express = require("express");
// eslint-disable-next-line no-unused-vars
// const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
​
app.use(express.static(path.join(__dirname, "build")));
​
// This route serves the React app
const filePath = path.join(__dirname, "build", "index.html");
console.log(filePath);

app.get("*", (req, res) => res.sendFile(filePath));
​
app.listen(port, () => console.log(`Server listening on port ${port}`));