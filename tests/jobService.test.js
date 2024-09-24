require("dotenv").config();

const { getJobs, getJobCategories } = require("../services/jobService");

describe("Get Jobs", () => {
  test("Shouldn't get jobs if country is not provided", async () => {
    return await expect(() => getJobs()).rejects.toThrow(Error);
  });

  test("Shouldn't get jobs if country code is not supported", async () => {
    const country = "ss"; // not supported country code (SOUTH SUDAN)
    return await expect(() => getJobs(country)).rejects.toThrow(Error);
  });

  test("Should get jobs if everything is provided and correct", async () => {
    const country = "es"; // supported country code (SPAIN)
    const jobs = await getJobs(country);
    await expect(jobs).toHaveProperty("results");
  });
});

describe("Get Job Categories", () => {
  test("Shouldn't get job categories if country is not provided", async () => {
    await expect(getJobCategories()).rejects.toThrow(Error);
  });

  test("Shouldn't get jobs categories if country code is not supported", async () => {
    const country = "ss"; // not supported country code (SOUTH SUDAN)
    await expect(getJobCategories(country)).rejects.toThrow(Error);
  });

  test("Should get jobs categories if everything is provided and correct", async () => {
    const country = "es"; // supported country code (SPAIN)
    const jobCategories = await getJobCategories(country);
    await expect(jobCategories).toHaveProperty("results");
  });
});
