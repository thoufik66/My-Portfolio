import { motion } from "framer-motion";
import "./projects.css";

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            className={`project-card project-card-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="card-content">
                <div className="card-header">
                    <span className="card-category">{project.category}</span>
                    <h3 className="card-title">{project.title}</h3>
                </div>

                <p className="card-description">{project.description}</p>

                <ul className="card-details">
                    {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                    ))}
                </ul>

                <div className="card-tech">
                    {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                </div>

                <div className="card-links">
                    <a
                        href={project.links.github}
                        className="card-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    {/* <a href={project.links.demo} className="card-link" target="_blank" rel="noopener noreferrer">Live Demo</a> */}
                </div>
            </div>

            <div className={`card-gradient gradient-${index}`}></div>
        </motion.div>
    );
}
