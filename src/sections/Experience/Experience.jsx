import { motion } from "framer-motion";
import { experienceData } from "../../data/experience";
import "./experience.css";

export default function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="experience-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Professional Experience
                </motion.h2>

                <div className="timeline">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="timeline-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3 className="role">{item.role}</h3>
                                    <span className="company">{item.company}</span>
                                    <span className="period">{item.period}</span>
                                </div>
                                <ul className="timeline-description">
                                    {item.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
