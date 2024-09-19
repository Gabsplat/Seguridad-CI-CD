const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("sxsx World!");
});

app.get("/jobs", async (req, res) => {
  let url = `https://api.adzuna.com/v1/api/jobs/es/search/1?app_id=${process.env.ADZUNA_APP_ID}&app_key=${process.env.ADZUNA_API_KEY}&results_per_page=20&what=javascript%20developer&content-type=application/json`;

  let jobsReq = await fetch(url);
  let jobs = await jobsReq.json();

  res.send(jobs);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
