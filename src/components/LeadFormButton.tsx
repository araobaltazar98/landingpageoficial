"use client";

import type { ReactNode } from "react";
import { useLeadForm } from "@/components/LeadFormContext";
import type { FormLocation } from "@/lib/gtm";

export default function LeadFormButton({
  children,
  className,
  location,
}: {
  children: ReactNode;
  className?: string;
  location?: FormLocation;
}) {
  const { open } = useLeadForm();
  return (
    <button type="button" onClick={() => open(location)} className={className}>
      {children}
    </button>
  );
}
