require("dotenv").config();

const { getJobs, getJobCategories } = require("../services/jobService");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);

describe("Get Jobs", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("Shouldn't get jobs if country is not provided", async () => {
    await expect(() => getJobs()).rejects.toThrow(Error);
  });

  test("Shouldn't get jobs if country code is not supported", async () => {
    const country = "ss"; // not supported country code (SOUTH SUDAN)
    await expect(() => getJobs(country)).rejects.toThrow(Error);
  });

  test("Should get jobs if everything is provided and correct", async () => {
    const country = "es"; // supported country code (SPAIN)

    const spyFetch = jest.spyOn(global, "fetch");

    await getJobs(country);

    expect(spyFetch).toHaveBeenCalled();
  });
});

describe("Get Job Categories", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("Shouldn't get job categories if country is not provided", async () => {
    await expect(getJobCategories()).rejects.toThrow(Error);
  });

  test("Shouldn't get jobs categories if country code is not supported", async () => {
    const country = "ss"; // not supported country code (SOUTH SUDAN)
    await expect(getJobCategories(country)).rejects.toThrow(Error);
  });

  test("Should get jobs categories if everything is provided and correct", async () => {
    const country = "es"; // supported country code (SPAIN)

    const spyFetch = jest.spyOn(global, "fetch");

    await getJobCategories(country);

    expect(spyFetch).toHaveBeenCalled();
  });
});
