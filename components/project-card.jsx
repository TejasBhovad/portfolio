import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function ProjectCard({ title, description, image, link }) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <Card className="group bg-background  text-text border-0 overflow-hidden shadow-sm hover:shadow-md hover:shadow-primary/20 transition-all">
        <CardHeader className="flex flex-row items-center gap-4 space-y-0">
          <div className="h-full aspect-square overflow-hidden rounded-sm">
            <Image
              src={`/images/${image}`}
              alt={title}
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 items-center justify-between">
            <CardTitle className="flex flex-col gap-1">
              <span className="text-xl font-semibold">{title}</span>
              <p className="text-muted text-sm font-normal">{description}</p>
            </CardTitle>
            {link && (
              <ExternalLink className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
            )}
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
