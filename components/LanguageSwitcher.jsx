import { useRouter } from 'next/router';
import { useTranslation } from '@/lib/i18n';

const options = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
];

// Next solo lee esta cookie en el servidor; escribirla aquí hace que la
// elección manual sobreviva a futuras visitas a la raíz.
function persistLocale(locale) {
  try {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`;
  } catch (error) {
    // Sin cookies seguimos navegando: el idioma queda fijado en la URL.
  }
}

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, t } = useTranslation();

  const changeLocale = (nextLocale) => {
    if (nextLocale === locale) return;

    persistLocale(nextLocale);

    const hashIndex = router.asPath.indexOf('#');
    const hash = hashIndex === -1 ? '' : router.asPath.slice(hashIndex);

    router.push({ pathname: router.pathname, query: router.query }, `/${hash}`, {
      locale: nextLocale,
      scroll: false,
    });
  };

  return (
    <div
      role="group"
      aria-label={t.a11y.language}
      className="inline-flex shrink-0 items-center rounded-full border border-slate-200 bg-white p-0.5 dark:border-slate-800 dark:bg-slate-900"
    >
      {options.map(({ code, label, name }) => {
        const isActive = locale === code;

        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-label={name}
            aria-pressed={isActive}
            onClick={() => changeLocale(code)}
            className={`min-h-8 min-w-8 rounded-full px-2 py-1 text-xs font-semibold transition-colors sm:min-h-9 sm:min-w-9 sm:px-2.5 ${
              isActive
                ? 'bg-brand-700 text-white dark:bg-brand-500 dark:text-slate-950'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
