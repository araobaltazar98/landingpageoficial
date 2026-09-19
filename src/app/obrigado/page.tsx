import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Solicitação enviada — Arão Baltazar",
  description:
    "Recebi sua solicitação. Vou analisar as informações e, se houver aderência, entrarei em contato pelo WhatsApp.",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Check size={28} strokeWidth={2.5} />
        </div>
        <h1 className="mt-6 text-2xl font-medium tracking-tight text-foreground">
          Solicitação enviada!
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Recebi sua solicitação. Vou analisar as informações e, se houver
          aderência, entrarei em contato pelo WhatsApp para explicar os
          próximos passos. Já abri o WhatsApp para a gente continuar por lá —
          se não abriu, me chama pelo botão abaixo.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
        >
          Voltar ao site
        </Link>
      </div>
    </main>
  );
}
