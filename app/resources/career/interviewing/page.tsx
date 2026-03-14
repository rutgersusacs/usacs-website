import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export default function InterviewingPage() {
  const filePath = path.join(
    process.cwd(),
    "content",
    "career",
    "interviewing.md"
  );

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return (
    <div className="max-w-[900px] mx-auto py-10 px-6">
      <nav className="mb-4 text-sm text-black/60">
        <Link href="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/resources" className="hover:underline">Resources</Link>
        <span className="mx-2">/</span>
        <Link href="/resources/career" className="hover:underline">Career</Link>
        <span className="mx-2">/</span>
        <span className="text-black/80">{data.title}</span>
      </nav>

      <h1 className="text-4xl font-bold mb-8">{data.title}</h1>

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
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
