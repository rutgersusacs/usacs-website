type PageSubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

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
    >
      {children}
    </p>
  );
}
