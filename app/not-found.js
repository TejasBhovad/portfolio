import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import { PageHeader } from "@/components/site/section";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <Nav />
      <main
        id="main"
        className="flex min-h-[68vh] flex-col justify-center pb-section"
      >
        <PageHeader
          eyebrow="Error 404"
          title={
            <>
              Nothing
              <br />
              here.
            </>
          }
        >
          That page doesn&apos;t exist — it may have been renamed, or never
          existed at all.
        </PageHeader>
        <div className="container">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-baseColor transition-colors hover:bg-toggleHover"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              strokeWidth={2}
              aria-hidden="true"
            />
            Back home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
