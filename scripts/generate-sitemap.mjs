import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const publicDir = join(process.cwd(), 'public');
const generatedFiles = ['sitemap.xml', 'robots.txt'];

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : '')
).replace(/\/$/, '');

if (!siteUrl) {
  // Evita dejar archivos obsoletos de un build anterior con otro dominio.
  for (const file of generatedFiles) {
    rmSync(join(publicDir, file), { force: true });
  }

  console.log(
    '[sitemap] Sin dominio configurado: se omiten sitemap.xml y robots.txt (no se inventan URLs).',
  );
  process.exit(0);
}

const lastmod = new Date().toISOString().slice(0, 10);

const urls = [
  { loc: `${siteUrl}/`, locale: 'en' },
  { loc: `${siteUrl}/es/`, locale: 'es' },
];

const alternates = [
  ['en', `${siteUrl}/`],
  ['es', `${siteUrl}/es/`],
  ['x-default', `${siteUrl}/`],
];

const entries = urls
  .map(({ loc }) => {
    const links = alternates
      .map(([hreflang, href]) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>`)
      .join('\n');

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
${links}
  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

mkdirSync(publicDir, { recursive: true });
writeFileSync(join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
writeFileSync(join(publicDir, 'robots.txt'), robots, 'utf8');

console.log(`[sitemap] Generados sitemap.xml y robots.txt para ${siteUrl}`);
