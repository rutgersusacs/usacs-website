import SectionWrapper from "../components/SectionWrapper";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import "./resourcePage.css";
import PageSubtitle from "../components/PageSubtitle";

export default async function ResourcesPage() {
  return (
    <>
      {/* red header */}
      <PageHeader>
        <h1>RESOURCES</h1>
        <PageSubtitle>
          A COMMUNITY-DRIVEN COLLECTION OF RESOURCES TO AID YOU IN YOUR CS ENDEAVORS.
        </PageSubtitle>
      </PageHeader>

      {/* suggestion box */}
      <section className="light-red-box-wrapper">
        <Card className="light-red-box">
          <p>
            Want to add something?{" "}
            <a className="light-red-link" href="#">
              Let us know.
            </a>
          </p>
        </Card>
      </section>

      {/* resource cards */}
      <SectionWrapper>
        <section className="resource-grid">

          <Card className="resource-card">
            <a href="/resources/academics" className="resource-link">
              <div className="resource-icon">
                <img src="/icons/academics.png" alt="Academics" />
              </div>
              <h3>ACADEMICS</h3>
              <p>
                All the essentials for succeeding in CS, including how to get
                involved in research, sign up for classes, and plenty of other
                helpful tips!
              </p>
            </a>
          </Card>

          <Card className="resource-card">
            <a href="/resources/jobs" className="resource-link">
              <div className="resource-icon">
                <img src="/icons/career.png" alt="Career" />
              </div>
              <h3>CAREER</h3>
              <p>
                How to grow your skills, connect with the right people, and unlock
                new opportunities!
              </p>
            </a>
          </Card>

          <Card className="resource-card">
            <a href="/resources/general" className="resource-link">
              <div className="resource-icon">
                <img src="/icons/general.png" alt="General" />
              </div>
              <h3>GENERAL</h3>
              <p>
                Key tools to grow and stay grounded, with advice on staying
                organized and navigating challenges with ease.
              </p>
            </a>
          </Card>

          <Card className="resource-card">
            <a href="/resources/interviewing" className="resource-link">
              <div className="resource-icon">
                <img src="/icons/interviewing.png" alt="Interviewing" />
              </div>
              <h3>INTERVIEWING</h3>
              <p>
                A guide to interview success, covering how to practice
                effectively, communicate confidently, and make a lasting
                impression.
              </p>
            </a>
          </Card>

          <Card className="resource-card">
            <a href="/resources/alumni" className="resource-link">
              <div className="resource-icon">
                <img src="/icons/alumni-advice.png" alt="Alumni Advice" />
              </div>
              <h3>ALUMNI ADVICE</h3>
              <p>
                Practical tips from graduates on thriving in CS, including how to
                build experience, explore career options, and avoid common
                pitfalls.
              </p>
            </a>
          </Card>

        </section>
      </SectionWrapper>
    </>
  );
}
