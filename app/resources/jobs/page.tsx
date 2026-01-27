import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function JobsPage() {
  const filePath = path.join(process.cwd(), "content", "jobs", "jobs.md");
  const raw = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(raw);

  return (
    <div className="max-w-[900px] mx-auto py-10 px-6">

<nav className="mb-4 text-sm text-black/60">
<a href="/" className="hover:underline">Home</a>
<span className="mx-2">/</span>
<a href="/resources" className="hover:underline">Resources</a>
<span className="mx-2">/</span>
<span className="text-black/80">Jobs</span>
</nav>
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>

      <p className="text-sm text-black/60 mb-8">
        Written by {data.writtenBy} · Published {data.published} · {data.readTime}
      </p>

      <article
className="
prose prose-neutral max-w-none


[&_h2]:text-2xl
[&_h2]:font-bold
[&_h2]:mt-10
[&_h2]:mb-3


[&_a]:text-blue-600
[&_a]:underline
[&_a:hover]:text-blue-700


[&_p]:my-4
[&_ul]:my-4
[&_ol]:my-4


[&_ul]:list-disc
[&_ul]:pl-6
[&_ol]:list-decimal
[&_ol]:pl-6


[&_li]:my-2
"
>
<ReactMarkdown remarkPlugins={[remarkGfm]}>
{content}
</ReactMarkdown>
</article>
    </div>
  );
}