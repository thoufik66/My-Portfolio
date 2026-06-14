import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fade";
import "./about.css";

export default function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I am an <strong>Electronics and Communication Engineering (ECE)</strong> undergraduate with a strong passion for web development and software engineering. I enjoy building systems that combine coding, data systems, and hardware.
          </p>
          <p>
            I focus on creating web applications using modern frameworks like the <strong>MERN stack (MongoDB, Express, React, Node)</strong>, alongside developing robust Java-based solutions. I've gained hands-on experience through internships supported by AICTE, working on responsive web applications and software workflows.
          </p>
          <p>
            I love finding the sweet spot where <strong>hardware meets software</strong>, whether that means working on IoT integrations, building database-driven applications, or optimizing systems for real-world usability.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
