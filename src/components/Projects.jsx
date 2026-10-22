
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    number: "01",
    title: "Apollo Rigor",
    year: "2026",
    category: "E-COMMERCE / VISÃO COMPUTACIONAL",
    monogram: "AR",
    visual: "apollo",
    description: "Experiência digital para moda de cerimônia, com foco em compra online e experimentação virtual integrada a um protótipo com ESP32-CAM.",
    technologies: ["React", "JavaScript", "ESP32-CAM", "IoT"],
  },
  {
    number: "02",
    title: "SnapTask",
    year: "2025",
    category: "MOBILE / FIAP × JOVI",
    monogram: "ST",
    visual: "snaptask",
    description: "Experiência de câmera com leitura de códigos, compartilhamento por QR Code, galeria, flashcards e recursos de acessibilidade.",
    technologies: ["React", "Vite", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "Áurea",
    year: "2025",
    category: "TCC / TECNOLOGIA APLICADA",
    monogram: "Á",
    visual: "aurea",
    description: "Conceito de espelho inteligente que conecta tecnologia e experiência pessoal, com proposta de sugestões de combinações de roupas.",
    technologies: ["React", "Tailwind CSS", "ESP32-CAM"],
  },
  {
    number: "04",
    title: "OrbitalFire",
    year: "2025",
    category: "IOT / MONITORAMENTO AMBIENTAL",
    monogram: "OF",
    visual: "orbital",
    description: "Projeto de prevenção de queimadas que combina sensores, microcontroladores e dados meteorológicos.",
    technologies: ["Python", "Arduino", "IoT", "APIs"],
  },
  {
    number: "05",
    title: "Astroview",
    year: "2024",
    category: "DESENVOLVIMENTO / EDUTEC",
    monogram: "AV",
    visual: "astroview",
    description: "Projeto educacional desenvolvido no contexto da EDUTEC, com foco em astronomia e exploração visual do universo.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section className="section projects-section" id="projetos">
      <div className="section-heading">
        <div>
          <span className="eyebrow">02 / PROJETOS SELECIONADOS</span>
          <h2>Ideias em <span className="gradient-text">movimento.</span></h2>
        </div>
        <a href="https://github.com/lelets2804" target="_blank" rel="noreferrer" className="text-link">Explorar GitHub <ArrowUpRight size={17} /></a>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}
      </div>
    </section>
  );
}
