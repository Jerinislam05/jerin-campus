const AboutItems = [
  {
    label: "Projects done",
    number: 10,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Jerin Islam, a passionate Full-stack Developer
            with a keen eye for design and detail. I&apos;m always eager to
            learn and explore the latest trends in web development.
            <br />
            <br />
            When I&apos;m not coding, you&apos;ll find me exploring creative
            ideas, learning new technologies, or collaborating on exciting
            projects. Let&apos;s build something amazing together!
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {AboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="/logo4.ico"
              alt="logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
