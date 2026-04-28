import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

// Career subpage (Resume section)
// Content is stored in a markdown file and rendered here

export default function ResumePage() {
  // Path to the resume markdown file
  const filePath = path.join(process.cwd(), "content", "career", "resume.md");

  // Read file and separate metadata (data) from main content
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return (
    <div className="max-w-[900px] mx-auto py-10 px-6">
      {/* Breadcrumb navigation for Resources → Career → Resume */}
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

      {/* Page title from markdown frontmatter */}
      <h1 className="text-4xl font-bold mb-8">{data.title}</h1>

      {/* Styled container for markdown content */}
      <article
        className="
          prose prose-neutral max-w-none
          [&_h2]:text-2xl
          [&_h2]:font-semibold
          [&_h2]:mt-10
          [&_h2]:mb-3
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
