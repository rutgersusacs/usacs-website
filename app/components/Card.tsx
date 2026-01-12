// components/Card.tsx
type CardProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export default function Card({ children, className = "" }: CardProps) {
    return (
      <div
        className={`rounded-2xl shadow-lg transition ${className}`}
      >
        {children}
      </div>
    );
  }
  