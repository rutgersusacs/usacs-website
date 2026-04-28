import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// General resources page
// Reads content and metadata from a markdown file and displays it as a formatted article

export default async function GeneralPage() {
  // Path to the general markdown file
  const filePath = path.join(
    process.cwd(),
    "content",
    "general",
    "general-principles.md",
  );

  // Read the file and separate metadata (data) from main content
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return (
    <div className="max-w-[900px] mx-auto py-10 px-6">
      {/* Breadcrumb navigation */}
      <nav className="mb-4 text-sm text-black/60">
        <a href="/" className="hover:underline">
          Home
        </a>
        <span className="mx-2">/</span>
        <a href="/resources" className="hover:underline">
          Resources
        </a>
        <span className="mx-2">/</span>
        <span className="text-black/80">{data.title}</span>
      </nav>

      {/* Page title pulled from markdown frontmatter */}
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>

      {/* Metadata from markdown (author, publish date, read time) */}
      <p className="text-sm text-black/60 mb-8">Read Time {data.readTime}</p>

      {/* Styles applied to rendered markdown content */}
      <article
        className="
          prose prose-neutral max-w-none

          [&_h2]:text-2xl
          [&_h2]:font-bold
          [&_h2]:mt-10
          [&_h2]:mb-3

          [&_h3]:text-xl
          [&_h3]:font-semibold
          [&_h3]:mt-8
          [&_h3]:mb-2

          [&_a]:text-blue-600
          [&_a]:underline
          [&_a:hover]:text-blue-700

          [&_p]:my-4

          [&_ul]:my-4
          [&_ul]:list-disc
          [&_ul]:pl-6

          [&_ol]:my-4
          [&_ol]:list-decimal
          [&_ol]:pl-6

          [&_li]:my-2

          [&_img]:rounded-lg
          [&_img]:mx-auto
        "
      >
        {/* Converts markdown content into formatted HTML */}
        {/* Enables support for tables, lists, and other markdown features */}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
