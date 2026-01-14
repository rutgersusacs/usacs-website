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

const Card=({name, position, major, description1, description2, imageSrc, isGod}: CardProps)=>{

  const bgColor = isGod ? 'red' : '#e6d4c5'; // Red for isGod true, default otherwise
  const fontColor = isGod ? 'white' : '#5a4634'; // White for isGod true, default otherwise

  return(
   <div className={`flex w-[400px] h-[550px] rounded-[3rem] m-8`} style={{backgroundColor: bgColor}}>
      <div className="flex flex-col w-full">

        {/* Profile Picture and Info */}
        <div className="flex items-start mt-8 mx-8 gap-6">
          <img
            src={imageSrc}
            alt={`${name} profile picture`}
            className="w-36 h-36 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <h1 className={`text-2xl font-bold`} style={{color: fontColor}}>{name}</h1>
            <p className={`mt-1 text-lg font-semibold`} style={{color: fontColor}}>{position}</p>

            <div className={`flex mt-1 text-sm`} style={{color: fontColor}}>
              <span className="font-bold mr-1">Major:</span>
              <span>{major}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className={`mt-6 mx-8 text-sm leading-relaxed space-y-3`} style={{color: fontColor}}>
          <p>{description1}</p>
          <p>{description2}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
  