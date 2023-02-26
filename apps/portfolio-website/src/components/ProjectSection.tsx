import { ProjectCard } from './ProjectCards';

const projects = [
  {
    headline: "Evo-Gym",
    image: "/evoGym.png",
    summary: 'A simple fitness center static website deployed using Vercel.',
    tags: ['react', 'typescript', 'tailwind CSS', 'node', 'figma'],
    link: 'https://evo-gym.vercel.app/',
  },
  {
    headline: "Apple Redesign",
    image: "/apple-redesign.png",
    summary: 'An apple store website redesigned and deployed using Vercel.',
    tags: ['next,js', 'typescript', 'tailwind CSS', 'node', 'figma', 'headless CMS', 'redux', 'stripe'],
    link: 'https://portfolio-apple-redesign.vercel.app/',
  },
  {
    headline: "Component Storybook",
    image: "/storybook.png",
    summary: 'Storybook for shared components, hooks, design system and helper utilites. Hosted using Vercel',
    tags: ['react', 'typescript', 'node'],
    link: 'https://portfolio-component-stories.vercel.app',
  },
]

export const ProjectSection = () => {
  return (
    <section className="relative flex flex-col items-center min-h-full">
      <h2 className="max-w-md text-4xl font-bold text-center lg:text-left">Projects</h2>
      <div className="grid gap-x-8 ml-6 gap-y-8 sm:grid-cols-1  mt-28 mb-32 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard 
            key={i}
            image={project.image} 
            headline={project.headline}
            summary={project.summary}
            tags={project.tags}
            link={project.link}
            width={'w-96'}
          />
        ))}
      </div>
    </section>
  );
};
