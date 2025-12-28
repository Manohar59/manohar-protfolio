import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Full Stack Web Development",
    company: "Apexplanet Software Pvt Ltd",
    file: "/certificates/Apexplanet_Full_Stack_Certificate.pdf",
  },
  {
    title: "Data Analytics",
    company: "Oasis InfoByte",
    file: "/certificates/Kathi_Manohar_Oasis_Infobyte_Certificate.pdf",
  },
  {
    title: "Conversational Data Analysis with LLMs",
    company: "VOIs & Vodafone Idea Foundation",
    file: "/certificates/Manohar_Vois_Edunet.pdf",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Internship Certificates
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional certifications from my internship experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-sm">{cert.company}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
