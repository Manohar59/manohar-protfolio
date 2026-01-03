import { Award, Download, ExternalLink } from "lucide-react";

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
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Award className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{cert.company}</p>
              <div className="flex gap-2 flex-wrap">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors text-sm font-medium cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  View
                </a>
                <a
                  href={cert.file}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
