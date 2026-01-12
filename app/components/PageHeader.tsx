type PageHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageHeader({
  children,
  className = "",
}: PageHeaderProps) {
  return (
    <header className={`page-header ${className}`}>
      {children}
    </header>
  );
}

