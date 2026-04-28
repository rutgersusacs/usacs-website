import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownPage from "../../../components/MarkdownPage";

export default function InternshipSuccessPage() {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "content", "career", "internship-success.md"),
    "utf8",
  );
  const { data, content } = matter(raw);

  return (
    <MarkdownPage
      title={data.title}
      content={content}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Career", href: "/resources/career" },
        { label: data.title },
      ]}
    />
  );
}
