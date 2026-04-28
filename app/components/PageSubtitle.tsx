// ===== TYPES =====
type PageSubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

// ===== COMPONENT =====
export default function PageSubtitle({
  children,
  className = "",
}: PageSubtitleProps) {
  return (
    <p
      className={`
        inline-block
        rounded-full
        bg-black/25
        px-7 py-3
        font-medium
        ${className}
      `}
      /* pill-shaped subtitle with semi-transparent background */
    >
      {children}
    </p>
  );
}
