import { useState } from "react";
import { cn } from "@/lib/utils";

// Use devicon class names or SVG/icon components here
const skills = [
  // Frontend
  { name: "HTML", icon: "devicon-html5-plain", category: "frontend" },
  { name: "CSS", icon: "devicon-css3-plain", category: "frontend" },
  { name: "JavaScript", icon: "devicon-javascript-plain", category: "frontend" },
  { name: "React", icon: "devicon-react-original", category: "frontend" },
  { name: "TypeScript", icon: "devicon-typescript-plain", category: "frontend" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", category: "frontend" },
  // { name: "Next.js", icon: "devicon-nextjs-original", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "devicon-nodejs-plain", category: "backend" },
  { name: "Express", icon: "devicon-express-original", category: "backend" },
  { name: "MongoDB", icon: "devicon-mongodb-plain", category: "backend" },
  // { name: "PostgreSQL", icon: "devicon-postgresql-plain", category: "backend" },
  // { name: "GraphQL", icon: "devicon-graphql-plain", category: "backend" },

  // Tools
  { name: "Git", icon: "devicon-git-plain", category: "tools" },
  { name: "GitHub", icon: "devicon-github-original", category: "tools" },
  // { name: "Docker", icon: "devicon-docker-plain", category: "tools" },
  { name: "Figma", icon: "devicon-figma-plain", category: "tools" },
  { name: "VS Code", icon: "devicon-vscode-plain", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 bg-card p-4 rounded-xl hover:shadow-md transition"
            >
              <i className={`${skill.icon} text-5xl`} />
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
