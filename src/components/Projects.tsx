import { Github, ExternalLink, AlertTriangle, CheckCircle, Brain, TrendingUp } from "lucide-react";
import projectSms from "@/assets/project_sms.jpg";
import projectLab from "@/assets/project_lab.jpg";
import projectDriver from "@/assets/project_driver.jpg";
import projectFace from "@/assets/project_face.jpg";
import projectNetflix from "@/assets/project_netflix.webp";
import projectLiveness from "@/assets/project_liveness.png";

const projects = [
  {
    title: "🎥 Face Liveness Detection System",
    image: projectLiveness,
    description: "Prevents spoof attacks by detecting real vs fake faces using real-time video input.",
    problem: "Spoof attacks using photos/videos",
    solution: "Real-time face verification using AI",
    tech: ["Python", "OpenCV", "Deep Learning"],
    impact: "Improves authentication security in real-world systems",
    github: "https://github.com/Manohar59/Face-Liveness-Detection-Major",
    demo: "https://github.com/Manohar59/Face-Liveness-Detection-Major",
  },
  {
    title: "📩 Scam SMS Detection",
    image: projectSms,
    description: "Detects and classifies spam or fraudulent SMS messages using machine learning models.",
    problem: "Rising scam SMS messages targeting users",
    solution: "ML-powered message classification system",
    tech: ["Python", "NLP", "Scikit-learn"],
    impact: "Helps users identify scam messages and improve digital safety",
    github: "https://github.com/Manohar59/codsoft",
    demo: "https://github.com/Manohar59/codsoft",
  },
  {
    title: "🏥 Online Diagnostic Reporting",
    image: projectLab,
    description: "Predicts potential diseases based on user symptoms using machine learning algorithms.",
    problem: "Delayed access to preliminary health insights",
    solution: "AI-based symptom analysis and prediction",
    tech: ["Python", "AI and Machine Learning", "Streamlit"],
    impact: "Provides quick preliminary health insights for users",
    github: "https://github.com/Manohar59/online_diagnostic_reporting",
    demo: "https://github.com/Manohar59/online_diagnostic_reporting",
  },
  {
    title: "😴 Drowsiness Detection System",
    image: projectDriver,
    description: "Monitors driver alertness in real-time using eye tracking and facial analysis.",
    problem: "Drowsy driving causes fatal accidents",
    solution: "Real-time eye tracking and alert system",
    tech: ["Python", "OpenCV", "Deep Learning", "dlib"],
    impact: "Reduces risk of accidents by alerting drowsy drivers",
    github: "https://github.com/Manohar59/drowsiness-detection-system",
    demo: "https://github.com/Manohar59/drowsiness-detection-system",
  },
  {
    title: "👤 Face Recognition Attendance System",
    image: projectFace,
    description: "Recognizes and verifies individuals using facial features for automated identification.",
    problem: "Manual attendance is slow and error-prone",
    solution: "Automated face recognition-based verification",
    tech: ["Python", "OpenCV", "Face Recognition"],
    impact: "Enables secure and automated attendance/verification systems",
    github: "https://github.com/Manohar59/Face-Recognition-Attendance-Management-System",
    demo: "https://github.com/Manohar59/Face-Recognition-Attendance-Management-System",
  },
  {
    title: "📊 Netflix Data Analysis",
    image: projectNetflix,
    description: "Analyzed Netflix dataset to uncover trends in content, genres, and user preferences.",
    problem: "Lack of insights into content strategy",
    solution: "Data-driven analysis of streaming patterns",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    impact: "Provides insights into content strategy and viewer patterns",
    github: "https://github.com/Manohar59/VOIS_AICTE_Oct2025_MajorProject_Kathi-Manohar",
    demo: "https://github.com/Manohar59/VOIS_AICTE_Oct2025_MajorProject_Kathi-Manohar",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <div
    className="glass-card overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_hsl(173_80%_50%/0.15),0_10px_40px_hsl(0_0%_0%/0.3)] fade-in"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Image */}
    <div className="w-full h-52 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col gap-3">
      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

      {/* Problem & Solution */}
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
          <p className="text-sm"><span className="text-amber-400 font-semibold">Problem:</span>{" "}
            <span className="text-muted-foreground">{project.problem}</span>
          </p>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <p className="text-sm"><span className="text-primary font-semibold">Solution:</span>{" "}
            <span className="text-muted-foreground">{project.solution}</span>
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex items-center gap-2 flex-wrap">
        <Brain className="w-4 h-4 text-primary shrink-0" />
        <span className="text-sm font-semibold text-primary">Tech:</span>
        {project.tech.map((t) => (
          <span key={t} className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/15 text-primary border border-primary/30">
            {t}
          </span>
        ))}
      </div>

      {/* Impact */}
      <div className="flex items-start gap-2">
        <TrendingUp className="w-4 h-4 text-primary mt-0.5 shrink-0" />
        <p className="text-sm"><span className="text-primary font-semibold">Impact:</span>{" "}
          <span className="text-muted-foreground">{project.impact}</span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-2">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(173_80%_50%/0.4)]"
          style={{ background: "var(--gradient-primary)" }}
        >
          🚀 Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-muted-foreground/30 text-foreground bg-transparent transition-all duration-300 hover:border-primary hover:text-primary hover:scale-105"
        >
          <Github size={16} />
          GitHub
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <p className="section-subtitle">Browse My Recent</p>
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
