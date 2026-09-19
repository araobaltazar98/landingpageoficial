"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { pushEvent, type FormLocation } from "@/lib/gtm";

type LeadFormContextValue = {
  isOpen: boolean;
  origin: FormLocation | null;
  open: (location?: FormLocation) => void;
  close: () => void;
};

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

export function LeadFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [origin, setOrigin] = useState<FormLocation | null>(null);

  const value = useMemo(
    () => ({
      isOpen,
      origin,
      open: (location?: FormLocation) => {
        setOrigin(location ?? null);
        setIsOpen(true);
        pushEvent({
          event: "lead_form_open",
          form_location: location ?? "unknown",
        });
      },
      close: () => setIsOpen(false),
    }),
    [isOpen, origin],
  );

  return (
    <LeadFormContext.Provider value={value}>{children}</LeadFormContext.Provider>
  );
}

export function useLeadForm() {
  const ctx = useContext(LeadFormContext);
  if (!ctx) {
    throw new Error("useLeadForm must be used within a LeadFormProvider");
  }
  return ctx;
}
