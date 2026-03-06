const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const owner = process.env.REPO_OWNER;
const repo = process.env.REPO_NAME;
const number = process.env.ITEM_NUMBER;
const type = process.env.ITEM_TYPE;
const user = process.env.USERNAME;

async function comment() {
  let message = "";

  if (type === "issue") {
    message = `
👋 Thanks @${user} for opening this issue!

Our maintainers will review it soon.

If you'd like to contribute, feel free to check **good first issues**.
`;
  }

  if (type === "pr") {
    message = `
🚀 Thanks @${user} for your Pull Request!

A maintainer will review it shortly.

Please make sure:
- Your code builds correctly
- You followed the contribution guidelines
`;
  }

  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: number,
    body: message,
  });

  console.log("Comment posted");
}

comment();
