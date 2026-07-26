import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Render a different element than <div>, e.g. "section" for landmark sections. */
  as?: "div" | "section" | "header" | "footer";
}

/**
 * Centralizes the page's max-width and horizontal gutters so every section
 * lines up identically instead of each component re-declaring its own
 * max-w-* / px-* values.
 */
export default function Container({
  children,
  className = "",
  as = "div",
}: ContainerProps) {
  const Tag = as;

  return (
    <Tag className={`mx-auto w-full max-w-container px-6 md:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
