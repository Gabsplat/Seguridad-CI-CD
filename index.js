const express = require("express");
require("dotenv").config();
const { getJobs, getJobCategories } = require("./services/jobService");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({
    description: "TP 2 Seguridad + Github Actions + Adzuna API",
    members: [
      "Matías Ongay",
      "Matías Vera",
      "Gabriel Pérez Diez",
      "Germán Hidalgo",
    ],
  });
});

app.get("/jobs/:country", async (req, res) => {
  const { country } = req.params;
  console.log(country);
  let jobs;
  try {
    jobs = await getJobs(country);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
  res.send(jobs);
});

app.get("/jobs/:country/category", async (req, res) => {
  const { country } = req.params;
  console.log(country);
  let jobs;
  try {
    jobs = await getJobCategories(country);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
  res.send(jobs);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
