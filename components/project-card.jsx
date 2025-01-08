import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function ProjectCard({ title, description, image, link }) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0">
        <div className="h-12 w-12 overflow-hidden rounded-lg">
          <Image
            src={`/images/${image}`}
            alt={title}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 items-center justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          {link && (
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
