"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLeadForm } from "@/components/LeadFormContext";
import { WhatsappIcon } from "@/components/icons";
import {
  contact,
  investmentRanges,
  leadForm,
  specialties,
} from "@/data/content";
import { pushEvent, pushThankYouPageview, restoreHomePath } from "@/lib/gtm";
import { buttonPrimary, buttonSecondary } from "@/components/styles";

const initialState = {
  nome: "",
  clinica: "",
  especialidade: "",
  cidade: "",
  whatsapp: "",
  investimento: "",
  consentimento: false,
};

type Field = keyof Omit<typeof initialState, "consentimento">;

const textFields: {
  id: Field;
  label: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
}[] = [
  { id: "nome", label: "Nome", type: "text", placeholder: "Seu nome", autoComplete: "name" },
  { id: "clinica", label: "Clínica", type: "text", placeholder: "Nome da clínica", autoComplete: "organization" },
];

const textFieldsAfterSpecialty: typeof textFields = [
  { id: "cidade", label: "Cidade", type: "text", placeholder: "São Paulo, SP", autoComplete: "address-level2" },
  { id: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "(11) 99999-9999", autoComplete: "tel" },
];

const inputClass =
  "w-full rounded-md border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-graphite/70 focus:border-ink";

const labelClass = "mb-1.5 block text-xs font-medium text-graphite";

type Result = { qualified: boolean; whatsappUrl: string };

export default function LeadFormModal() {
  const { isOpen, origin, close } = useLeadForm();
  const [form, setForm] = useState(initialState);
  const [result, setResult] = useState<Result | null>(null);

  function handleClose() {
    restoreHomePath();
    setResult(null);
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

    const qualified =
      investmentRanges.find((range) => range.label === form.investimento)
        ?.qualified ?? true;

    const message = [
      qualified
        ? "Olá, gostaria de agendar um diagnóstico do funil da minha clínica."
        : "Olá, tenho interesse em materiais para estruturar a captação da minha clínica.",
      `Nome: ${form.nome}`,
      `Clínica: ${form.clinica}`,
      `Especialidade: ${form.especialidade}`,
      `Cidade: ${form.cidade}`,
      `WhatsApp: ${form.whatsapp}`,
      `Investimento mensal em mídia: ${form.investimento}`,
    ].join("\n");

    const trackingPayload = {
      form_location: origin ?? "unknown",
      lead_channel: "whatsapp",
      form_id: "qualified_lead_form",
      investment_range: form.investimento,
      specialty: form.especialidade,
      lead_qualified: qualified,
    };

    // Só leads qualificados contam como conversão (generate_lead + /obrigado),
    // para a mídia otimizar para quem pode virar paciente.
    if (qualified) {
      pushEvent({ event: "generate_lead", ...trackingPayload });
      pushThankYouPageview({ form_location: origin ?? "unknown" });
    } else {
      pushEvent({ event: "lead_unqualified", ...trackingPayload });
    }

    const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setResult({ qualified, whatsappUrl });
  }

  const confirmation = result
    ? leadForm.confirmation[result.qualified ? "qualified" : "unqualified"]
    : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-ink/60"
            onClick={handleClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-form-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg border border-line bg-paper p-8"
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Fechar"
              className="absolute right-5 top-5 text-graphite transition-colors hover:text-ink"
            >
              <X size={20} />
            </button>

            {result && confirmation ? (
              <div className="py-4 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink">
                  <Check size={24} strokeWidth={2.25} />
                </div>
                <h2
                  id="lead-form-title"
                  className="mt-6 font-serif text-2xl font-medium tracking-tight text-ink"
                >
                  {confirmation.title}
                </h2>
                <p className="mt-3 leading-relaxed text-graphite">
                  {confirmation.text}
                </p>
                <p className="mt-6 text-xs leading-relaxed text-graphite">
                  {leadForm.confirmation.whatsappHint}
                </p>
                <a
                  href={result.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 w-full ${buttonSecondary} py-3`}
                >
                  <WhatsappIcon size={16} />
                  Enviar pelo WhatsApp
                </a>
              </div>
            ) : (
              <>
                <h2
                  id="lead-form-title"
                  className="pr-8 font-serif text-2xl font-medium tracking-tight text-ink"
                >
                  {leadForm.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  {leadForm.intro}
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {textFields.map((field) => (
                    <TextField
                      key={field.id}
                      {...field}
                      value={form[field.id]}
                      onChange={(value) => setForm({ ...form, [field.id]: value })}
                    />
                  ))}

                  <div>
                    <label htmlFor="especialidade" className={labelClass}>
                      Especialidade
                    </label>
                    <select
                      id="especialidade"
                      required
                      value={form.especialidade}
                      onChange={(e) =>
                        setForm({ ...form, especialidade: e.target.value })
                      }
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Selecione a especialidade
                      </option>
                      {specialties.map((specialty) => (
                        <option key={specialty} value={specialty}>
                          {specialty}
                        </option>
                      ))}
                    </select>
                  </div>

                  {textFieldsAfterSpecialty.map((field) => (
                    <TextField
                      key={field.id}
                      {...field}
                      value={form[field.id]}
                      onChange={(value) => setForm({ ...form, [field.id]: value })}
                    />
                  ))}

                  <div>
                    <label htmlFor="investimento" className={labelClass}>
                      Investimento mensal em mídia
                    </label>
                    <select
                      id="investimento"
                      required
                      value={form.investimento}
                      onChange={(e) =>
                        setForm({ ...form, investimento: e.target.value })
                      }
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Selecione uma faixa
                      </option>
                      {investmentRanges.map((range) => (
                        <option key={range.label} value={range.label}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label className="flex items-start gap-2.5 text-xs leading-relaxed text-graphite">
                    <input
                      type="checkbox"
                      required
                      checked={form.consentimento}
                      onChange={(e) =>
                        setForm({ ...form, consentimento: e.target.checked })
                      }
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-line accent-ink"
                    />
                    {leadForm.consent}
                  </label>

                  <button type="submit" className={`mt-2 w-full ${buttonPrimary}`}>
                    {leadForm.submitLabel}
                  </button>
                  <p className="text-center text-xs text-graphite">
                    {leadForm.responseNote}
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function TextField({
  id,
  label,
  type,
  placeholder,
  autoComplete,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
        placeholder={placeholder}
      />
    </div>
  );
}
