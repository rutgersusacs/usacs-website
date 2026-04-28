// ===== TYPES =====
type Props = {
  children: React.ReactNode;
  className?: string;
};

// ===== COMPONENT =====
export default function SectionWrapper({ children, className = "" }: Props) {
  return (
    <section
      className={`py-16 px-4 max-w-6xl mx-auto ${className}`}
      /* centered container with max width constraint */
    >
      {children}
    </section>
  );
}
