import Image from "next/image";
import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-graphite sm:flex-row">
        <Image
          src="/brand/arao-baltazar-logo-principal.svg"
          alt="Arão Baltazar — Estrategista Digital · Dados e Negócios em Saúde"
          width={741}
          height={182}
          className="h-16 w-auto sm:h-20"
        />
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
