import { Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <p className="section-subtitle">Get To Know More</p>
        <h2 className="section-title">About Me</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Image */}
          <div className="flex justify-center fade-in">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden glass-card p-2">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-8xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="fade-in">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* Experience Card */}
              <div className="glass-card text-center">
                <Briefcase className="w-10 h-10 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-muted-foreground">Full Stack Development</p>
              </div>

              {/* Education Card */}
              <div className="glass-card text-center">
                <GraduationCap className="w-10 h-10 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground text-sm">
                  Final year Student, B.Tech in Computer Science & Data Science
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I'm a Full Stack Developer skilled in the MERN stack, passionate
              about building user-focused web applications. I create responsive
              UIs, integrate APIs, and deploy full-stack solutions with clean,
              scalable code. Curious about AI and emerging tech, I love
              exploring how they solve real-world problems. I value teamwork,
              innovation, and continuous learning in everything I do. Open to
              opportunities where I can grow and contribute to impactful
              projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
