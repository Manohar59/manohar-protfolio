import { Mail, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <p className="section-subtitle">Get in Touch</p>
        <h2 className="section-title">Contact Me</h2>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12 flex-wrap">
          {/* Email */}
          <a
            href="mailto:kathimanohar621@gmail.com"
            className="glass-card flex items-center gap-4 hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">kathimanohar621@gmail.com</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kathi-manohar"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex items-center gap-4 hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Linkedin size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">LinkedIn</p>
              <p className="font-medium">kathi-manohar</p>
            </div>
          </a>

          {/* Location */}
          <div className="glass-card flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">Hyderabad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
