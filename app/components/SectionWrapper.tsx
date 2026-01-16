type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionWrapper({ children, className = "" }: Props) {
  return (
    <section className={`py-16 px-4 max-w-6xl mx-auto ${className}`}>
      {children}
    </section>
  );
}
