import PageHeader from "./components/PageHeader";
import PageSubtitle from "./components/PageSubtitle";

export default function HomePage() {
  return (
    <>
      <PageHeader className="min-h-[44vh] overflow-visible">
        <div className="relative mx-auto max-w-7xl px-6 pt-4">
          <div className="grid grid-cols-2 items-start gap-x-12">
            <div className="-ml-4 flex flex-col items-start">
              <p className="mb-2 ml-20 text-sm tracking-wide text-[var(--cream)] opacity-90">
                Undergraduate Student Alliance of Computer Scientists
              </p>

              <img
                src="/icons/logo.png"
                alt="USACS logo"
                className="mt-1 w-[360px] sm:w-[420px] md:w-[500px] lg:w-[560px] h-auto"
              />

              <div className="mt-6">
              <PageSubtitle
  className="
    inline-flex items-center gap-4
    px-6 py-4
    ml-31
    bg-[var(--resource-tile)]
    text-[var(--cream-light)]
    whitespace-nowrap
    rounded-full
  "
>
  <img
    src="/icons/mail.png"
    alt=""
    className="h-6 w-auto shrink-0"
  />
  <span className="font-extrabold tracking-wide">
    GET ON THE MAILING LIST
  </span>
</PageSubtitle>

<div className="mt-5 flex items-center gap-2 ml-34">
  <img src="/icons/Facebook.png" alt="Facebook" className="h-8 w-auto cursor-pointer" />
  <img src="/icons/Twitter.png" alt="Twitter" className="h-8 w-auto cursor-pointer" />
  <img src="/icons/Instagram.png" alt="Instagram" className="h-8 w-auto cursor-pointer" />
  <img src="/icons/Github.png" alt="GitHub" className="h-8 w-auto cursor-pointer" />
  <img src="/icons/Youtube.png" alt="YouTube" className="h-8 w-auto cursor-pointer" />
  <img src="/icons/MediumBlog.png" alt="Medium Blog" className="h-8 w-auto cursor-pointer" />
  <img src="/icons/Discord.png" alt="Discord" className="h-8 w-auto cursor-pointer" />
</div>


              </div>
            </div>

            <div className="justify-self-end">
              <div className="max-w-[2200px]">
                <div className="grid grid-cols-2 gap-4 w-[600px] h-[630px] grid-rows-[1.1fr_1.1fr_1.6fr]">
                  <div className="row-span-2 overflow-hidden rounded-[32px]">
                    <img src="/icons/pic1.png" className="h-full w-full object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-[28px]">
                    <img src="/icons/pic2.png" className="h-full w-full object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-[28px]">
                    <img src="/icons/pic3.png" className="h-full w-full object-cover" />
                  </div>
                  <div className="col-span-2 overflow-hidden rounded-[32px]">
                    <img src="/icons/pic4.png" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            src="/icons/tiger.png"
            alt=""
            className="absolute left-21 bottom-0 translate-y-[61%] w-[300px] sm:w-[340px] md:w-[380px] lg:w-[440px] h-auto z-10 pointer-events-none select-none"
          />
        </div>
      </PageHeader>

     
     
     
     
     
     
     
     
      <section className="bg-[var(--cream)] pt-12 pb-24">
  <div className="mx-auto max-w-7xl px-12">

    <div className="pl-142 max-w-fit">

      {/* Title */}
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-5xl font-extrabold text-[var(--brown)]">
          STAY UPDATED!
        </h2>
        <img
          src="/icons/bell.png"
          alt=""
          className="h-7 w-7"
        />
      </div>

      {/* Info box */}
      <div
        className="
          bg-[var(--light-red-box)]
          px-7 py-6
          rounded-[26px]
          max-w-[620px]
        "
      >
        <p className="text-[var(--usacs-red-dark)] text-3xl leading-10">
          Check out our <span className="font-extrabold">GroupMe</span><br />
          Join our <span className="font-extrabold">Discord</span> server<br />
          Follow our <span className="font-extrabold">Instagram</span><br />
          See our <span className="font-extrabold">Google Calendar</span> for future events
        </p>
      </div>

    </div>
  </div>


  <section className="bg-[#DED3BF] py-20 mt-13">
  <div className="mx-auto max-w-none px-25">

    <p className="text-[var(--grey)] text-[35px] leading-14 w-full">
      <span className="font-extrabold">
        The Undergraduate Student Alliance of Computer Scientists (USACS)
      </span>{" "}
      is Rutgers' premier student organization for every and any aspiring
      computer scientist! We host weekly workshops on topics not taught in
      class, mentorship services and programs, outreach opportunities to alumni
      and companies, diversity and community bonding events, and technical
      project building/open-source contributions.
    </p>

  </div>
</section>


<section className="bg-[var(--cream)] pt-16 pb-4">
  <div className="mx-auto max-w-[1600px] px-6">
    <div className="overflow-hidden rounded-[28px]">
      <img
        src="/icons/group.png"
        alt="USACS group photo"
        className="w-full"
      />
    </div>
  </div>
</section>










</section>


    </>
  );
}
