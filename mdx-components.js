import Image from "next/image";

/** Styling for raw markdown inside MDX case-study pages. */
export function useMDXComponents(components) {
  return {
    h1: ({ children }) => <h1 className="text-h2 text-baseColor">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-label text-faint">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-h3 text-baseColor">{children}</h3>,
    p: ({ children }) => <p className="text-body text-muted">{children}</p>,
    ul: ({ children }) => (
      <ul className="flex list-disc flex-col gap-2 pl-5 text-body text-muted">
        {children}
      </ul>
    ),
    a: ({ children, ...props }) => (
      <a className="text-accent link-underline" {...props}>
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-medium text-baseColor">{children}</strong>
    ),
    code: ({ children }) => (
      <code className="rounded border border-line bg-surface px-1.5 py-0.5 text-meta text-baseColor">
        {children}
      </code>
    ),
    img: (props) => (
      <Image sizes="100vw" style={{ width: "100%", height: "auto" }} {...props} />
    ),
    ...components,
  };
}
