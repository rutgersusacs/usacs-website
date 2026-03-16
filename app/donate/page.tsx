import Image from "next/image";
import PageHeader from "../components/PageHeader";
import PageSubtitle from "../components/PageSubtitle";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-[#F7F0E6]">
      {/* PAGEHEADER */}
      <PageHeader className="relative z-10 pb-20">
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-wide text-white">
          DONATE
        </h1>

        {/* THANK YOU BAR */}
        <PageSubtitle className="py-7">
          <span className="text-white text-[clamp(1rem,2vw,1.375rem)] tracking-wide">
            THANK YOU FOR DONATING TO THE RUTGERS UNDERGRADUATE COMPUTER SCIENCE
            COMMUNITY!
          </span>
        </PageSubtitle>
      </PageHeader>

      {/* HEADING CARD */}
      <div className="-mt-4 relative z-0 px-4">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#E7D6C6] px-6 py-10 text-center shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#5A1A1A] sm:text-3xl">
            Here are the steps to donate to USACS :
          </h2>
        </div>
      </div>

      {/* STEPS */}
      <div className="mx-auto mt-10 max-w-5xl px-4">
        <ol className="list-decimal space-y-3 pl-6 text-base text-[#2B2B2B] sm:text-lg">
          <li>
            Go{" "}
            <a
              className="font-semibold text-[#7F1D1D] underline underline-offset-4 hover:opacity-90"
              href="https://give.rutgers.edu/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </li>
          <li>
            Click on “I want to view a list of schools and programs that I can
            support.”
          </li>
          <li>
            A box will pop up. Select “Other, please specify” then enter the
            amount to be donated.
          </li>
          <li>
            Next to “If you&apos;ve selected the &quot;other, please
            specify&quot; option, please specify the fund:” type “USACS”
          </li>
          <li>
            Fill out the rest of the form including whether or not donation is
            recurrent as well as personal information.
          </li>
          <li>Click Proceed to Payment and fill in payment details.</li>
        </ol>
      </div>

      {/* IMAGES */}
      <div className="mx-auto mt-14 max-w-6xl px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <Image
              src="/images/donate-left.jpg"
              alt="USACS community event"
              width={900}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <Image
              src="/images/donate-right.jpg"
              alt="USACS student collaboration"
              width={900}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
