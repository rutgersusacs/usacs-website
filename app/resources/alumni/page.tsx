import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownPage from "../../components/MarkdownPage";

export default async function AlumniPage() {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "content", "alumni", "alumni.md"),
    "utf8",
  );
  const { data, content } = matter(raw);

  return (
    <MarkdownPage
      title={data.title}
      content={content}
      readTime={data.readTime}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: data.title },
      ]}
    />
  );
}
