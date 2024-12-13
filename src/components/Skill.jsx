// Components
import SkillCard from "./SkillCard";

const skillItems = [
  {
    imgSrc: "/skills/javascript.svg",
    label: "JavaScript",
    desc: "Programming Language",
  },
  {
    imgSrc: "/skills/react.svg",
    label: "React",
    desc: "Front-end JavaScript Library",
  },
  {
    imgSrc: "/skills/typescript.svg",
    label: "TypeScript",
    desc: "Programming Language",
  },
  {
    imgSrc: "/skills/firebase.svg",
    label: "Firebase",
    desc: "Backend Cloud",
  },
  {
    imgSrc: "/skills/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/skills/github.svg",
    label: "GitHub",
    desc: "Developer Platform",
  },
  {
    imgSrc: "/skills/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/skills/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/skills/tailwindcss.svg",
    label: "TailWindCSS",
    desc: "CSS Framework",
  },
  {
    imgSrc: "/skills/vercel.svg",
    label: "Vercel",
    desc: "Deploy Tool",
  },
  {
    imgSrc: "/skills/html.svg",
    label: "HTML",
    desc: "Hypertext Markup Language",
  },
  {
    imgSrc: "/skills/css.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/skills/figma.svg",
    label: "Figma",
    desc: "Design Tool",
  },
  {
    imgSrc: "/skills/wordpress.svg",
    label: "Wordpress",
    desc: "CMS",
  },
];

const Skill = () => {
  return (
    <section id="skill" className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItems.map(({ imgSrc, label, desc }, key) => (
            <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
