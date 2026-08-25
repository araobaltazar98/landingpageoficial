"use client";

import type { ReactNode } from "react";
import { useLeadForm } from "@/components/LeadFormContext";

export default function LeadFormButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { open } = useLeadForm();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
