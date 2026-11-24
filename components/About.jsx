import { MdAutoAwesome, MdCode, MdDevices } from 'react-icons/md';
import SectionHeading from './SectionHeading';
import { useTranslation } from '@/lib/i18n';

const highlights = [
  { id: 'code', icon: MdCode },
  { id: 'interfaces', icon: MdDevices },
  { id: 'ai', icon: MdAutoAwesome },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="border-t border-slate-200/80 py-16 md:py-24 dark:border-slate-800/80"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <SectionHeading
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={t.about.description}
          />

          <ul className="space-y-4">
            {highlights.map(({ id, icon: Icon }) => {
              const { title, description } = t.about.highlights[id];

              return (
                <li
                  key={id}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-200 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-brand-500/40"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-xl text-brand-600 ring-1 ring-brand-100 dark:bg-brand-500/10 dark:text-brand-400 dark:ring-brand-500/20">
                    <Icon aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
