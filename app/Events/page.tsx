import PageHeader from "../components/PageHeader";
import PageSubtitle from "../components/PageSubtitle";

const Eboard = () => {
  return (
    <div className="eboardPage">
      <PageHeader>
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-wide text-white">
          OUR EVENTS
        </h1>
        <PageSubtitle className="py-7">
          <span className="text-white text-[clamp(1rem,2vw,1.375rem)] tracking-wide">
            TO FIND OUT ABOUT MORE EVENTS, CHECKOUT OUR{" "}
          </span>
          <span className="text-white text-[clamp(1rem,2vw,1.375rem)] font-extrabold tracking-wide">
            OFFICIAL GOOGLE CALENDAR
          </span>
        </PageSubtitle>
      </PageHeader>
    </div>
  );
};

export default Eboard;
