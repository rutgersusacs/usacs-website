import PageHeader from "../components/PageHeader";
import PageSubtitle from "../components/PageSubtitle";

const events = () => {
  return (
    <div className="eventsPage">
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

        <div className="h-[140px]" />

        <div className="w-[90%] max-w-6xl rounded-3xl overflow-hidden shadow-xl bg-[#E4D1C3] absolute left-1/2 top-[73%] -translate-x-1/2 p-6">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America/New_York"
            className="w-full sh-[600px] rounded-3xl"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </PageHeader>
      <div className="m-150" />
    </div>
  );
};

export default events;
