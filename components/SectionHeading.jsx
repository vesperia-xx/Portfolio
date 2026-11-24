export default function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }) {
  const isCentered = align === 'center';

  return (
    <div
      className={`${isCentered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.18em] text-brand-700 uppercase dark:text-brand-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">{description}</p>
      )}
    </div>
  );
}
