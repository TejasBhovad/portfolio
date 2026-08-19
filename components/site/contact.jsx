import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/content";
import ContactForm from "@/app/components/ContactForm";

const elsewhere = [
  { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "GitHub", href: profile.github, value: "@TejasBhovad" },
  { label: "LinkedIn", href: profile.linkedin, value: "tejas-bhovad" },
  { label: "Résumé", href: profile.resume, value: "PDF" },
];

const Contact = () => (
  <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
    <div className="lg:col-span-7">
      <h3 className="text-h2 text-baseColor">
        Let&apos;s build
        <br />
        something.
      </h3>
      <p className="measure mt-5 text-lead text-muted">
        Always up for a conversation about real-time systems, 3D on the web, or
        whatever you happen to be building. The form goes straight to my inbox.
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>

    <dl className="lg:col-span-5 lg:pt-2">
      {elsewhere.map((item, i) => (
        <div
          key={item.label}
          className={`flex items-baseline justify-between gap-4 py-4 ${
            i === 0 ? "" : "border-t border-line"
          }`}
        >
          <dt className="text-label text-faint">{item.label}</dt>
          <dd>
            <Link
              href={item.href}
              target={item.href.startsWith("mailto") ? undefined : "_blank"}
              className="group inline-flex items-center gap-1.5 text-meta text-baseColor"
            >
              <span className="link-underline">{item.value}</span>
              <ArrowUpRight
                className="h-3.5 w-3.5 text-faint transition-colors group-hover:text-accent"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </dd>
        </div>
      ))}
    </dl>
  </div>
);

export default Contact;
