import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { useTranslation } from '@/lib/i18n';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="border-t border-slate-200/80 py-16 md:py-24 dark:border-slate-800/80"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-50 via-white to-cyan-50 px-6 py-14 text-center sm:px-12 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-400/25 blur-3xl dark:bg-brand-500/15"
          />

          <div className="relative">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand-700 uppercase dark:text-brand-400">
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
              {t.contact.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:elrricardo_5@hotmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-700/25 transition-colors hover:bg-brand-800"
              >
                <AiOutlineMail aria-hidden className="text-base" />
                {t.contact.emailCta}
              </a>
              <a
                href="https://www.linkedin.com/in/ricardo-aguilera-pro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 dark:hover:border-brand-500/50 dark:hover:text-brand-300"
              >
                <AiFillLinkedin aria-hidden className="text-base" />
                LinkedIn
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              {t.contact.direct}{' '}
              <a
                href="mailto:elrricardo_5@hotmail.com"
                className="font-medium text-brand-700 underline decoration-brand-300 underline-offset-4 transition-colors hover:decoration-brand-600 dark:text-brand-300 dark:decoration-brand-500/40"
              >
                elrricardo_5@hotmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
