const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.status(200).json({
    message: "Successful request!!!"
  });
});

app.listen(5001, function() {
  console.log("Listening on port 5001.");
});
