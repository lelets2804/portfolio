import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import GithubIcon from "./GithubIcon";
import Scene3D from "./Scene3D";

export default function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero-copy">
        <motion.div className="availability" initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <span className="status-dot" /> ESTUDANTE DE ENGENHARIA DE SOFTWARE
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
          Código com<br />intenção. <span className="gradient-text">Ideias<br className="desktop-break" /> sem limites.</span>
        </motion.h1>

        <motion.p className="hero-description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
          Sou Letícia, desenvolvedora em formação. Exploro a interseção entre software, design e tecnologia para transformar ideias em experiências digitais.
        </motion.p>

        <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <a href="#projetos" className="button-primary">Explorar projetos <ArrowUpRight size={17} /></a>
          <a href="https://github.com/lelets2804" target="_blank" rel="noreferrer" className="button-secondary"><GithubIcon size={17} /> GitHub</a>
        </motion.div>

        <div className="hero-meta">
          <div><strong>04<span>+</span></strong><small>PROJETOS EM DESTAQUE</small></div>
          <div><strong>WEB<span>·</span>IoT</strong><small>ÁREAS DE EXPLORAÇÃO</small></div>
          <div><strong>2023<span>—</span></strong><small>INÍCIO DA JORNADA EM TI</small></div>
        </div>
      </div>

      <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
        <div className="visual-grid" />
        <div className="visual-ring ring-one" />
        <div className="visual-ring ring-two" />
        <Scene3D />
        <div className="floating-note note-top"><span className="note-symbol">✳</span><span>DESIGN<br />MEETS CODE</span></div>
        <div className="floating-note note-bottom"><span className="note-pulse" /><span>ALWAYS<br />EXPLORING</span></div>
        <span className="visual-index">FIG. 001 — DIGITAL PLAYGROUND</span>
      </motion.div>

      <a href="#sobre" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
    </section>
  );
}