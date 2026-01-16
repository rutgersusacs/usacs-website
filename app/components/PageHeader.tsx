import NavBar from "./NavBar";

type PageHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageHeader({
  children,
  className = "",
}: PageHeaderProps) {
  return (
    <header
      className={`
        bg-gradient-to-b from-[var(--usacs-red-light)] to-[var(--usacs-red-dark)]
        pt-4 pb-20
        px-4
        rounded-b-[40px]
        ${className}
      `}
    >
      <NavBar />

      <div className="mt-12 text-center">{children}</div>
    </header>
  );
}
