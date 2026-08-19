// Single source of truth for everything on the site.
// Mirrors RESUME_PUBLIC.pdf — update here, the pages follow.

export const profile = {
  name: "Tejas Bhovad",
  handle: "TejasBhovad",
  role: "Software Engineer",
  company: "MC Render",
  location: "Mumbai, India",
  email: "tejasbhovad@gmail.com",
  site: "https://www.tejasbhovad.com",
  github: "https://github.com/TejasBhovad",
  linkedin: "https://www.linkedin.com/in/tejas-bhovad",
  youtube: "https://www.youtube.com/@tejasbhovad",
  resume: "/resume.pdf",
  // The one line that has to do the most work on the page.
  tagline:
    "Full-stack developer with an indie hacker's habit: build the thing, watch the graph, keep going. I like problems that end with a number going up.",
  // Shown under the tagline, in place of a job title.
  focus: "Building MC Render",
  // The hero chip. It sits above your name, so it should say something the
  // meta line underneath doesn't already — availability ("Open to new roles",
  // "Booked until March") is the usual job for it. Keep it true.
  status: "B.Tech CS, class of 2026",
};

export const stats = [
  { value: "800K+", label: "Downloads", note: "Minecraft mods" },
  { value: "30K", label: "Monthly actives", note: "Shipped product" },
  { value: "Top 2%", label: "Hackathon finalist", note: "15,000+ entrants" },
  { value: "9.76", label: "CGPA", note: "B.Tech CS" },
];

export const experience = [
  {
    company: "Weatherford",
    role: "Research Development Engineer",
    kind: "Intern",
    from: "June 2026",
    to: "August 2026",
    location: "Navi Mumbai, IN",
    logo: "/logos/weatherford.png",
    stack: ["C#", ".NET", "WebSockets", "Avro"],
    points: [
      {
        title: "Protocol modernization",
        body: "Migrated a real-time well-data service from WITSML 1.x to the ETP 2.1 standard in C# and .NET, replacing legacy SOAP/XML request-response polling with a WebSocket-based publish/subscribe transport.",
      },
      {
        title: "Real-time data streaming",
        body: "Implemented Avro-encoded ETP message handlers and subscription channels over WebSockets, so clients receive incremental well-log updates as they change instead of repeatedly fetching full documents.",
      },
    ],
  },
  {
    company: "Vector Consulting Group",
    role: "Software Development Engineer",
    kind: "Intern",
    from: "January 2026",
    to: "May 2026",
    location: "Thane, IN",
    logo: "/logos/vector.png",
    stack: ["React", "Bootstrap"],
    points: [
      {
        title: "Workflow automation",
        body: "Maintained a task management system in React.js and Bootstrap, optimizing client workflows for large companies and SMBs and reducing task completion time by 30%.",
      },
      {
        title: "Proof of concepts",
        body: "Built rapid prototypes that accelerated business decisions and set realistic expectations, improving client alignment on scope and timelines.",
      },
    ],
  },
  {
    company: "Vigovia",
    role: "Software Development Engineer",
    kind: "Intern",
    from: "August 2025",
    to: "December 2025",
    location: "Remote",
    logo: "/logos/vigovia.png",
    stack: ["Go", "Next.js", "PostHog", "Figma"],
    points: [
      {
        title: "Digital transformation",
        body: "Led frontend development for a travel booking platform, translating Figma designs into production interfaces that digitized 90% of offline operations and lifted user engagement by 25%.",
      },
      {
        title: "Backend architecture",
        body: "Architected RESTful API endpoints in Go following SOLID principles and integrated PostHog analytics, raising tracking accuracy by 35% and cutting booking errors by 20%.",
      },
    ],
  },
];

export const earlier = [
  {
    company: "Oddmind Innovations",
    role: "Full Stack Developer",
    kind: "Intern",
    from: "July 2024",
    to: "August 2024",
  },
  {
    company: "Minecraft Modding",
    role: "Freelance",
    kind: "",
    from: "May 2021",
    to: "May 2022",
  },
];

export const education = {
  school: "Ramrao Adik Institute of Technology",
  degree: "B.Tech, Computer Science",
  detail: "CGPA 9.76",
  from: "June 2022",
  to: "June 2026",
  location: "Navi Mumbai, IN",
  logo: "/logos/dypatil.jpg",
};

// The two the resume leads with, written up properly.
export const featured = [
  {
    name: "MC Render",
    tag: "3D rendering platform",
    blurb:
      "Pose any Minecraft skin, light the scene, export a thumbnail-ready PNG — all in the browser, with no Blender and nothing to install. A Three.js scene graph does the rendering, Next.js carries the app shell.",
    metrics: ["100K+ visitors", "50K+ renders", "30K monthly actives"],
    stack: ["Three.js", "Next.js", "Tailwind"],
    href: "https://mcrender.net",
    cover: "mcrender.jpg",
  },
  {
    name: "RemoteUpload",
    tag: "File sharing platform",
    blurb:
      "Move files between devices without logging into anything. Uploads land in S3; Redis maps a short code (and a QR) to the URL, so a phone can pull a file off a desktop in seconds.",
    metrics: ["+40% engagement"],
    stack: ["Next.js", "S3", "Redis", "shadcn/ui"],
    href: "https://remoteupload.vercel.app/",
    icon: "remoteupload.png",
  },
];

export const recognition = [
  {
    title: "PIWOT Imagine Hackathon",
    detail: "Finalist — top 2% of 15,000+ participants",
    year: "",
  },
  {
    title: "GDSC Hackaloud",
    detail: "6th place among 200+ teams",
    year: "",
  },
  {
    title: "Springer BIDA",
    detail: "Peer-reviewed paper accepted at the conference",
    year: "",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["C#", "Java", "Python", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    group: "Frameworks",
    items: [".NET", "React", "Next.js", "Node.js", "FastAPI", "Flask", "SvelteKit", "shadcn/ui"],
  },
  {
    group: "Tools",
    items: ["Git", "Docker", "WebSockets", "Figma", "GCP", "PostHog", "Vercel", "Netlify"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
];
