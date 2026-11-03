// Turns the client build into static HTML, so crawlers and link previews
// see the full content without running JavaScript.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const outDir = join(root, "build");
const ssrDir = join(root, "build-ssr");
// Netlify exposes the project's primary URL, including a custom domain, as URL.
const siteUrl = (process.env.URL ?? "https://aurelien-luxey.netlify.app").replace(/\/$/, "");

const { render, pages, site } = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href);
const template = await readFile(join(outDir, "index.html"), "utf8");

const escapeHtml = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.jobTitle,
  url: `${siteUrl}/`,
  email: `mailto:${site.email}`,
  image: `${siteUrl}/og-image.png`,
  sameAs: [site.linkedin, site.github],
}).replace(/</g, "\\u003c");

const buildPage = ({ path, title, description, robots = "index, follow", structuredData = false }) =>
  template
    .replaceAll("__TITLE__", () => escapeHtml(title))
    .replaceAll("__DESCRIPTION__", () => escapeHtml(description))
    .replaceAll("__ROBOTS__", robots)
    .replaceAll("__CANONICAL__", `${siteUrl}${path}`)
    .replaceAll("__SITE_URL__", siteUrl)
    .replace(
      "<!--json-ld-->",
      () => (structuredData ? `<script type="application/ld+json">${jsonLd}</script>` : "")
    )
    .replace("<!--app-->", () => render(path));

const write = async (file, content) => {
  const target = join(outDir, file);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, content);
};

for (const [path, meta] of Object.entries(pages)) {
  const file = path === "/" ? "index.html" : `${path.slice(1)}index.html`;
  await write(file, buildPage({ path, ...meta, structuredData: path === "/" }));
}

await write(
  "404.html",
  buildPage({
    path: "/404/",
    title: "Page introuvable — Aurélien Luxey",
    description: "Cette page n’existe pas ou plus.",
    robots: "noindex",
  })
);

const urls = Object.keys(pages)
  .map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`)
  .join("\n");
await write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
await write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);

await rm(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${Object.keys(pages).length + 1} pages for ${siteUrl}`);
