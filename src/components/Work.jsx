import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "",
    title: "",
    tags: [""],
    projectLink: "",
  },
  {
    imgSrc: "",
    title: "",
    tags: [""],
    projectLink: "",
  },
  {
    imgSrc: "",
    title: "",
    tags: [""],
    projectLink: "",
  },
  {
    imgSrc: "",
    title: "",
    tags: [""],
    projectLink: "",
  },
  {
    imgSrc: "",
    title: "",
    tags: [""],
    projectLink: "",
  },
  {
    imgSrc: "",
    title: "",
    tags: [""],
    projectLink: "",
  },
];

const Work = () => {
  return (
    <section 
    id="work"
    className="section"
    >
        <div className="container">
            <h2 className="headline-2 mb-8">
                My portfolio highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill, minmax(280px, 1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                    />
                ))}
            </div>
        </div>
    </section>
  )
};

export default Work;
