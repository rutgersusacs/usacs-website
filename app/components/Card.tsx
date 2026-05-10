// components/Card.tsx

// Reusable card component used to wrap content in a styled container
// Provides a consistent layout with rounded corners and a shadow across the site

type CardProps = {
  children: React.ReactNode; // content placed inside the card (text, images, etc)
  className?: string; // optional additional styles for customization
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    // Default styling for all cards (rounded edges and shadow)
    // className allows specific cards to add or override styles when needed
    <div className={`rounded-2xl shadow-lg transition ${className}`}>
      {children}
    </div>
  );
}
