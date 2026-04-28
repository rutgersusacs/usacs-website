# Contributing Guide

This guide explains how to edit existing content and how to add a new section (tile) to the Career page.

---

## Editing Existing Content

All website content is stored in the `content/` folder as Markdown (`.md`) files.

Example structure:
content/
career/
career.md
resume.md
applying.md

To edit content:

1. Go to the correct file in the `content/` folder  
   (e.g., `content/career/resume.md`)
2. Open the file
3. Edit the text using Markdown syntax:
   - `##` for headings
   - `-` for bullet points
   - `[text](link)` for links
4. Save the file
5. Refresh the browser to see changes

---

## Adding a New Career Section (New Tile)

To add a new section (like Resume, Applying, etc.), you must complete all three steps below.

### Step 1: Add the section in career.md

Open:
content/career/career.md

Find the `sections` list and add:

- title: "New Section Name"
  slug: "newsection"

- `title` is what appears on the tile
- `slug` is used for the URL and file name

---

### Step 2: Create the Markdown file

Create a new file:
content/career/newsection.md

Add:

---

## title: "New Section Name"

## Your Content Here

---

### Step 3: Create the page (IMPORTANT)

Create a folder:
app/resources/career/newsection/

Inside it, create:
page.tsx

Copy an existing page (like resume/page.tsx) and update the file path to:

const filePath = path.join(
process.cwd(),
"content",
"career",
"newsection.md"
);

---

## Key Concept: Slug

A slug is the name used in the URL.

Example:
slug: "resume"

This connects everything:

- URL → /resources/career/resume
- File → resume.md
- Page → app/resources/career/resume/page.tsx

All three must match exactly.

---

## Common Mistakes

- Slug does not match file name
- Forgot to create page.tsx
- File placed in wrong folder

---

## How Everything Connects

1. Sections are defined in career.md
2. Each section has a slug
3. The slug maps to:
   - a Markdown file
   - a page
4. The page loads the Markdown file and displays it

---
