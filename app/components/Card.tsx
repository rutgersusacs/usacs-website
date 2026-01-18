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
  minor?: string;
  description1: string;
  description2: string;
  imageSrc: string;
  isGod: boolean; // fix variable name later
};

const Card = ({
  name,
  position,
  major,
  minor,
  description1,
  description2,
  imageSrc,
  isGod,
}: CardProps) => {
  const bgColor = isGod ? "#481110" : "#E4D1C3"; // Red for isGod true, default otherwise
  const fontColor = isGod ? "#fbf4e4" : "#54412F"; // White for isGod true, default otherwise
  const descriptionSize = isGod ? "text-sm" : "text-base";

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
              <p>
                Major:
                <span className="font-light"> {major}</span>
              </p>

              {minor && (
                <p>
                  Minor:
                  <span className="font-light"> {minor}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div
          className={"description " + descriptionSize}
          style={{ color: fontColor }}
        >
          <p>{description1}</p>
          <p>{description2}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
