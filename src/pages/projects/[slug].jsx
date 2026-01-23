import { readFileSync } from "fs";
import ProjectLayout from "../../components/project-layout";
import { mdxComponents } from "../../components/mdx-components";

// Import MDX files
import McRenderContent, {
    metadata as mcRenderMetadata,
} from "../../../private/projects/mcrender.mdx";
import RemoteUploadContent, {
    metadata as remoteUploadMetadata,
} from "../../../private/projects/remoteupload.mdx";
import UnboxdContent, {
    metadata as unboxdMetadata,
} from "../../../private/projects/unboxd.mdx";

// Map slugs to content and metadata
const projectMap = {
    mcrender: {
        Content: McRenderContent,
        metadata: mcRenderMetadata,
    },
    remoteupload: {
        Content: RemoteUploadContent,
        metadata: remoteUploadMetadata,
    },
    unboxd: {
        Content: UnboxdContent,
        metadata: unboxdMetadata,
    },
};

export default async function ProjectPage({ slug }) {
    const project = projectMap[slug];

    if (!project) {
        return (
            <div className="min-h-[calc(100vh-9rem)] flex flex-col bg-background border-2 border-muted items-center justify-center p-10">
                <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
                <p className="mb-6 text-primary/70">The project slug "{slug}" doesn't exist.</p>
                <a href="/projects" className="underline font-semibold">
                    ← Back to projects
                </a>
            </div>
        );
    }

    const { Content, metadata } = project;

    return (
        <ProjectLayout metadata={metadata}>
            <Content components={mdxComponents} />
        </ProjectLayout>
    );
}

export const getConfig = async () => {
    const file = readFileSync("./private/projects.json", "utf8");
    const projects = JSON.parse(file);

    return {
        render: "static",
        staticPaths: projects.map((project) => project.slug),
    };
};
