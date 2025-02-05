const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello, Azure! Your Node.js app is running successfully.");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
const appInsights = require('applicationinsights');
appInsights.setup('YOUR-INSTRUMENTATION-KEY').start(); // Replace with your key
