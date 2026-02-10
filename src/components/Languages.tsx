import { Globe } from "lucide-react";

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Telugu", level: "Native" },
  { name: "Hindi", level: "Fluent" },
];

const Languages = () => {
  return (
    <section id="languages" className="py-20 px-4 md:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-subtitle">Communication</p>
          <h2 className="section-title">Languages</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="glass-card p-6 rounded-xl flex items-center gap-4 min-w-[200px]"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{lang.name}</h3>
                <p className="text-muted-foreground text-sm">{lang.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
