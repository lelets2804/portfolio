import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";

export default function Contact() {
  return (
    <section className="contact-section section" id="contato">
      <div className="contact-grid">
        <div>
          <span className="eyebrow">04 / CONTATO</span>
          <h2>Tem uma ideia?<br /><span className="gradient-text">Vamos construir.</span></h2>
          <p>Estou aberta a oportunidades, colaborações e projetos que conectem tecnologia e criatividade.</p>
        </div>

        <motion.div className="contact-panel" whileHover={{ rotateX: 2, rotateY: -2 }} transition={{ type: "spring", stiffness: 180, damping: 18 }}>
          <span className="contact-index">LET'S CONNECT</span>

          <a href="mailto:SEU_EMAIL_AQUI" className="contact-link">
            <span><Mail size={19} /> E-mail</span>
            <ArrowUpRight size={19} />
          </a>

          <a href="https://www.linkedin.com/in/let%C3%ADcia-moreira-abb609356/" target="_blank" rel="noreferrer" className="contact-link">
            <span><LinkedinIcon size={19} /> LinkedIn</span>
            <ArrowUpRight size={19} />
          </a>

          <a href="https://github.com/lelets2804" target="_blank" rel="noreferrer" className="contact-link">
            <span><GithubIcon size={19} /> GitHub</span>
            <ArrowUpRight size={19} />
          </a>

          <div className="contact-bottom">
            <span><span className="status-dot" /> Aberta a conexões</span>
            <ArrowDownRight size={20} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}