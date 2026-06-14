import "./hero.css";
import profileImg from "../../assets/images/profile_pic.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-eyebrow">
            Hello, I'm Mohammed Thoufik
          </div>
          <h1 className="hero-title">
            Building modern <span className="highlight">software</span>
            <br />
            from <span className="highlight">design</span> to <span className="highlight">deployment</span>.
          </h1>

          <p className="hero-subtitle">
            I am a Full Stack Developer and ECE undergraduate specializing in building scalable MERN stack web applications and developing robust Java backend systems.
          </p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a href="#projects" className="btn btn-primary">View Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="image-glow"></div>
          <img src={profileImg} alt="Mohammed Thoufik Shareef" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
}
