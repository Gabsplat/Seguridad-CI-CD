const express = require("express");
require("dotenv").config();
const { getJobs } = require("./services/jobService");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("sxsx World!");
});

app.get("/jobs", async (req, res) => {
  const jobs = await getJobs("es");
  res.send(jobs);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
