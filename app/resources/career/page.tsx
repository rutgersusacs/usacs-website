import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type CareerSection = {
  title: string;
  slug: string;
};

type CareerFrontmatter = {
  title: string;
  sections: CareerSection[];
};

export default async function CareerPage() {
  const filePath = path.join(process.cwd(), "content", "career", "career.md");
  const raw = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(raw);
  const frontmatter = data as CareerFrontmatter;

  return (
    <div className="max-w-[900px] mx-auto py-10 px-6">

      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-black/60">
        <Link href="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/resources" className="hover:underline">Resources</Link>
        <span className="mx-2">/</span>
        <span className="text-black/80">Career</span>
      </nav>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-12">{frontmatter.title}</h1>

      {/* Career tiles */}
      <section className="grid grid-cols-3 gap-8">
        {frontmatter.sections.slice(0, 3).map((section) => (
          <Link
            key={section.slug}
            href={`/resources/career/${section.slug}`}
            className="
              bg-[var(--light-red-box)]
              rounded-[20px]
              h-[140px]
              flex items-center justify-center
              text-center font-semibold text-lg
              text-[#87111D]
              shadow-sm hover:shadow-md transition
            "
          >
            {section.title}
          </Link>
        ))}

        <div className="col-span-3 flex justify-center gap-8">
          {frontmatter.sections.slice(3).map((section) => (
            <Link
              key={section.slug}
              href={`/resources/career/${section.slug}`}
              className="
                bg-[var(--light-red-box)]
                rounded-[20px]
                h-[140px]
                w-[260px]
                flex items-center justify-center
                text-center font-semibold text-lg
                text-[#87111D]
                shadow-sm hover:shadow-md transition
              "
            >
              {section.title}
            </Link>
          ))}
        </div>
      </section>

      {/* Long-form career content */}
      <article
        className="
          prose prose-neutral max-w-none mt-16

          [&_h2]:text-2xl
          [&_h2]:font-semibold
          [&_h2]:text-black
          [&_h2]:mt-10
          [&_h2]:mb-3

          [&_h3]:text-lg
          [&_h3]:font-semibold
          [&_h3]:mt-6
          [&_h3]:mb-2

          [&_a]:text-blue-600
          [&_a]:underline
          [&_a:hover]:text-blue-700

          [&_p]:my-3

          [&_ul]:my-4
          [&_ul]:list-disc
          [&_ul]:pl-6

          [&_ol]:my-4
          [&_ol]:list-decimal
          [&_ol]:pl-6

          [&_li]:my-1.5

          [&_hr]:my-8
        "
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </article>

    </div>
  );
}
