import { Metadata } from "next";

interface Project {
  name: string;
  description: string;
  url: string;
}

const ProjectsPage = () => {
  const projects: Project[] = [
    {
      name: "lukebaylissdotcom (This Site)",
      description:
        "This is the codebase for my personal website. A Next.js app using the App Router, Tailwind CSS, MDX, and some custom scripts for processing content.",
      url: "https://github.com/lpbayliss/lukebaylissdotcom",
    },
    {
      name: "Footy Tipping App",
      description:
        "A friends footy tipping (AFL) app originally built with Angular 2+. I have since converted it to react and upgraded the stack multiple times to keep it modern.",
      url: "https://github.com/lmuhar/footy-tipping-react",
    },
    {
      name: "Event Sourcing and CQRS Experiment",
      description:
        "A simple experiment in setting up an event sourcing and CQRS architecture using Node.js. It's mostly just a reference for ES, CQRS, Clean Architecture, and DDD patterns.",
      url: "https://github.com/lpbayliss/es-cqrs-experiment",
    },
    {
      name: "App Starter Template",
      description:
        "A fully featured application starter for React and Next.js. This is my usual starting point for new projects.",
      url: "https://github.com/lpbayliss/starter",
    },
    {
      name: "React Embedded Experiment",
      description:
        "A small experiment showcasing how React could be used to create embeddable micro-apps.",
      url: "https://github.com/lpbayliss/embed-experiment",
    },
    {
      name: "Wundrum",
      description:
        "A daily puzzle app intended to be similar to The New York Times' games.",
      url: "https://github.com/lpbayliss/wundrum",
    },
    {
      name: "Retrobox",
      description:
        "An async retrospective tool to help remote teams collect retro items in a suggestion box like fashion.",
      url: "https://github.com/lpbayliss/retrobox",
    },
  ];

  return (
    <div>
      <h2 className="pb-1 text-2xl font-bold">Projects</h2>
      <div className="-mx-4 flex flex-col items-start gap-2">
        {projects.map((p) => (
          <a
            href={p.url}
            className="flex w-full flex-col gap-1 rounded-md p-4 transition-all hover:bg-purple-900"
            key={p.name}
            target="_blank"
          >
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-sm opacity-70">{p.url}</p>
            <p className="text-md opacity-70">{p.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export const generateMetadata = (): Metadata => {
  return {
    title: "Projects",
    description: "My Github Projects",
    alternates: {
      canonical: `https://lukebayliss.com/projects`,
    },
  };
};

export default ProjectsPage;
