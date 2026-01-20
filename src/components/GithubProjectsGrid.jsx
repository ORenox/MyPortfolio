import { useEffect, useState } from "react";

// Configuración manual de proyectos que SÍ quieres mostrar
const featuredProjects = {
  "SudokuSolver": {
    image: "./pictures/sudoku.png",
    featured: true,
    
  },
  
  "UberFinanzas": {
    image: "./pictures/card1.png",
    featured: true,
    lenguajes:["Kotlin", "GoogleApis"]
  },
  "JavaBasedCropManagement": {
    image: "./pictures/loginScreen.png",
    featured: true,
    lenguajes:["Java", "MongoDB"]
  },
};

export default function GitHubProjectsGrid() {
  const [repos, setRepos] = useState([]);
  const GITHUB_USER = "ORenox";

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated`)
      .then((res) => res.json())
      .then((data) => {
        // Filtrar solo los repos que estén en featuredProjects
        const filtered = data.filter(
          (repo) => featuredProjects[repo.name]?.featured
        );
        setRepos(filtered);
      });
  }, []);

  return (
    <section className="max-w-6xl mx-auto">
      

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3  ">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-cardbg rounded-2xl shadow hover:shadow-xl transition overflow-hidden flex flex-col"
          >
            {/* Imagen del proyecto */}
            <img
              src={featuredProjects[repo.name].image}
              alt={repo.name}
              className="h-40 w-full object-cover"
            />

            <div className="p-5 flex flex-col grow">
              <h3 className="text-xl text-primary font-semibold mb-2">{repo.name}</h3>

              <p className="text-cardText text-sm grow">
                {repo.description || "Sin descripción"}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs bg-cardbg px-2 py-1 rounded">
                  {featuredProjects[repo.name]?.lenguajes?.join(", ") || repo.language || "N/A"}
                </span>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Ver en GitHub →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
