import { motion } from "framer-motion";
import { educationData, achievementsData } from "../../data/education";
import "./education.css";

export default function Education() {
    return (
        <section className="education" id="education">
            <div className="education-container">

                {/* Education Column */}
                <motion.div
                    className="edu-column"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Education</h2>
                    <div className="edu-list">
                        {educationData.map((item, index) => (
                            <div key={index} className="edu-item">
                                <h3 className="edu-institution">{item.institution}</h3>
                                <p className="edu-degree">{item.degree}</p>
                                <div className="edu-meta">
                                    <span>{item.period}</span>
                                    <span>{item.location}</span>
                                </div>
                                {item.details.map((detail, i) => (
                                    <p key={i} className="edu-gpa">{detail}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Achievements Column */}
                <motion.div
                    className="achieve-column"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="section-title">Achievements</h2>
                    <div className="achieve-list">
                        {achievementsData.map((item, index) => (
                            <div key={index} className="achieve-item">
                                <div className="achieve-header">
                                    <h3 className="achieve-title">{item.title}</h3>
                                    <span className="achieve-result">{item.result}</span>
                                </div>
                                <p className="achieve-desc">{item.description}</p>
                                <span className="achieve-date">{item.date}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
