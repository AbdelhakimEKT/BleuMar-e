"use client";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function Reveal({ children, className }: RevealProps) {
  return <div className={`fade-up is-visible ${className ?? ""}`.trim()}>{children}</div>;
}
