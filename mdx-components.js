import Image from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1
        className="sm:text-4xl text-2xl font-bold w-full text-start text-baseColor
      "
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className="sm:text-3xl text-xl font-bold w-full text-start text-baseColor/75
      "
      >
        {children}
      </h2>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...props}
      />
    ),
    // bold
    strong: ({ children }) => (
      <strong className="font-bold text-baseColor">{children}</strong>
    ),
    ...components,
  };
}
