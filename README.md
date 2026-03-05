# 🌟 First PR Leaderboard

A beginner-friendly open-source project that helps developers make their **first contribution**.

Contributors add their profile to a JSON file. When their Pull Request is merged, their profile automatically appears on the project website.

The project also includes automated validation and build pipelines using GitHub Actions.

---

# 🚀 Project Goal

Many developers want to contribute to open source but don't know where to begin.

This project provides a **very simple first contribution** where you only need to add your profile information.

Once merged:

* Your profile appears on the website
* Your GitHub avatar is displayed
* Your contribution is recorded

---

# 🛠 Tech Stack

* React
* Node.js
* JSON
* GitHub Actions
* Git

---

# 📂 Project Structure

```
project-root
│
├── public
|   └── contributors.json
|   └── images/
├── package.json
├── README.md
├── src
│   └── components
│       └── Contributors.jsx
│       └── Header.jsx
│       └── Footer.jsx
│
└── .github
    └── scripts
        └── checkContributor.js
    └── workflows
        └── ci.yml
```

---

# 🏆 Contributor Leaderboard

All contributors appear on the project website with:

* GitHub avatar
* Name
* Bio
* Skills
* Contribution ranking

Example contributor card:

```
[Avatar]

Mahadev
Engineering Student
Skills: React, Node, MongoDB
```

---

# 🤖 Automation

Every Pull Request automatically runs a CI pipeline that:

1. Validates `contributors.json`
2. Runs project checks
3. Builds the React application

If any step fails, the Pull Request will not be merged.

---

# 🤝 Want to Contribute?

Great!

Read the contribution guide here:

👉 **CONTRIBUTING.md**

---

# 📜 License

This project is open source and available under the MIT License.

---

# ⭐ Support the Project

If you like this project:

* Star the repository
* Fork the project
* Submit your first Pull Request

Happy contributing!
