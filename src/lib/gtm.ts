/**
 * Helper para enviar eventos ao dataLayer do Google Tag Manager.
 * Os eventos aqui são consumidos por triggers de "Custom Event" no GTM.
 */

type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushEvent(payload: DataLayerEvent): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/** Caminho "virtual" da confirmação de cadastro, usado para rastreamento por URL. */
export const THANK_YOU_PATH = "/obrigado";

/**
 * Simula uma navegação para a página de obrigado sem recarregar o site:
 * troca a URL na barra de endereço e empurra um pageview virtual para o
 * dataLayer (trigger "History Change" ou evento personalizado no GTM).
 */
export function pushThankYouPageview(extra?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const url = window.location.origin + THANK_YOU_PATH;
  window.history.pushState({ thankYou: true }, "", THANK_YOU_PATH);
  pushEvent({
    event: "virtualPageview",
    page_path: THANK_YOU_PATH,
    page_location: url,
    page_title: "Cadastro feito",
    ...extra,
  });
}

/** Restaura a URL para a home depois que o pop-up de sucesso é fechado. */
export function restoreHomePath(): void {
  if (typeof window === "undefined") return;
  if (window.location.pathname === THANK_YOU_PATH) {
    window.history.replaceState({}, "", "/");
  }
}

/** Localização do CTA que originou a interação com o formulário. */
export type FormLocation = "navbar" | "hero" | "about" | "offer" | "contact";
