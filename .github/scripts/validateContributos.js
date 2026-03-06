const fs = require("fs");

const file = "public/contributors.json";

function validate() {
  try {
    const raw = fs.readFileSync(file, "utf8");
    const data = JSON.parse(raw);

    if (!Array.isArray(data)) {
      throw new Error("contributors.json must be an array");
    }

    const usernames = new Set();

    data.forEach((user, index) => {
      if (!user.github)
        throw new Error(`Contributor at index ${index} missing 'github'`);

      if (usernames.has(user.github))
        throw new Error(`Duplicate github username: ${user.github}`);

      usernames.add(user.github);

      if (typeof user.github !== "string")
        throw new Error(`'github' must be string at index ${index}`);
    });

    console.log("✅ contributors.json is valid");
  } catch (err) {
    console.error("❌ Validation failed:", err.message);
    process.exit(1);
  }
}

validate();
