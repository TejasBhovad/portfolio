// Custom MDX components for styled content rendering
export const mdxComponents = {
    // Headings
    h1: ({ children }) => (
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 mt-8 first:mt-0">
            {children}
        </h1>
    ),
    h2: ({ children }) => (
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 mt-8 flex items-center gap-2 text-left">
            {children}
        </h2>
    ),
    h3: ({ children }) => (
        <h3 className="text-xl sm:text-2xl font-semibold mb-3 mt-6 text-left">{children}</h3>
    ),
    h4: ({ children }) => (
        <h4 className="text-lg sm:text-xl font-semibold mb-2 mt-4 text-left">{children}</h4>
    ),

    // Paragraphs
    p: ({ children }) => (
        <p className="mb-4 leading-relaxed text-base sm:text-base text-left">{children}</p>
    ),

    // Lists
    ul: ({ children }) => (
        <ul className="mb-4 ml-0 pl-4 space-y-2 list-disc text-left">{children}</ul>
    ),
    ol: ({ children }) => (
        <ol className="mb-4 ml-0 pl-5 space-y-2 list-decimal text-left">{children}</ol>
    ),
    li: ({ children }) => (
        <li className="leading-relaxed text-left">
            {children}
        </li>
    ),

    // Images
    img: ({ src, alt, ...props }) => (
        <div className="my-8 -mx-4 sm:-mx-6 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)]">
            <img
                src={src}
                alt={alt}
                className="w-full h-auto block border-y-2 border-muted object-cover"
                {...props}
            />
            {alt && <span className="text-sm text-primary/50 text-left italic px-4 sm:px-6 mt-2 block">{alt}</span>}
        </div>
    ),

    // Links
    a: ({ href, children }) => (
        <a
            href={href}
            className="text-primary underline hover:text-primary/70 transition-colors"
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        >
            {children}
        </a>
    ),

    // Code
    code: ({ children, className }) => {
        const isInline = !className;
        if (isInline) {
            return (
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
                    {children}
                </code>
            );
        }
        return (
            <code className="block bg-muted p-4 rounded border-2 border-muted overflow-x-auto text-sm font-mono mb-4">
                {children}
            </code>
        );
    },

    pre: ({ children }) => <pre className="mb-4">{children}</pre>,

    // Blockquotes
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-primary pl-4 py-2 mb-4 italic text-primary/70">
            {children}
        </blockquote>
    ),

    // Horizontal Rule
    hr: () => <hr className="border-t-2 border-muted my-8" />,

    // Strong/Bold
    strong: ({ children }) => (
        <strong className="font-semibold">{children}</strong>
    ),

    // Emphasis/Italic
    em: ({ children }) => <em className="italic">{children}</em>,
};
