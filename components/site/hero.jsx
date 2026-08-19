"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/lib/content";

const ModelDisplay = dynamic(() => import("@/components/ModelDisplay"), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
});

const Hero = () => (
  <section className="container grid grid-cols-1 gap-5 pb-section pt-0 sm:gap-10 sm:pt-16 lg:grid-cols-12 lg:items-stretch lg:gap-10 lg:pt-20">
    <div className="order-2 flex flex-col items-start justify-center lg:order-1 lg:col-span-7">
      <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line py-1.5 pl-2.5 pr-3.5 text-meta text-muted">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        {profile.status}
      </p>

      <h1 className="text-display text-baseColor">
        {profile.name.split(" ")[0]}
        <br />
        {profile.name.split(" ")[1]}
      </h1>

      <p className="measure mt-7 text-lead text-muted">{profile.tagline}</p>

      <dl className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-meta text-faint">
        <dt className="sr-only">Working on</dt>
        <dd className="text-muted">{profile.focus}</dd>
        <span aria-hidden="true">/</span>
        <dt className="sr-only">Location</dt>
        <dd className="inline-flex items-center gap-1.5">
          <MapPin
            className="h-3.5 w-3.5"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          {profile.location}
        </dd>
      </dl>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <Link
          href={profile.resume}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full bg-inverted px-5 py-2.5 text-sm font-medium text-inverted transition-opacity hover:opacity-90"
        >
          Résumé
          <ArrowUpRight
            className="h-4 w-4"
            strokeWidth={2}
            aria-hidden="true"
          />
        </Link>
        <Link
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-baseColor transition-colors hover:bg-toggleHover"
        >
          Get in touch
        </Link>
        <Link
          href={profile.github}
          target="_blank"
          className="px-2 py-2.5 text-sm text-muted link-underline hover:text-baseColor"
        >
          GitHub
        </Link>
      </div>
    </div>

    <div
      className="hero-stage order-1 -mx-5 h-[18.5rem] w-[calc(100%+2.5rem)] sm:mx-0 sm:h-[22rem] sm:w-full lg:order-2 lg:col-span-5 lg:h-full lg:min-h-[32rem]"
      aria-hidden="true"
    >
      <ModelDisplay />
    </div>
  </section>
);

export default Hero;
