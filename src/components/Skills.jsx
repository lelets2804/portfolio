import { motion } from "motion/react";
import { Braces, Database, Cpu } from "lucide-react";

const groups = [
  { title: "Desenvolvimento web", description: "Interfaces e aplicações web", icon: Braces, skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Vite"] },
  { title: "Programação e dados", description: "Lógica, dados e automação", icon: Database, skills: ["Python", "C++", "MySQL", "Pandas", "OpenCV"] },
  { title: "Ferramentas e hardware", description: "Prototipagem e colaboração", icon: Cpu, skills: ["Git", "GitHub", "Figma", "Arduino", "IoT", "Excel"] },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="habilidades">
      <div className="section-heading"><div><span className="eyebrow">03 / STACK TÉCNICA</span><h2>Ferramentas para<br /><span className="gradient-text">tirar ideias do papel.</span></h2></div><p>Uma base multidisciplinar que conecta desenvolvimento, programação e prototipagem.</p></div>
      <div className="skills-grid">{groups.map((group, index) => {
        const Icon = group.icon;
        return <motion.article className="skill-card" key={group.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.12 }} whileHover={{ y: -6 }}><div className="skill-icon"><Icon size={23} strokeWidth={1.5} /></div><span className="eyebrow">0{index + 1} / DISCIPLINE</span><h3>{group.title}</h3><p>{group.description}</p><div className="tag-list">{group.skills.map((skill) => <span key={skill} className="tech-tag">{skill}</span>)}</div></motion.article>;
      })}</div>
    </section>
  );
}