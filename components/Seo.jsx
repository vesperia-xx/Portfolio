import Head from 'next/head';
import { DEFAULT_LOCALE, LOCALES, useTranslation } from '@/lib/i18n';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '');

function localeUrl(locale, path) {
  if (!SITE_URL) return undefined;
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return `${SITE_URL}${prefix}${path}`;
}

export default function Seo({ path = '/' }) {
  const { locale, t } = useTranslation();
  const { title, description, ogImageAlt, ogLocale, ogLocaleAlternate } = t.meta;

  const url = localeUrl(locale, path);
  const imageUrl = SITE_URL ? `${SITE_URL}/og-image.png` : undefined;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Ricardo Aguilera" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ricardo Aguilera" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={ogLocaleAlternate} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageUrl && <meta property="og:image:width" content="1200" />}
      {imageUrl && <meta property="og:image:height" content="630" />}
      {imageUrl && <meta property="og:image:alt" content={ogImageAlt} />}

      <meta name="twitter:card" content={imageUrl ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {url && <link rel="canonical" href={url} />}

      {SITE_URL &&
        LOCALES.map((alternate) => (
          <link
            key={alternate}
            rel="alternate"
            hrefLang={alternate}
            href={localeUrl(alternate, path)}
          />
        ))}
      {SITE_URL && (
        <link rel="alternate" hrefLang="x-default" href={localeUrl(DEFAULT_LOCALE, path)} />
      )}
    </Head>
  );
}
