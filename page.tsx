<<<<<<< HEAD
// app/mission/page.tsx

import Image from "next/image";
import PageHeader from "../components/PageHeader";

type Committee = {
  title: string;
  subtitle: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
};

const committees: Committee[] = [
  {
    title: "Technology",
    subtitle: "Inspire and keep alive the\nspirit of hacking",
    bullets: ["Codestorms", "Tech Workshops"],
    imageSrc: "/images/committee-technology.png",
    imageAlt: "Technology committee mascot",
  },
  {
    title: "Education",
    subtitle: "Promoting, mentorship,\nresearch, and learning",
    bullets: ["Mock Interviews", "Resume Workshops"],
    imageSrc: "/images/committee-education.png",
    imageAlt: "Education committee mascot",
  },
  {
    title: "Community",
    subtitle: "Foster diverse, inclusive, and\nfriendly social spaces",
    bullets: ["Socials", "Paws & Professors"],
    imageSrc: "/images/committee-community.png",
    imageAlt: "Community committee mascots",
  },
  {
    title: "Outreach",
    subtitle: "Build relationships with youth,\nalumni, and tech companies",
    bullets: ["Company Events", "Alumni Networking"],
    imageSrc: "/images/committee-outreach.png",
    imageAlt: "Outreach committee mascot",
  },
];

function CommitteeCard({ item }: { item: Committee }) {
  return (
    <div className="flex h-full flex-col rounded-[28px] bg-[#7A1A1A] px-6 pb-6 pt-7 shadow-[0_12px_30px_rgba(0,0,0,0.15)]">
      <h3 className="text-center text-base font-extrabold tracking-wide text-white">
        {item.title}
      </h3>

      <p className="mt-2 whitespace-pre-line text-center text-xs font-medium leading-snug text-white/90">
        {item.subtitle}
      </p>

      <div className="mt-5 flex justify-center">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          width={160}
          height={160}
          className="h-[120px] w-[120px] object-contain sm:h-[135px] sm:w-[135px]"
          priority
        />
      </div>

      <ul className="mt-5 space-y-2 text-sm text-white">
        {item.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-white/90" />
            <span className="font-semibold">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-[#F7F0E6]">
      {/* ===== HERO (RED) ===== */}
      <PageHeader className="pb-40">
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-wide text-white">
          OUR MISSION
        </h1>

        <div className="mx-auto mt-8 max-w-4xl rounded-full bg-[#6F1515]/80 px-6 py-4">
          <p className="text-center text-xs font-semibold tracking-wide text-white sm:text-sm">
            USACS’ VISION IS TO KEEP THE RUTGERS CS/TECH COMMUNITY THRIVING.
          </p>
        </div>

        <h2 className="mt-14 text-center text-[clamp(2rem,5vw,3.25rem)] font-extrabold tracking-wide text-white">
          COMMITTEES
        </h2>
      </PageHeader>

      {/* ===== COMMITTEES (OVERLAP SECTION) ===== */}
      <section className="relative z-10 -mt-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {committees.map((c) => (
              <CommitteeCard key={c.title} item={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== METHODS ===== */}
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-4xl font-extrabold tracking-wide text-[#5A1A1A] sm:text-5xl">
              METHODS
            </h3>

            <div className="mt-6 space-y-2 text-sm leading-relaxed text-[#2B2B2B] sm:text-base">
              <p>Host quality-assured technical talks on a weekly basis.</p>
              <p>Provide platforms for career development and project sharing.</p>
              <p>Initiate and oversee mentorship program for undergraduates.</p>
              <p>
                Promote undergraduate research and faculty involvement through
                our meetings.
              </p>
              <p>Grow and maintain social media presence for CS students.</p>
              <p>Stay in tune with CS management and hackathon coordination.</p>
              <p>
                Build framework to connect alumni with community after
                graduation.
              </p>
              <p>
                Coordinate tech company recruitment and outreach efforts.
              </p>
              <p>
                Connect students with mentorship opportunities targeting youth.
              </p>
              <p>
                Inviting prominent leaders in technology to speak to our
                community.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[260px] w-full max-w-[520px] overflow-hidden rounded-l-[180px] rounded-r-[32px] bg-white shadow-sm sm:h-[320px]">
              <Image
                src="/images/mission-methods.jpg"
                alt="USACS members in a meetup"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MEASURES ===== */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-start">
            <div className="relative h-[260px] w-full max-w-[520px] overflow-hidden rounded-r-[180px] rounded-l-[32px] bg-white shadow-sm sm:h-[320px]">
              <Image
                src="/images/mission-measures.jpg"
                alt="USACS classroom and whiteboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold tracking-wide text-[#5A1A1A] sm:text-5xl">
              MEASURES
            </h3>

            <div className="mt-6 space-y-5 text-sm leading-relaxed text-[#2B2B2B] sm:text-base">
              <p>
                Students feeling comfortable in and growing from our events,
                spaces, and programs.
              </p>
              <p>
                Other communities, departments, and universities knowing how
                awesome we are.
              </p>
              <p>
                Public visibility for our community’s projects and endeavors
                while keeping diverse.
              </p>
            </div>
          </div>
        </div>
      </section>
=======
import Image from "next/image";
import PageHeader from "../components/PageHeader";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-[#F7F0E6]">
      {/* PAGEHEADER */}
      <PageHeader className="relative z-10 pb-20">
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-wide text-white">
          DONATE
        </h1>

        {/* THANK YOU BAR */}
        <div className="mx-auto mt-10 max-w-6xl rounded-full bg-[#6F1515]/70 px-10 py-6">
          <p className="text-center text-sm font-semibold tracking-wide text-white sm:text-base">
            THANK YOU FOR DONATING TO THE RUTGERS UNDERGRADUATE COMPUTER SCIENCE
            COMMUNITY!
          </p>
        </div>
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
            Next to “If you&apos;ve selected the &quot;other, please specify&quot;
            option, please specify the fund:” type “USACS”
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
>>>>>>> be74e2c5d628e1d147e887da21e1210e0204706d
    </main>
  );
}
