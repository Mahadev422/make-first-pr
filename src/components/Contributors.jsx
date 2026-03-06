import { useEffect, useState } from "react";

export default function Contributors() {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    fetch("/make-first-pr/contributors.json")
      .then((res) => res.json())
      .then((data) => setContributors(data));
  }, []);
  
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-10">
        Project Contributors
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {contributors.map((user, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
          >
            <img
              src={`https://github.com/${user.github}.png`}
              alt={user.github}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />

            <h2 className="text-xl font-semibold">{user.github}</h2>

            <a
              href={`https://github.com/${user.github}`}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              GitHub Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
