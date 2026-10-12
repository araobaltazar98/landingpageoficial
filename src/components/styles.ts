/**
 * Classes compartilhadas da identidade "Relatório".
 * Regra: um único botão Sinal (laranja) por tela; ações secundárias usam contorno Tinta.
 */
export const buttonPrimary =
  "inline-flex items-center justify-center gap-2 rounded-md bg-signal px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-signal-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export const buttonSecondary =
  "inline-flex items-center justify-center gap-2 rounded-md border border-ink px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export const sectionClass = "px-6 py-24 lg:px-8 lg:py-28";

export const containerClass = "mx-auto max-w-6xl";

export const headingClass =
  "max-w-3xl text-balance font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl";

export const bodyClass = "leading-relaxed text-graphite sm:text-lg";
