
import { motion } from "motion/react";
import { ArrowUpRight, BookOpen, Code2, Cpu, Telescope } from "lucide-react";

const milestones = [
  { year: "2023", title: "Primeiros passos em TI", description: "Início do ensino médio técnico em Informática e contato com programação e tecnologia.", icon: Code2 },
  { year: "2024", title: "Astroview", description: "Desenvolvimento de um projeto educacional durante o segundo ano do ensino médio técnico, como preparação para o TCC.", icon: Telescope },
  { year: "2025", title: "Formação técnica", description: "Conclusão do ensino médio técnico e desenvolvimento de projetos acadêmicos.", icon: Cpu },
  { year: "2026", title: "Engenharia de Software", description: "Graduação na FIAP, aprofundando fundamentos de software e aplicações práticas.", icon: BookOpen },
];

export default function About() {
  return (
    <section className="section about-section" id="sobre">
      <div className="section-heading">
        <div>
          <span className="eyebrow">01 / SOBRE MIM</span>
          <h2>Aprender. Construir.<br /><span className="gradient-text">Evoluir sempre.</span></h2>
        </div>
        <p>Minha trajetória combina formação técnica, graduação e vontade de entender como a tecnologia pode resolver problemas reais.</p>
      </div>

      <div className="about-layout">
        <motion.div className="about-statement" initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="statement-mark">“</span>
          <p>Não quero apenas usar tecnologia. Quero entender como ela funciona e o que podemos construir com ela.</p>
          <span className="statement-caption">LETÍCIA MOREIRA / ESTUDANTE E DESENVOLVEDORA EM FORMAÇÃO</span>
          <div className="statement-decoration"><span>LM</span><div /></div>
        </motion.div>

        <div className="timeline">
          {milestones.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article className="timeline-item" key={item.year} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.12 }}>
                <div className="timeline-icon"><Icon size={19} /></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <a href="#habilidades" className="text-link">Conheça minha stack <ArrowUpRight size={16} /></a>
    </section>
  );
}
