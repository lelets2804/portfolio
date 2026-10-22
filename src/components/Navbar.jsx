import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">L<span>M</span></span>
          <span className="brand-name">LETÍCIA MOREIRA<small>SOFTWARE ENGINEERING</small></span>
        </a>
        <nav className={`nav-links ${open ? "nav-open" : ""}`} aria-label="Navegação principal">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <a className="nav-contact" href="#contato" onClick={() => setOpen(false)}>Vamos conversar <ArrowUpRight size={16} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}