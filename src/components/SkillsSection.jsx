import { useState } from "react";
import { cn } from "../lib/utils";

// --- Data (no changes needed here) ---
const skills = [
  // Linguagens e Frameworks
  { name: "HTML/CSS", level: 100, category: "Linguagens e Frameworks" },
  { name: "JavaScript", level: 100, category: "Linguagens e Frameworks" },
  { name: "React/Next.js", level: 90, category: "Linguagens e Frameworks" },
  { name: "Tailwind CSS", level: 90, category: "Linguagens e Frameworks" },
  { name: "Bootstrap", level: 75, category: "Linguagens e Frameworks" },
  { name: "Node.js", level: 75, category: "Linguagens e Frameworks" },
  { name: "Kotlin", level: 70, category: "Linguagens e Frameworks" },
  { name: "Spring Boot", level: 50, category: "Linguagens e Frameworks" },
  { name: "SQL", level: 75, category: "Linguagens e Frameworks" },

  // Ferramentas e Tecnologias
  { name: "Figma", level: 70, category: "Ferramentas e Tecnologias" },
  { name: "Git/GitHub", level: 85, category: "Ferramentas e Tecnologias" },
  { name: "Integração de APIs", level: 85, category: "Ferramentas e Tecnologias" },
  { name: "APIs RESTful", level: 65, category: "Ferramentas e Tecnologias" },
  { name: "Amazon Web Services", level: 50, category: "Ferramentas e Tecnologias" },

  // Idiomas
  { name: "Inglês", level: 100, category: "Idiomas" }
];

const categories = ["Todos", "Linguagens e Frameworks", "Ferramentas e Tecnologias", "Idiomas"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "Todos" || skill.category === activeCategory
  );

  return (
    <section 
      id="skills" 
      // Changed: Responsive padding for the whole section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-center">
          Minhas <span className="text-primary">Habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10 md:mb-16">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => (
            <div 
              key={key}
              // Changed: Responsive padding for the cards
              className="bg-card p-4 sm:p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" // Corrected typo
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};