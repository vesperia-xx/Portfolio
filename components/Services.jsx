import { AiOutlineCheck } from 'react-icons/ai';
import { MdBuild, MdCode, MdStorage } from 'react-icons/md';
import SectionHeading from './SectionHeading';
import { useTranslation } from '@/lib/i18n';

const services = [
  { id: 'frontend', icon: MdCode },
  { id: 'backend', icon: MdStorage },
  { id: 'automation', icon: MdBuild },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section
      id="services"
      className="border-t border-slate-200/80 py-16 md:py-24 dark:border-slate-800/80"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, icon: Icon }) => {
            const { title, description, category, list } = t.services.items[id];

            return (
              <article
                key={id}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-brand-500/40"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/10 dark:text-brand-400 dark:ring-brand-500/20 dark:group-hover:bg-brand-500 dark:group-hover:text-slate-950">
                  <Icon aria-hidden />
                </span>

                <h3 className="mt-5 min-h-[3.5rem] font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {description}
                </p>

                <p className="mt-6 text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase dark:text-slate-400">
                  {category}
                </p>
                <ul className="mt-3 space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                  {list.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <AiOutlineCheck
                        aria-hidden
                        className="mt-0.5 shrink-0 text-base text-brand-600 dark:text-brand-400"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
