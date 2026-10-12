import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-graphite sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p>Estrategista Digital · Análise de Dados e Negócios em Saúde</p>
      </div>
    </footer>
  );
}
