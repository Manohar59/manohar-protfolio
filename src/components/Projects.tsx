import { Github, ExternalLink } from "lucide-react";
import projectSms from "@/assets/project_sms.jpg";
import projectLab from "@/assets/project_lab.jpg";
import projectDriver from "@/assets/project_driver.jpg";
import projectFace from "@/assets/project_face.jpg";
import projectNetflix from "@/assets/project_netflix.webp";

const Projects = () => {
  const projects = [
    {
      title: "Scam SMS Detection",
      image: projectSms,
      github: "https://github.com/Manohar59/codsoft",
      demo: "https://github.com/Manohar59/codsoft",
    },
    {
      title: "Online Diagnostic Reporting",
      image: projectLab,
      github: "https://github.com/Manohar59/online_diagnostic_reporting",
      demo: "https://github.com/Manohar59/online_diagnostic_reporting",
    },
    {
      title: "Drowsiness Detection System",
      image: projectDriver,
      github: "https://github.com/Manohar59/drowsiness-detection-system",
      demo: "https://github.com/Manohar59/drowsiness-detection-system",
    },
    {
      title: "Face Recognition Attendance System",
      image: projectFace,
      github: "https://github.com/Manohar59/Face-Recognition-Attendance-Management-System",
      demo: "https://github.com/Manohar59/Face-Recognition-Attendance-Management-System",
    },
    {
      title: "Netflix Data Analysis",
      image: projectNetflix,
      github: "https://github.com/Manohar59/VOIS_AICTE_Oct2025_MajorProject_Kathi-Manohar",
      demo: "https://github.com/Manohar59/VOIS_AICTE_Oct2025_MajorProject_Kathi-Manohar",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <p className="section-subtitle">Browse My Recent</p>
        <h2 className="section-title">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="h-48 rounded-xl mb-6 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-semibold mb-4 text-center">
                {project.title}
              </h3>

              {/* Buttons */}
              <div className="flex justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center gap-2 text-sm py-2 px-4"
                >
                  <Github size={18} />
                  Github
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 text-sm py-2 px-4"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
