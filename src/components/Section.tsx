import type { ReactNode } from 'react';
import SectionHeading from './SectionHeading';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="py-16 md:py-24 px-4 border-t-4 border-[#1A1A1A] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading>{title}</SectionHeading>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}