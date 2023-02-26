import { Tags } from "./Tags";

type ProjectcardType = {
  image: string;
  headline: string;
  summary: string;
  tags: string[];
  width: string,
  link: string,
}

export const ProjectCard = (props: ProjectcardType) => {
  const { image, headline, summary, tags, width, link } = props;
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
        <div className="text-2xl font-bold items-start px-3">
          <h2>{headline}</h2>
        </div>
        {/* summary */}
        <div className="text-lg text-white items-start px-3">
          <p>
            {summary}
          </p>
        </div>
        {/* tech stack used  */}
        <div className="grid gap-2 grid-cols-3 px-3 my-4">
          {tags.map((tag:string, i) => (
            <a className="" key={i}>{tag}
            </a>
          ))}
        </div>
      </div>
      {/* button */}
      <div  className="w-full my-4 px-6">
        <a href={link} target="_blank" className="px-4 p-2 justify-center items-center rounded-2xl border-white baseline cursor-pointer border-2">
          view
        </a>
      </div>
    </div>
  );
};
