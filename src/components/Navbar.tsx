"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LinkedinIcon, InstagramIcon } from "@/components/icons";
import { contact } from "@/data/content";
import LeadFormButton from "@/components/LeadFormButton";
import { buttonSecondary } from "@/components/styles";

const links = [
  { href: "#sistema", label: "O que eu construo" },
  { href: "#resultados", label: "Resultados" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "Perguntas frequentes" },
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
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-paper/95 backdrop-blur-sm" : "border-transparent bg-paper"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" aria-label="Arão Baltazar — início" className="shrink-0">
          <Image
            src="/brand/arao-baltazar-logo-nome.svg"
            alt="Arão Baltazar"
            width={741}
            height={145}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-graphite transition-colors hover:text-ink"
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
            className="text-graphite transition-colors hover:text-ink"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-graphite transition-colors hover:text-ink"
          >
            <InstagramIcon size={18} />
          </a>
          <LeadFormButton
            location="navbar"
            className={`hidden sm:inline-flex ${buttonSecondary}`}
          >
            Agendar diagnóstico
          </LeadFormButton>
        </div>
      </nav>
    </header>
  );
}
