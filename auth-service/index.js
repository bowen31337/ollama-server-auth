const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey === "apikey") {
    console.log("Authorized");
    next();
  } else {
    console.log("Unauthorized");
    res.status(401).send("Unauthorized");
  }
});

// Capture all requests to /api/*
// In this setup, NGINX strips the /api prefix, so we listen for /*.
app.use("*", (req, res) => {
    res.json({ message: `Success! Authorized access to ${req.path}.` });
});

app.listen(PORT, () => {
  console.log(`Auth service listening at http://localhost:${PORT}`);
});
