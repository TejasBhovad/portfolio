/**
 * Every section carries a numbered mono eyebrow and a hairline.
 * That repetition is the page's structure — it's what lets the
 * headings stay quiet without the page turning to mush.
 */
export const SectionHeading = ({ index, title, aside, className = "" }) => (
  <div className={`flex items-baseline gap-4 ${className}`}>
    <span className="text-label text-accent" aria-hidden="true">
      {index}
    </span>
    <h2 className="text-label whitespace-nowrap text-faint">{title}</h2>
    <span className="h-px w-full translate-y-[-4px] bg-line" aria-hidden="true" />
    {aside && <span className="text-meta shrink-0 text-faint">{aside}</span>}
  </div>
);

/** Page intro: eyebrow, display heading, lead paragraph. */
export const PageHeader = ({ eyebrow, title, children }) => (
  <header className="container pb-14 pt-14 sm:pt-20">
    <p className="text-label mb-6 text-accent">{eyebrow}</p>
    <h1 className="text-display text-baseColor">{title}</h1>
    {children && <p className="measure mt-7 text-lead text-muted">{children}</p>}
  </header>
);

const Section = ({ index, title, aside, blurb, children, id, className = "" }) => (
  <section id={id} className={`container scroll-mt-20 pt-section ${className}`}>
    <SectionHeading index={index} title={title} aside={aside} />
    {blurb && <p className="measure mt-6 text-body text-muted">{blurb}</p>}
    <div className="mt-10 sm:mt-14">{children}</div>
  </section>
);

export default Section;
