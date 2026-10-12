import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { leadForm } from "@/data/content";
import { buttonSecondary } from "@/components/styles";

export const metadata: Metadata = {
  title: "Solicitação enviada — Arão Baltazar",
  description: leadForm.confirmation.qualified.text,
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  const { title, text } = leadForm.confirmation.qualified;

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="w-full max-w-md rounded-lg border border-line p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink">
          <Check size={24} strokeWidth={2.25} />
        </div>
        <h1 className="mt-6 font-serif text-2xl font-medium tracking-tight text-ink">
          {title}
        </h1>
        <p className="mt-3 leading-relaxed text-graphite">{text}</p>
        <Link href="/" className={`mt-8 ${buttonSecondary} px-6 py-3`}>
          Voltar ao site
        </Link>
      </div>
    </main>
  );
}
