import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import { PageHeader } from "@/components/site/section";

export const metadata = {
  title: "Blog",
  description: "Writing by Tejas Bhovad — currently hosted elsewhere.",
  alternates: { canonical: "/blog" },
};

const Page = () => (
  <>
    <Nav />
    <main id="main" className="flex min-h-[68vh] flex-col justify-center pb-section">
      <PageHeader
        eyebrow="Writing"
        title={
          <>
            Not here
            <br />
            yet.
          </>
        }
      >
        The blog hasn&apos;t moved onto this site. Everything I&apos;ve written
        so far lives in my docs space — build notes, university material, and the
        occasional write-up of something that broke.
      </PageHeader>
      <div className="container">
        <Link
          href="https://tejasbhovad.github.io/docs/blog"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full bg-inverted px-5 py-2.5 text-sm font-medium text-inverted transition-opacity hover:opacity-90"
        >
          Read it there
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>
    </main>
    <Footer />
  </>
);

export default Page;
