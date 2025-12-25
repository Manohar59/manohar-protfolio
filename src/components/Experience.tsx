import { Check } from "lucide-react";

const Experience = () => {
  const frontendSkills = [
    "Python",
    "Java",
    "JavaScript",
    "SQL",
    "React",
    "Bootstrap & TailwindCSS",
  ];

  const backendSkills = [
    "Node JS",
    "Express JS",
    "MongoDB",
    "MySQL",
    "Mongoose",
    "RESTful APIs",
    "Git & Github",
  ];

  const coreSkills = ["Database Management", "OOP", "Data Structures & Algorithms"];

  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <p className="section-subtitle">Explore My</p>
        <h2 className="section-title">Experience</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Languages & Frontend */}
          <div className="glass-card fade-in">
            <h3 className="text-xl font-semibold text-center mb-6 gradient-text">
              Languages & Frontend
            </h3>
            <div className="grid gap-3">
              {frontendSkills.map((skill) => (
                <div key={skill} className="skill-badge">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend & Tools */}
          <div className="glass-card fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-semibold text-center mb-6 gradient-text">
              Backend & Tools
            </h3>
            <div className="grid gap-3">
              {backendSkills.map((skill) => (
                <div key={skill} className="skill-badge">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Concepts */}
          <div
            className="glass-card fade-in md:col-span-2 lg:col-span-1"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-xl font-semibold text-center mb-6 gradient-text">
              Core Concepts
            </h3>
            <div className="grid gap-3">
              {coreSkills.map((skill) => (
                <div key={skill} className="skill-badge">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
