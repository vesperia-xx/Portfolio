import { AiOutlineDownload } from 'react-icons/ai';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import LanguageSwitcher from './LanguageSwitcher';
import { useTheme } from './ThemeProvider';
import { useTranslation } from '@/lib/i18n';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { cvHref, t } = useTranslation();

  const links = [
    { href: '#about', label: t.nav.links.about },
    { href: '#services', label: t.nav.links.services },
    { href: '#projects', label: t.nav.links.projects },
    { href: '#contact', label: t.nav.links.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-8">
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-2 rounded-lg py-1"
          aria-label={t.a11y.home}
        >
          <span className="h-2 w-2 rounded-full bg-brand-500 transition-transform group-hover:scale-125" />
          <span className="font-display text-[13px] font-bold tracking-[0.12em] text-slate-900 sm:text-[15px] sm:tracking-[0.14em] dark:text-white">
            RICARDO<span className="text-brand-700 dark:text-brand-400">.DEV</span>
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-3">
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium whitespace-nowrap text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <span aria-hidden className="mx-1 hidden h-5 w-px bg-slate-200 lg:block dark:bg-slate-800" />

          <LanguageSwitcher />

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? t.a11y.themeLight : t.a11y.themeDark}
            aria-pressed={isDark}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-brand-300 hover:text-brand-600 sm:h-9 sm:w-9 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:text-brand-400"
          >
            <BsSunFill
              aria-hidden
              className="hidden text-[17px] text-amber-400 dark:block"
            />
            <BsFillMoonStarsFill
              aria-hidden
              className="text-[15px] text-slate-700 dark:hidden"
            />
          </button>

          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.nav.downloadCv}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-700 px-2.5 py-2 text-sm font-semibold whitespace-nowrap text-white shadow-sm shadow-brand-700/25 transition-colors hover:bg-brand-800 sm:px-4"
          >
            <AiOutlineDownload aria-hidden className="text-base" />
            <span className="hidden sm:inline">{t.nav.downloadCv}</span>
          </a>
        </div>
      </nav>

      {/* En pantallas pequeñas los enlaces de la barra superior no caben;
          esta fila los deja a un toque sin abrir un menú. */}
      <nav
        aria-label={t.a11y.sectionNavigation}
        className="border-t border-slate-200/80 lg:hidden dark:border-slate-800/80"
      >
        <ul className="mx-auto flex w-full max-w-6xl gap-1 overflow-x-auto px-4 py-2 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {links.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="inline-flex min-h-8 items-center rounded-full px-3 text-xs font-medium whitespace-nowrap text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
