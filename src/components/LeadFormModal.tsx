"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useLeadForm } from "@/components/LeadFormContext";
import { WhatsappIcon } from "@/components/icons";
import { contact } from "@/data/content";

const initialState = { nome: "", whatsapp: "", empresa: "" };

export default function LeadFormModal() {
  const { isOpen, close } = useLeadForm();
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const message = [
      "Olá, gostaria de agendar uma consultoria estratégica para minha clínica.",
      `Nome: ${form.nome}`,
      `WhatsApp: ${form.whatsapp}`,
      `Empresa: ${form.empresa}`,
    ].join("\n");

    const url = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setForm(initialState);
    close();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-form-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md rounded-2xl border border-border bg-surface p-8"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="absolute right-5 top-5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X size={20} />
            </button>

            <h2
              id="lead-form-title"
              className="text-xl font-medium tracking-tight text-foreground"
            >
              Me conta sobre a sua clínica
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Preencha os dados abaixo e eu te chamo direto no WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="nome"
                  className="mb-1.5 block text-xs font-medium text-muted-foreground"
                >
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="whatsapp"
                  className="mb-1.5 block text-xs font-medium text-muted-foreground"
                >
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label
                  htmlFor="empresa"
                  className="mb-1.5 block text-xs font-medium text-muted-foreground"
                >
                  Nome da empresa
                </label>
                <input
                  id="empresa"
                  type="text"
                  required
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="Sua empresa"
                />
              </div>

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
              >
                <WhatsappIcon size={16} />
                Enviar pelo WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
