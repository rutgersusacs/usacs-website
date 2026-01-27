import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function InterviewingPage() {
  const filePath = path.join(
    process.cwd(),
    "content",
    "interviewing",
    "interviewing.md"
  );

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return (
    <div className="max-w-[900px] mx-auto py-10 px-6">
      <nav className="mb-4 text-sm text-black/60">
        <a href="/" className="hover:underline">Home</a>
        <span className="mx-2">/</span>
        <a href="/resources" className="hover:underline">Resources</a>
        <span className="mx-2">/</span>
        <span className="text-black/80">{data.title}</span>
      </nav>

      {/* Page title */}
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>

      {/* Metadata */}
      <p className="text-sm text-black/60 mb-8">
        Written by {data.writtenBy} · Published {data.published} · {data.readTime}
      </p>

      {/* Content */}
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
[&_ol>li]:leading-relaxed


[&_table]:border
[&_table]:border-black/10
[&_table]:border-collapse
[&_table]:w-full
[&_table]:my-6


[&_th]:border
[&_th]:border-black/10
[&_th]:bg-black/5
[&_th]:px-4
[&_th]:py-2
[&_th]:text-left
[&_th]:font-semibold


[&_td]:border
[&_td]:border-black/10
[&_td]:px-4
[&_td]:py-2
"
>
<ReactMarkdown remarkPlugins={[remarkGfm]}>
{content}
</ReactMarkdown>
</article>
    </div>
  );
}