import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function AlumniPage() {
  const filePath = path.join(
    process.cwd(),
    "content",
    "alumni",
    "alumni.md"
  );

  const file = fs.readFileSync(filePath, "utf8");

  return (
    <div className="max-w-[900px] mx-auto py-10 px-6">
      <nav className="mb-4 text-sm text-black/60">
        <a href="/" className="hover:underline">Home</a>
        <span className="mx-2">/</span>
        <a href="/resources" className="hover:underline">Resources</a>
        <span className="mx-2">/</span>
        <span className="text-black/80">Alumni</span>
      </nav>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">Alumni</h1>

      {/* Meta */}
      <p className="text-sm text-black/60 mb-10">
        Published October 5, 2019 · 6 min
      </p>

      {/* Content */}
      <article
className="
prose prose-neutral max-w-none


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
{file}
</ReactMarkdown>
</article>
    </div>
  );
}