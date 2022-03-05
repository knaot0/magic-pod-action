const core = require("@actions/core");
const { execSync } = require("child_process");

const API_TOKEN = core.getInput("API_TOKEN");
const ORGANIZATION = core.getInput("ORGANIZATION");
const PROJECT = core.getInput("PROJECT");
const TEST_SETTINGS_NUMBER = core.getInput("TEST_SETTINGS_NUMBER");

const command = [
  "./magicpod-api-client",
  "batch-run",
  `-t ${API_TOKEN}`,
  `-o ${ORGANIZATION}`,
  `-p ${PROJECT}`,
  `-S ${TEST_SETTINGS_NUMBER}`,
].join(" ");

try {
  console.log(`wait until tests to be finished...`);
  execSync(command);
} catch (error) {
  core.setFailed(error.message);
}
