import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 px-6 max-w-6xl mx-auto scroll-mt-24 ${className}`}
    >
      {children}
    </section>
  );
}

