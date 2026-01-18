import PageHeader from "../components/PageHeader";
import PageSubtitle from "../components/PageSubtitle";

const Events = () => {
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
      </PageHeader>

      <div className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America/New_York"
          className="w-full h-[600px]"
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </div>
  );
};

export default Events;
