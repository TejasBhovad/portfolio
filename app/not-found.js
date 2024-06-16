import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-base">
      <div className="max-w-md px-4 text-center">
        <h1 className="text-8xl font-bold text-baseColor">404</h1>
        <p className="mt-4 text-lg text-muted">
          Oops, the page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center mt-8 px-4 py-2 text-sm font-medium bg-inverted text-inverted rounded-md"
          prefetch={false}
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
