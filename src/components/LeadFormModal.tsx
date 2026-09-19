"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLeadForm } from "@/components/LeadFormContext";
import { WhatsappIcon } from "@/components/icons";
import { contact, investmentRanges } from "@/data/content";
import { pushEvent, pushThankYouPageview, restoreHomePath } from "@/lib/gtm";

const initialState = {
  nome: "",
  whatsapp: "",
  clinica: "",
  cidadeEstado: "",
  procedimento: "",
  investimento: "",
  gargalo: "",
  consentimento: false,
};

export default function LeadFormModal() {
  const { isOpen, origin, close } = useLeadForm();
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleClose() {
    restoreHomePath();
    setSubmitted(false);
    setForm(initialState);
    close();
  }

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const message = [
      "Olá, gostaria de solicitar um diagnóstico estratégico para minha clínica.",
      `Nome: ${form.nome}`,
      `WhatsApp: ${form.whatsapp}`,
      `Clínica: ${form.clinica}`,
      `Cidade e estado: ${form.cidadeEstado}`,
      `Principal procedimento: ${form.procedimento}`,
      `Investimento mensal em mídia: ${form.investimento}`,
      `Principal gargalo atual: ${form.gargalo}`,
    ].join("\n");

    pushEvent({
      event: "generate_lead",
      form_location: origin ?? "unknown",
      lead_channel: "whatsapp",
      form_id: "qualified_lead_form",
      investment_range: form.investimento,
    });
    pushThankYouPageview({ form_location: origin ?? "unknown" });

    const url = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
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
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-border bg-surface p-8"
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Fechar"
              className="absolute right-5 top-5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="py-4 text-center">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent"
                >
                  <Check size={28} strokeWidth={2.5} />
                </motion.div>
                <h2
                  id="lead-form-title"
                  className="mt-6 text-xl font-medium tracking-tight text-foreground"
                >
                  Solicitação enviada!
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Recebi sua solicitação. Vou analisar as informações e, se
                  houver aderência, entrarei em contato pelo WhatsApp para
                  explicar os próximos passos. Abri o WhatsApp para a gente
                  continuar por lá — se não abriu, é só clicar no botão
                  abaixo.
                </p>
                <a
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
                >
                  <WhatsappIcon size={16} />
                  Abrir o WhatsApp
                </a>
              </div>
            ) : (
              <>
                <h2
                  id="lead-form-title"
                  className="text-xl font-medium tracking-tight text-foreground"
                >
                  Solicitar diagnóstico estratégico
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Preencha os dados abaixo para eu analisar a aderência da
                  sua clínica. A solicitação não representa contratação
                  automática.
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
                      onChange={(e) =>
                        setForm({ ...form, whatsapp: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="clinica"
                      className="mb-1.5 block text-xs font-medium text-muted-foreground"
                    >
                      Nome da clínica
                    </label>
                    <input
                      id="clinica"
                      type="text"
                      required
                      value={form.clinica}
                      onChange={(e) =>
                        setForm({ ...form, clinica: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                      placeholder="Sua clínica"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cidadeEstado"
                      className="mb-1.5 block text-xs font-medium text-muted-foreground"
                    >
                      Cidade e estado
                    </label>
                    <input
                      id="cidadeEstado"
                      type="text"
                      required
                      value={form.cidadeEstado}
                      onChange={(e) =>
                        setForm({ ...form, cidadeEstado: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                      placeholder="São Paulo, SP"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="procedimento"
                      className="mb-1.5 block text-xs font-medium text-muted-foreground"
                    >
                      Principal procedimento da clínica
                    </label>
                    <input
                      id="procedimento"
                      type="text"
                      required
                      value={form.procedimento}
                      onChange={(e) =>
                        setForm({ ...form, procedimento: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                      placeholder="Ex: mamoplastia, lipoaspiração..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="investimento"
                      className="mb-1.5 block text-xs font-medium text-muted-foreground"
                    >
                      Faixa de investimento mensal em mídia
                    </label>
                    <select
                      id="investimento"
                      required
                      value={form.investimento}
                      onChange={(e) =>
                        setForm({ ...form, investimento: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    >
                      <option value="" disabled>
                        Selecione uma faixa
                      </option>
                      {investmentRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="gargalo"
                      className="mb-1.5 block text-xs font-medium text-muted-foreground"
                    >
                      Principal gargalo atual
                    </label>
                    <input
                      id="gargalo"
                      type="text"
                      required
                      value={form.gargalo}
                      onChange={(e) =>
                        setForm({ ...form, gargalo: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                      placeholder="Ex: não sei o CAC por procedimento"
                    />
                  </div>

                  <label className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground">
                    <input
                      type="checkbox"
                      required
                      checked={form.consentimento}
                      onChange={(e) =>
                        setForm({ ...form, consentimento: e.target.checked })
                      }
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-accent"
                    />
                    Autorizo o uso dos meus dados para analisar esta
                    solicitação e para contato sobre esta consultoria.
                  </label>

                  <button
                    type="submit"
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
                  >
                    <WhatsappIcon size={16} />
                    Enviar para análise
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
