import { stats } from "@/lib/content";

/**
 * The numbers do the persuading, so they get the largest type
 * outside the hero and nothing else competes with them.
 */
const StatRow = () => (
  <div className="border-y border-line bg-surface">
    <dl className="container grid grid-cols-2 gap-x-6 gap-y-9 py-12 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-1.5">
          <dt className="sr-only">
            {stat.label} ({stat.note})
          </dt>
          <dd>
            <span className="block font-mono text-3xl font-medium tracking-tight text-baseColor sm:text-4xl">
              {stat.value}
            </span>
            <span className="mt-2 block text-sm text-muted" aria-hidden="true">
              {stat.label}
            </span>
            <span className="text-meta text-faint" aria-hidden="true">
              {stat.note}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  </div>
);

export default StatRow;
