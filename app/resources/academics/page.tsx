import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export default async function AcademicsPage() {
  const filePath = path.join(
    process.cwd(),
    "content",
    "academics",
    "academics.md"
  );

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return (
    <div className="mx-auto max-w-[900px] px-6 py-10">
      <nav className="mb-6 text-sm text-black/60">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/resources" className="hover:underline">
          Resources
        </Link>
        <span className="mx-2">/</span>
        <span className="text-black/80">{data.category}</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight">
          {data.title}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-x-2 text-sm text-black/60">
          <span>Written by {data.writtenBy}</span>
          <span>•</span>
          <span>Published {data.published}</span>
          <span>•</span>
          <span>{data.readTime}</span>
        </div>
      </header>

      <article
className="
prose prose-neutral max-w-none


[&_h2]:text-2xl
[&_h2]:font-bold
[&_h2]:mt-8
[&_h2]:mb-4


[&_h3]:text-xl
[&_h3]:font-semibold
[&_h3]:mt-8

[&_a]:text-blue-600
[&_a]:underline
[&_a:hover]:text-blue-700

[&_p]:my-4
[&_ul]:my-4
[&_ol]:my-4
[&_li]:my-2

[&_h2]:mt-10
[&_h2]:mb-3
"
>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}