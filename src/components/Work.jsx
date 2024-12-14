import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/64451d101834103.5f287cfc0d193.png",
    title: "Food Sharing Platform",
    tags: [""],
    projectLink: "https://food-connect-platform.web.app",
  },
  {
    imgSrc: "https://colorlib.com/wp/wp-content/uploads/sites/2/12_hobby-arts-crafts-handmade-WordPress-themes.jpg",
    title: "Art & Craft Store",
    tags: [""],
    projectLink: "https://art-craft-shop.web.app",
  },
  {
    imgSrc: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/617fffce6baa20e7a241f607_N60Hn6mzUqGNt7yWqozQp857vuK2FJSYMJDLAipDG3uLxyarm6CDrRwleodjCr7ZJrkIhtnd8Sr5fomC3T8XluZyR5-74NeV--LxM7BqJCjyGCkvUQSYOpSjZ2PjF-7iIUT-cmYf.jpeg",
    title: "Real Estate Business Services",
    tags: [""],
    projectLink: "https://real-estate-residential-7af62.web.app",
  },
  {
    imgSrc: "https://themefisher.com/blog/charitify.webp",
    title: "Donation Campaign",
    tags: [""],
    projectLink: "https://spiffy-belekoy-227ba3.netlify.app",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill, minmax(280px, 1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
