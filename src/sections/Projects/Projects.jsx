import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../data/projects";
import "./projects.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Selected Work
        </motion.h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
