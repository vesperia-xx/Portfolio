import Image from 'next/image';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineArrowRight,
  AiOutlineDownload,
} from 'react-icons/ai';
import {
  SiDocker,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { useTranslation } from '@/lib/i18n';

const stack = [
  { label: 'Next.js', icon: SiNextdotjs },
  { label: 'React', icon: SiReact },
  { label: 'TypeScript', icon: SiTypescript },
  { label: 'Tailwind', icon: SiTailwindcss },
  { label: 'Node.js', icon: SiNodedotjs },
  { label: 'PostgreSQL', icon: SiPostgresql },
  { label: 'Prisma', icon: SiPrisma },
  { label: 'Docker', icon: SiDocker },
];

export default function Hero() {
  const { cvHref, t } = useTranslation();

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-brand-400/20 blur-[110px] dark:bg-brand-500/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-14 pb-16 sm:px-8 md:pt-20 md:pb-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              {t.hero.availability}
            </span>

            <h1 className="mt-6 font-display text-4xl leading-[1.08] font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.75rem] dark:text-white">
              Ricardo{' '}
              <span className="bg-gradient-to-r from-brand-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent dark:from-brand-400 dark:via-teal-300 dark:to-cyan-400">
                Aguilera
              </span>
            </h1>

            <p className="mt-5 text-base font-medium text-slate-700 sm:text-lg dark:text-slate-300">
              {t.hero.role}
              <span aria-hidden className="mx-2 text-brand-500">
                ·
              </span>
              {t.hero.discipline}
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
              {t.hero.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-700/25 transition-colors hover:bg-brand-800 sm:w-auto"
              >
                {t.hero.ctaProjects}
                <AiOutlineArrowRight
                  aria-hidden
                  className="text-base transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={cvHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-700 sm:w-auto dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-500/50 dark:hover:text-brand-300"
              >
                <AiOutlineDownload aria-hidden className="text-base" />
                {t.hero.ctaCv}
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/vesperia-xx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.a11y.github}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-600 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:text-brand-400"
              >
                <AiFillGithub aria-hidden />
              </a>
              <a
                href="https://www.linkedin.com/in/ricardo-aguilera-pro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.a11y.linkedin}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-600 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:text-brand-400"
              >
                <AiFillLinkedin aria-hidden />
              </a>
              <a
                href="mailto:elrricardo_5@hotmail.com"
                aria-label={t.a11y.email}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-600 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:text-brand-400"
              >
                <AiFillMail aria-hidden />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-xs lg:max-w-sm">
            <div
              aria-hidden
              className="absolute inset-6 rounded-full bg-gradient-to-tr from-brand-400/40 to-cyan-400/40 blur-3xl"
            />
            <div className="relative aspect-square rounded-full bg-gradient-to-tr from-brand-500 via-teal-400 to-cyan-400 p-[3px] shadow-2xl shadow-brand-500/20">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <Image
                  src="/avatar.jpg"
                  alt={t.hero.avatarAlt}
                  fill
                  preload
                  sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 18rem"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200/80 pt-8 dark:border-slate-800/80">
          <p className="text-center text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400">
            {t.hero.stackLabel}
          </p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {stack.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
              >
                <Icon aria-hidden className="text-lg" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
