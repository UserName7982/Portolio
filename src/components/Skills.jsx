import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "TailWind Css", level: 90, category: "Frontend" },
  { name: "Spring Boot", level: 90, category: "Frontend" },

  { name: "Java", level: 90, category: "BackEnd" },
  { name: "Spring Security", level: 90, category: "BackEnd" },
  { name: "MySql", level: 95, category: "BackEnd" },

  { name: "VS Code", level: 95, category: "Tools" },
  { name: "Git/GitHub", level: 95, category: "Tools" },
];
export const Skills = () => {
  const categorys = ["All", "Frontend", "BackEnd", "Tools"];
  const [activeCategory, setActiveCategory] = useState("All");
  const filterskill = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );
  console.log(filterskill);
  
  return (
    <section id="skills">
      <div className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My
            <span className="text-primary"> Skills</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categorys.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-primary hover:bd-secondary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterskill.map((skill, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div>
                  <div className="text-left mb-4">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-primary rounded-full h-2 origin-left animate-[grow_0.5s_ease-in-out]"
                        style={{ width: skill.level + "%" }}
                      />
                    </div>
                    <div className="text-right mt-1">
                      <span className="rext-sm text-muted-foreground ">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
