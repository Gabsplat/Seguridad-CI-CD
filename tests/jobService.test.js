const { getJobs } = require("../services/jobService");

test("Shouldn't get jobs if country is not provided", async () => {
  return await expect(() => getJobs()).rejects.toThrow(Error);
});

test("Shouldn't get jobs if country code is not supported", async () => {
  const country = "ss"; // not supported country code (SOUTH SUDAN)
  return await expect(() => getJobs(country)).rejects.toThrow(Error);
});

test("Should get jobs if everything is provided and correct", async () => {
  const country = "es"; // supported country code (SPAIN)
  return await expect(() => getJobs(country)).toBeDefined();
});
