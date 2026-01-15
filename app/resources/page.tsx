import SectionWrapper from "../components/SectionWrapper";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import PageSubtitle from "../components/PageSubtitle";

export default async function ResourcesPage() {
  return (
    <>
      {/* red header */}
      <PageHeader>
      <h1 className="mb-4 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-[var(--cream-light)]">
  RESOURCES
</h1>


<PageSubtitle className="text-[var(--cream)]">
  A COMMUNITY-DRIVEN COLLECTION OF RESOURCES TO AID YOU IN YOUR CS ENDEAVORS.
</PageSubtitle>
      </PageHeader>

{/* suggestion box */}
<section className="mt-10 text-center">
  <Card
    className="
      inline-block
      bg-[var(--light-red-box)]
      px-8 py-4
      rounded-[22px]
      text-[1.05rem]
    "
  >
    <p className="text-[var(--usacs-red-dark)]">
      Want to add something?{" "}
      <a
        href="#"
        className="font-extrabold underline"
      >
        Let us know.
      </a>
    </p>
  </Card>
</section>


     {/* resource cards */}
<SectionWrapper>
<section
  className="
    mx-auto
    mt-10 mb-14
    grid
    grid-cols-3
    gap-x-8 gap-y-10
    max-w-[1000px]
  "
>

    {/* ACADEMICS */}
    <Card
      className="  
      w-[300px]
        h-[300px]
        bg-[var(--resource-tile)]
        text-[var(--cream)]
        rounded-[22px]
        px-6 pt-7 pb-6
        text-center
        shadow-[0_10px_20px_rgba(0,0,0,0.15)]
        cursor-pointer
      "
    >
      <a
        href="/resources/academics"
        className="block h-full no-underline text-inherit"
      >
<div
  className="
    mx-auto mb-4
    flex h-34 w-34 items-center justify-center
    rounded-full
    bg-[var(--resource-circle)]
  "
>
          <img
            src="/icons/academics.png"
            alt="Academics"
            className="h-[100px] w-[100px] object-contain block"
          />
        </div>

        <h3 className="mt-1 mb-1.5 text-[var(--cream)] font-bold">
          ACADEMICS
        </h3>

        <p className="text-[var(--cream)] text-sm leading-[1.35]">
          All the essentials for succeeding in CS, including how to get involved
          in research, sign up for classes, and plenty of other helpful tips!
        </p>
      </a>
    </Card>

    {/* CAREER */}
    <Card
      className="
      w-[300px]
      h-[300px]
        bg-[var(--resource-tile)]
        text-[var(--cream)]
        rounded-[22px]
        px-6 pt-7 pb-6
        text-center
        shadow-[0_10px_20px_rgba(0,0,0,0.15)]
        cursor-pointer
      "
    >
      <a
        href="/resources/jobs"
        className="block h-full no-underline text-inherit"
      >
<div
  className="
    mx-auto mb-4
    flex h-34 w-34 items-center justify-center
    rounded-full
    bg-[var(--resource-circle)]
  "
>
          <img
            src="/icons/career.png"
            alt="Career"
            className="h-[100px] w-[100px] object-contain block"
          />
        </div>

        <h3 className="mt-1 mb-1.5 text-[var(--cream)] font-bold">
          CAREER
        </h3>

        <p className="text-[var(--cream)] text-sm leading-[1.35]">
          How to grow your skills, connect with the right people, and unlock new
          opportunities!
        </p>
      </a>
    </Card>

    {/* GENERAL */}
    <Card
      className="
      w-[300px]
      h-[300px]
        bg-[var(--resource-tile)]
        text-[var(--cream)]
        rounded-[22px]
        px-6 pt-7 pb-6
        text-center
        shadow-[0_10px_20px_rgba(0,0,0,0.15)]
        cursor-pointer
      "
    >
      <a
        href="/resources/general"
        className="block h-full no-underline text-inherit"
      >
<div
  className="
    mx-auto mb-4
    flex h-34 w-34 items-center justify-center
    rounded-full
    bg-[var(--resource-circle)]
  "
>
          <img
            src="/icons/general.png"
            alt="General"
            className="h-[100px] w-[100px] object-contain block"
          />
        </div>

        <h3 className="mt-1 mb-1.5 text-[var(--cream)] font-bold">
          GENERAL
        </h3>

        <p className="text-[var(--cream)] text-sm leading-[1.35]">
          Key tools to grow and stay grounded, with advice on staying organized
          and navigating challenges with ease.
        </p>
      </a>
    </Card>

{/* Bottom row */}
<div className="col-span-3 flex justify-center gap-8">
  {/* INTERVIEWING */}
  <Card
    className="
      w-[300px]
      h-[300px]
      bg-[var(--resource-tile)]
      text-[var(--cream)]
      rounded-[22px]
      px-6 pt-7 pb-6
      text-center
      shadow-[0_10px_20px_rgba(0,0,0,0.15)]
      cursor-pointer
    "
  >
    <a
      href="/resources/interviewing"
      className="block h-full no-underline text-inherit"
    >
      <div
        className="
          mx-auto mb-4
          flex h-34 w-34 items-center justify-center
          rounded-full
          bg-[var(--resource-circle)]
        "
      >
        <img
          src="/icons/interviewing.png"
          alt="Interviewing"
          className="h-[100px] w-[100px] object-contain block"
        />
      </div>

      <h3 className="mt-1 mb-1.5 text-[var(--cream)] font-bold">
        INTERVIEWING
      </h3>

      <p className="text-[var(--cream)] text-sm leading-[1.35]">
        A guide to interview success, covering how to practice effectively,
        communicate confidently, and make a lasting impression.
      </p>
    </a>
  </Card>

  {/* ALUMNI ADVICE */}
  <Card
    className="
      w-[300px]
      h-[300px]
      bg-[var(--resource-tile)]
      text-[var(--cream)]
      rounded-[22px]
      px-6 pt-7 pb-6
      text-center
      shadow-[0_10px_20px_rgba(0,0,0,0.15)]
      cursor-pointer
    "
  >
    <a
      href="/resources/alumni"
      className="block h-full no-underline text-inherit"
    >
      <div
        className="
          mx-auto mb-4
          flex h-34 w-34 items-center justify-center
          rounded-full
          bg-[var(--resource-circle)]
        "
      >
        <img
          src="/icons/alumni-advice.png"
          alt="Alumni Advice"
          className="h-[100px] w-[100px] object-contain block"
        />
      </div>

      <h3 className="mt-1 mb-1.5 text-[var(--cream)] font-bold">
        ALUMNI ADVICE
      </h3>

      <p className="text-[var(--cream)] text-sm leading-[1.35]">
        Practical tips from graduates on thriving in CS, including how to build
        experience, explore career options, and avoid common pitfalls.
      </p>
    </a>
  </Card>
</div>


  </section>
</SectionWrapper>



{/* LOCATIONS */}
<section className="bg-[#DED3BF] min-h-[1761px] pt-15 pb-32">
  <h2
    className="
      text-center
      font-bold
      text-[50px]
      leading-none
      tracking-normal
      text-[#342606]
    "
  >
    LOCATIONS
  </h2>







  
  <section className="max-w-[1200px] mx-auto px-8 mt-32 space-y-32">

{/* THE CSL */}
<div className="grid grid-cols-2 items-start gap-20">
  {/* Image */}
  <div className="overflow-hidden rounded-[28px]">
    <img
      src="/icons/csl.png"
      alt="The CSL"
      className="w-[950px] h-[300px] object-cover"
    />
  </div>

  {/* Text */}
  <div className="max-w-[520px]">
    <h3 className="mb-4 text-xl font-bold text-[#87111D]">THE CSL</h3>
    <p className="text-base leading-7 text-[#54412F]">
      The CSL (Coding & Social Lounge) is located on the second floor of the Hill
      Bigliani Room 252. Part of the Computer Science Instructional Labs, the CSL
      was designed to provide students their own atmosphere for collaboration
      and group projects.
    </p>
  </div>
</div>

{/* MELTDOWN LAB */}
<div className="grid grid-cols-2 items-start gap-20">
  {/* Text */}
  <div className="max-w-[520px]">
    <h3 className="mb-4 text-xl font-bold text-[#87111D]">MELTDOWN LAB</h3>
    <p className="text-base leading-7 text-[#54412F]">
      Right next door to the CSL, the Meltdown Lab is stocked with Linux
      machines and whiteboards, perfect for late night cram sessions.
    </p>
  </div>

  {/* Image */}
  <div className="overflow-hidden rounded-[28px]">
    <img
      src="/icons/meltdown-lab.png"
      alt="Meltdown Lab"
      className="w-[950px] h-[300px] object-cover"
    />
  </div>
</div>

{/* HACKERSPACE */}
<div className="grid grid-cols-2 items-start gap-20">
  {/* Image */}
  <div className="overflow-hidden rounded-[28px]">
    <img
      src="/icons/hackerspace.png"
      alt="Hackerspace"
      className="w-[950px] h-[300px] object-cover"
    />
  </div>

  {/* Text */}
  <div className="max-w-[520px]">
    <h3 className="mb-4 text-xl font-bold text-[#87111D]">HACKERSPACE</h3>
    <p className="text-base leading-7 text-[#54412F]">
      The Hack-R-space is located in Hill 120. The Hack-R-Space is a workshop
      for students to tinker and build. It offers access to an abundance of
      resources, including 3D printing, robotics, Oculus Rifts, and
      instrumental recording hardware.
    </p>
  </div>
</div>

{/* MAKERSPACE */}
<div className="grid grid-cols-2 items-start gap-20">
  {/* Text */}
  <div className="max-w-[520px]">
    <h3 className="mb-4 text-xl font-bold text-[#87111D]">MAKERSPACE</h3>
    <p className="text-base leading-7 text-[#54412F]">
      The Makerspace is designed for Rutgers affiliates of all experience
      levels to bring their ideas to life. Located near Livingston Campus,
      the Makerspace is a tech atelier for students to design and construct
      hardware.
    </p>
  </div>

  {/* Image */}
  <div className="overflow-hidden rounded-[28px]">
    <img
      src="/icons/makerspace.png"
      alt="Makerspace"
      className="w-[950px] h-[300px] object-cover"
    />
  </div>
</div>

</section>
















</section>














    </>
  );
}
