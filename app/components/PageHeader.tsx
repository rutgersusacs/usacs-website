// ===== TYPES =====
type PageHeaderProps = {
  children?: React.ReactNode;
  className?: string;
};

// ===== COMPONENT =====
export default function PageHeader({
  children,
  className = "",
}: PageHeaderProps) {
  return (
    <header
      className={`
        bg-gradient-to-b from-[var(--usacs-red-dark)] to-[var(--usacs-red-light)]
        /* vertical gradient from dark → light brand color */

        pt-7 pb-7
        px-4
        rounded-b-[40px]
        relative
        ${className}
      `}
    >
      <div
        className="mt-12 text-center"
        /* pushes content down + centers all child text */
      >
        {children}
      </div>
    </header>
  );
}
