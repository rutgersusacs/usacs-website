// components/Card.tsx
/*type CardProps = {
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
  }*/

type CardProps = {
  name: string;
  position: string;
  major: string;
  description1: string;
  description2: string;
  imageSrc: string;
  isGod: boolean; // fix variable name later
};

const Card = ({
  name,
  position,
  major,
  description1,
  description2,
  imageSrc,
  isGod,
}: CardProps) => {
  const bgColor = isGod ? "red" : "#e6d4c5"; // Red for isGod true, default otherwise
  const fontColor = isGod ? "white" : "#5a4634"; // White for isGod true, default otherwise

  return (
    <div className={`profileCard`} style={{ backgroundColor: bgColor }}>
      <div className="flex flex-col">
        {/* Profile Picture and Info */}
        <div className="topSection">
          <img
            src={imageSrc}
            alt={`${name} profile picture`}
            className="profilePicture"
          />

          <div className="bio">
            <h1 className={`bioName`} style={{ color: fontColor }}>
              {name}
            </h1>
            <p className={`bioPosition`} style={{ color: fontColor }}>
              {position}
            </p>

            <div className={`bioMajorDiv`} style={{ color: fontColor }}>
              <span className="bioMajorLabel">Major:</span>
              <span>{major}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className={"description"} style={{ color: fontColor }}>
          <p>{description1}</p>
          <p>{description2}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
