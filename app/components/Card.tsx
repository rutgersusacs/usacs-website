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
    <div
      className={`flex w-full max-w-[410px] aspect-[410/570] rounded-[3rem] text-left`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col">
        {/* Profile Picture and Info */}
        <div className="flex items-start mt-8 mx-6 gap-6">
          <img
            src={imageSrc}
            alt={`${name} profile picture`}
            className="w-36 h-36 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <h1
              className={`lg:text-2xl font-bold md:text-xl`}
              style={{ color: fontColor }}
            >
              {name}
            </h1>
            <p
              className={`mt-1 text-base font-medium`}
              style={{ color: fontColor }}
            >
              {position}
            </p>

            <div
              className={`flex flex-col mt-1 text-base font-bold`}
              style={{ color: fontColor }}
            >
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
          className={"mt-6 mx-8 leading-relaxed space-y-3 " + descriptionSize}
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
