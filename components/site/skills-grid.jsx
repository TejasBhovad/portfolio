import { skills } from "@/lib/content";

const SkillsGrid = () => (
  <dl className="flex flex-col">
    {skills.map((group, i) => (
      <div
        key={group.group}
        className={`grid grid-cols-1 gap-3 sm:grid-cols-12 sm:gap-8 ${
          i === 0 ? "pb-6" : "border-t border-line py-6"
        }`}
      >
        <dt className="text-label pt-1.5 text-faint sm:col-span-3 lg:col-span-2">
          {group.group}
        </dt>
        <dd className="sm:col-span-9 lg:col-span-10">
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-md border border-line bg-surface px-2.5 py-1 text-meta text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </dd>
      </div>
    ))}
  </dl>
);

export default SkillsGrid;
