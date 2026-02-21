import { Github, Linkedin, Download, Mail, Eye } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="profile"
      className="min-h-[80vh] flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image with Blob Background */}
          <div className="relative floating-animation">
            {/* Blob shape behind the image */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <svg viewBox="0 0 500 500" className="w-[120%] h-[120%] absolute" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99.5,351Q40,295,40,230Q40,165,86,107.5Q132,50,202,5.5Q272,-39,331,27Q390,93,428,156.5Q466,220,440.5,320.5Z"
                  fill="hsl(var(--primary) / 0.3)"
                />
              </svg>
            </div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl relative z-10">
              <img
                src={profileImage}
                alt="Kathi Manohar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left fade-in">
            <p className="text-muted-foreground text-lg mb-2">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Kathi Manohar</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium mb-8">
              Full Stack Developer
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a
                href="/Manohar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <Eye size={20} />
                View Resume
              </a>
              <a
                href="/Manohar_Resume.pdf"
                download
                className="btn-outline flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a href="#contact" className="btn-primary flex items-center gap-2">
                <Mail size={20} />
                Contact Info
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://www.linkedin.com/in/kathi-manohar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Manohar59"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
