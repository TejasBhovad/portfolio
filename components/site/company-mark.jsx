"use client";

import { useState } from "react";

// Initials for multi-word names, first two letters otherwise.
const initials = (name) => {
  const words = name.split(" ").filter(Boolean);
  return (
    words.length > 1 ? words.slice(0, 2).map((w) => w[0]).join("") : name.slice(0, 2)
  ).toUpperCase();
};

/**
 * Shows the company logo when the file exists and falls back to a monogram
 * when it doesn't — so a missing asset degrades quietly instead of leaving a
 * broken image in the middle of the experience list.
 */
const CompanyMark = ({ name, logo }) => {
  const [failed, setFailed] = useState(false);

  if (logo && !failed) {
    return (
      // Plain <img>: next/image can't recover from a 404 the way onError can.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo}
        alt=""
        width={80}
        height={80}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-10 w-10 shrink-0 rounded-md border border-line object-cover"
      />
    );
  }

  return (
    <span
      className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line bg-base font-mono text-sm text-muted"
      aria-hidden="true"
    >
      {initials(name)}
    </span>
  );
};

export default CompanyMark;
