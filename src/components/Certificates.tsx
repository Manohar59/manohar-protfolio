import { Award, Download, ExternalLink } from "lucide-react";

const internshipCertificates = [
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
  {
    title: "Python Programming",
    company: "CodeAlpha",
    file: "/certificates/Manohar_Codealpha.pdf",
  },
  {
    title: "Java Programming",
    company: "Vaultofcodes",
    file: "/certificates/Manohar_Vaultofcodes_Certificate.pdf",
  },
];

const professionalCertificates = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    company: "Oracle",
    file: "/certificates/Manohar_oracle_certificate_pdf.pdf",
  },
  {
    title: "Infosys Springboard Certification",
    company: "Infosys",
    file: "/certificates/Manohar_Infosys_springbroad.pdf",
  },
  {
    title: "Data Analytics",
    company: "OneRoadMap",
    file: "/certificates/Data_Analyst_OneRoadMap-Certificate.pdf",
  },
  {
    title: "Data Analytics Job Simulation",
    company: "Forage (Deloitte)",
    file: "/certificates/Deolite_Data_Analytics.pdf",
  },
  {
    title: "Introduction to Artificial Intelligence",
    company: "IBM",
    file: "/certificates/IBM_certificate_AI.pdf",
  },
];

const CertCard = ({ cert }: { cert: { title: string; company: string; file: string } }) => (
  <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 rounded-lg bg-primary/10 text-primary">
        <Award className="w-6 h-6" />
      </div>
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
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
);

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Internship Certificates */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Internship Certificates
          </h2>
          <p className="text-muted-foreground text-lg">
            Certifications from my internship experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internshipCertificates.map((cert, index) => (
            <CertCard key={index} cert={cert} />
          ))}
        </div>

        {/* Professional Certificates */}
        <div className="text-center mb-16 mt-20">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Professional Certificates
          </h2>
          <p className="text-muted-foreground text-lg">
            Industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {professionalCertificates.map((cert, index) => (
            <CertCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
