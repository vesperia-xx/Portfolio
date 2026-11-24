import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineArrowUp } from 'react-icons/ai';
import { useTranslation } from '@/lib/i18n';

export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { href: '#about', label: t.nav.links.about },
    { href: '#services', label: t.nav.links.services },
    { href: '#projects', label: t.nav.links.projects },
    { href: '#contact', label: t.nav.links.contact },
  ];

  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/60 dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-2 rounded-lg py-1">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              <span className="font-display text-[15px] font-bold tracking-[0.14em] text-slate-900 dark:text-white">
                RICARDO<span className="text-brand-700 dark:text-brand-400">.DEV</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600 dark:text-slate-400">
              {t.footer.tagline}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://github.com/vesperia-xx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.a11y.github}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-base text-slate-600 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:text-brand-400"
              >
                <AiFillGithub aria-hidden />
              </a>
              <a
                href="https://www.linkedin.com/in/ricardo-aguilera-pro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.a11y.linkedin}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-base text-slate-600 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:text-brand-400"
              >
                <AiFillLinkedin aria-hidden />
              </a>
              <a
                href="mailto:elrricardo_5@hotmail.com"
                aria-label={t.a11y.email}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-base text-slate-600 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:text-brand-400"
              >
                <AiFillMail aria-hidden />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400">
              {t.footer.navigation}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-600 transition-colors hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400">
              {t.footer.contact}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:elrricardo_5@hotmail.com"
                  className="text-slate-600 transition-colors hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-300"
                >
                  elrricardo_5@hotmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ricardo-aguilera-pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 transition-colors hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vesperia-xx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 transition-colors hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-300"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-6 text-xs text-slate-500 sm:flex-row dark:border-slate-800/80 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} Ricardo Aguilera. {t.footer.rights}
          </p>
          <div className="flex items-center gap-5">
            <p>{t.footer.builtWith}</p>
            <a
              href="#top"
              className="inline-flex items-center gap-1 rounded-full font-medium text-slate-600 transition-colors hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-300"
            >
              {t.footer.backToTop}
              <AiOutlineArrowUp aria-hidden className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
