const CRED_PARAMS = `app_id=${process.env.ADZUNA_APP_ID}&app_key=${process.env.ADZUNA_API_KEY}&results_per_page=20&what=javascript%20developer&content-type=application/json`;

const acceptedCountryCodes = [
  "gb",
  "us",
  "at",
  "au",
  "be",
  "br",
  "ca",
  "ch",
  "de",
  "es",
  "fr",
  "in",
  "it",
  "mx",
  "nl",
  "nz",
  "pl",
  "sg",
  "za",
];

async function getJobs(country) {
  if (!country || acceptedCountryCodes.indexOf(country) === -1) {
    throw new Error("Country is invalid");
  }

  const response = await fetch(
    `https://api.adzuna.com/v1/api/jobs/${country}/search/1?${CRED_PARAMS}`
  );
  const data = await response.json();

  if (data.exception) {
    throw new Error(data.exception);
  }

  return data;
}

async function getJobCategories(country) {
  if (!country || acceptedCountryCodes.indexOf(country) === -1) {
    throw new Error("Country is invalid");
  }

  const response = await fetch(
    `https://api.adzuna.com/v1/api/jobs/${country}/categories?${CRED_PARAMS}`
  );
  const data = await response.json();

  if (data.exception) {
    throw new Error(data.exception);
  }

  return data;
}

module.exports = { getJobs, getJobCategories };
