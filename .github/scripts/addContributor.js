const fs = require("fs")

const username = process.env.GITHUB_USERNAME
const file = "../../public/contributors.json"

let contributors = []

if (fs.existsSync(file)) {
  contributors = JSON.parse(fs.readFileSync(file))
}

// check if contributor already exists
const exists = contributors.find(c => c.github === username)

if (!exists) {
  contributors.push({
    github: username
  })

  fs.writeFileSync(file, JSON.stringify(contributors, null, 2))

  console.log(`Added contributor: ${username}`)
} else {
  console.log(`Contributor already exists`)
}