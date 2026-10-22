import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#inicio" className="footer-brand">LM<span>®</span></a>
      <p>Projetado e desenvolvido com curiosidade.</p>
      <a href="#inicio" className="footer-top">VOLTAR AO TOPO <ArrowUpRight size={14} /></a>
      <span className="footer-copy">© {new Date().getFullYear()} Letícia Moreira</span>
    </footer>
  );
}