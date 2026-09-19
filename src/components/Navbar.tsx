"use client";

import { useEffect, useState } from "react";
import { LinkedinIcon, InstagramIcon } from "@/components/icons";
import { contact } from "@/data/content";
import LeadFormButton from "@/components/LeadFormButton";

const links = [
  { href: "#metodo", label: "Método" },
  { href: "#oferta", label: "A oferta" },
  { href: "#para-quem", label: "Pra quem é" },
  { href: "#faq", label: "Perguntas frequentes" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <a
          href="#top"
          className="text-sm font-medium tracking-tight text-foreground"
        >
          Arão Baltazar
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <InstagramIcon size={18} />
          </a>
          <LeadFormButton
            location="navbar"
            className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Fale comigo
          </LeadFormButton>
        </div>
      </nav>
    </header>
  );
}
