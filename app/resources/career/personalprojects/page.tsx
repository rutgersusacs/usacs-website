import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

// Career subpage (Personal Projects section)
// Content for this page is stored in a markdown file and rendered here

export default function PersonalProjectsPage() {
  // Path to the personal projects markdown file
  const filePath = path.join(
    process.cwd(),
    "content",
    "career",
    "personalprojects.md",
  );

  // Read file and separate metadata (data) from main content
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return (
    <div className="max-w-[900px] mx-auto py-10 px-6">
      {/* Breadcrumb navigation for Resources → Career → Personal Projects */}
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
      <p className="text-gray-600 mb-6">
        Published {data.published} • Read Time {data.readTime}
      </p>

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
          [&_p]:mb-4
[&_ul]:list-disc
[&_ul]:pl-6
[&_ol]:list-decimal
[&_ol]:pl-6
[&_li]:mb-2
        "
      >
        {/* Converts markdown into formatted content */}
        {/* Enables support for tables, lists, and other markdown features */}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
