const CRED_PARAMS = `app_id=${process.env.ADZUNA_APP_ID}&app_key=${process.env.ADZUNA_API_KEY}&results_per_page=20&what=javascript%20developer&content-type=application/json`;

async function getJobs(country) {
  if (!country) {
    throw new Error("Country is required");
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

module.exports = { getJobs };
