type PageHeaderProps = {
  children?: React.ReactNode;
  className?: string;
  };
  
  
  export default function PageHeader({
  children,
  className = "",
  }: PageHeaderProps) {
  return (
  <header
  className={`
  bg-gradient-to-b from-[var(--usacs-red-dark)] to-[var(--usacs-red-light)]
  pt-7 pb-7
  px-4
  rounded-b-[40px]
  ${className}
  `}
  >
  <div className="mt-12 text-center">
  {children}
  </div>
  </header>
  );
  }