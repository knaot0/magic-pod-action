const core = require("@actions/core");
const axios = require("axios").default;

const API_TOKEN = core.getInput("API_TOKEN");
const ORGANIZATION = core.getInput("ORGANIZATION");
const PROJECT = core.getInput("PROJECT");
const TEST_SETTINGS_NUMBER = core.getInput("TEST_SETTINGS_NUMBER");

const instance = axios.create({
  baseURL: "https://magic-pod.com/api/v1.0/",
  headers: { Authorization: `Token ${API_TOKEN}` },
});

const main = async () => {
  try {
    console.log(`wait until tests to be finished...`);

    const response = await instance.post(
      `/${ORGANIZATION}/${PROJECT}/cross-batch-run`,
      {
        test_settings_number: TEST_SETTINGS_NUMBER,
      }
    );

    console.log(response.data);
  } catch (error) {
    core.setFailed(error.message);
  }
};

main();
