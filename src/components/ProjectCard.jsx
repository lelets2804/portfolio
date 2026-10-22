
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article className="project-card" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: index * 0.1 }} whileHover={{ y: -8, rotateX: 2 }} style={{ transformStyle: "preserve-3d" }}>
      <div className={`project-art art-${project.visual}`}>
        <div className="art-topline"><span>PROJECT / {project.number}</span><span>{project.year || "PORTFOLIO"} ↗</span></div>
        <div className="art-orbit orbit-a" />
        <div className="art-orbit orbit-b" />
        <div className="art-core"><span>{project.monogram}</span></div>
        <span className="art-caption">{project.category}</span>
        <span className="art-watermark">{project.number}</span>
      </div>
      <div className="project-content">
        <div className="project-title-row">
          <div>
            <span className="eyebrow">{project.category} {project.year && ` / ${project.year}`}</span>
            <h3>{project.title}</h3>
          </div>
          <a href="#contato" className="project-arrow" aria-label={`Conversar sobre ${project.title}`}><ArrowUpRight size={21} /></a>
        </div>
        <p>{project.description}</p>
        <div className="tag-list">{project.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}</div>
      </div>
    </motion.article>
  );
}
