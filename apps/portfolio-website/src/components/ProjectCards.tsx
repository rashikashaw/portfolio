import { Tags } from "./Tags";
import { SiGithub } from 'react-icons/si';
type ProjectcardType = {
  image: string;
  headline: string;
  summary: string;
  tags: string[];
  width: string,
  link: string,
  githubLink: string;
}

export const ProjectCard = (props: ProjectcardType) => {
  const { image, headline, summary, tags, width, link, githubLink } = props;
  return (
    // card
    <div className={`flex flex-col rounded-2xl justify-between items-between bg-gradient-to-r from-cyan-700 to-blue-900 shadow-lg shadow-blue-500/50 ${width} p-2 cursor-pointer`}>
      {/* image */}
      <div className="p-2 w-full">
        <img src={image} alt="" className="rounded-lg"/>
      </div>
      {/* text section */}
      <div className="flex flex-col">
        {/* headline */}
        <div className="text-2xl text-white font-bold items-start p-3">
          <h2>{headline}</h2>
        </div>
        {/* summary */}
        <div className="text-lg text-zinc-300 items-start p-3">
          <p>
            {summary}
          </p>
        </div>
        {/* tech stack used  */}
        <div className="grid gap-2 grid-cols-3 p-3 my-4">
          {tags.map((tag:string, i) => (
            <a className="text-white" key={i}>{tag}
            </a>
          ))}
        </div>
      </div>
      {/* button */}
      <div  className="flex w-full items-center my-4 px-6 justify-between">
        <a href={link} target="_blank" className="px-4 p-2 justify-center text-white  items-center rounded-2xl border-white baseline cursor-pointer border-2">
          view
        </a>
        <a href={githubLink} target="_blank" >
          <SiGithub size={25} color='white' />
        </a>
      </div>
    </div>
  );
};
