// En Vercel se usa el dominio de producción automáticamente; en local se puede
// fijar con NEXT_PUBLIC_SITE_URL. Sin valor, se omiten canonical y Open Graph.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
  // Inglés en `/` y español en `/es`. La detección del navegador la hace
  // `proxy.js`, que entiende etiquetas regionales como `es-CL` o `es-419`.
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  reactStrictMode: true,
};

export default nextConfig;
