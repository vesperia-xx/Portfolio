import Image from 'next/image';
import { AiOutlineArrowRight, AiOutlineGithub, AiOutlineGlobal } from 'react-icons/ai';
import SectionHeading from './SectionHeading';
import projects from '../data/projects';
import { useTranslation } from '@/lib/i18n';

export default function Projects() {
  const { locale, t } = useTranslation();

  return (
    <section
      id="projects"
      className="border-t border-slate-200/80 py-16 md:py-24 dark:border-slate-800/80"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-brand-500/40"
            >
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden
                className="relative block aspect-[16/10] overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800"
              >
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </a>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {project.description[locale]}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700 ring-1 ring-brand-100 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-500/20"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                  >
                    <AiOutlineGithub aria-hidden className="text-base" />
                    {t.projects.code}
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-2 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-600 hover:text-white dark:bg-brand-500/10 dark:text-brand-300 dark:hover:bg-brand-500 dark:hover:text-slate-950"
                  >
                    <AiOutlineGlobal aria-hidden className="text-base" />
                    {t.projects.demo}
                    <AiOutlineArrowRight
                      aria-hidden
                      className="text-sm transition-transform group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
