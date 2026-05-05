import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

// Career subpage (Applying section)
// Each career tab (like Applying, Interviewing, etc) has its own markdown file

export default function ApplyingPage() {
  // Path to the markdown file for this specific career section
  const filePath = path.join(process.cwd(), "content", "career", "applying.md");

  // Read file and separate metadata (data) and main content
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return (
    <div className="max-w-[900px] mx-auto py-10 px-6">
      {/* Breadcrumb navigation showing full path within Resources → Career */}
      <nav className="mb-4 text-sm text-black/60">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/resources" className="hover:underline">
          Resources
        </Link>
        <span className="mx-2">/</span>
        <Link href="/resources/career" className="hover:underline">
          Career
        </Link>
        <span className="mx-2">/</span>
        <span className="text-black/80">{data.title}</span>
      </nav>

      <h1 className="text-4xl font-bold mb-8">{data.title}</h1>
      <p className="text-gray-600 mb-6">
        Published {data.published} • Read Time {data.readTime}
      </p>

      {/* Styled container for markdown content */}
      <article
        className="
    prose prose-neutral max-w-none

    [&_p]:mb-7
    [&_p]:leading-7

    [&_h2]:text-2xl
    [&_h2]:font-bold
    [&_h2]:mt-12
    [&_h2]:mb-5

    [&_h3]:text-xl
    [&_h3]:font-semibold
    [&_h3]:mt-10
    [&_h3]:mb-4

    [&_ul]:my-5
    [&_ol]:my-5
    [&_li]:my-2

    [&_a]:text-blue-600
    [&_a]:underline
    [&_a:hover]:text-blue-700
  "
      >
        {/* Converts markdown into formatted content */}
        {/* Enables support for tables, lists, and other markdown features */}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
