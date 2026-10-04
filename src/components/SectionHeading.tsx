import type { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="font-inter font-black text-3xl md:text-4xl text-[#1A1A1A] border-l-4 border-[#1A1A1A] pl-4">
      {children}
    </h2>
  );
}