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
        className={`page-subtitle ${className}`}
      >
        {children}
      </p>
    );
  }
  