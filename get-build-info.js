import fs from "fs";
import { execSync } from "child_process";

// Get the last Git commit hash and message
const commitHash = execSync("git rev-parse --short HEAD").toString().trim();
const commitMessage = execSync("git log -1 --pretty=%B").toString().trim();
const commitDate = execSync("git log -1 --format=%cd --date=short")
  .toString()
  .trim();

// Get the deploy time (Netlify environment variable)
const deployTime = new Date().toISOString();

// Write to a JSON file to use in your Astro project
fs.writeFileSync(
  "./src/build-info.json",
  JSON.stringify(
    { commitHash, commitMessage, commitDate, deployTime },
    null,
    2,
  ),
);
