const socialLinks = [
  {
    href: "jerinislam05@gmail.com",
    icon: "/socialLinks/email.ico",
    alt: "Email",
  },
  {
    href: "https://github.com/Jerinislam05",
    icon: "/socialLinks/github.ico",
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/jerin-islam-london",
    icon: "/socialLinks/linkedin.ico",
    alt: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/jerin340",
    icon: "/socialLinks/instagram.ico",
    alt: "Instagram",
  },
  {
    href: "https://www.youtube.com/@jerinsjourney2282",
    icon: "/socialLinks/youtube.ico",
    alt: "YouTube",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch]">
            Contact me for collaboration
          </h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]">
            Reach out today to discuss your project needs and start
            collaborating on something amazing!
          </p>

          <div className="flex items-center gap-2 mt-auto">
            {socialLinks.map(({ href, icon }, key) => (
              <a
                key={key}
                href={href}
                target=" blank"
                className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80"
              >
                <img src={icon} alt="" />
              </a>
            ))}
          </div>
        </div>

        <form
          action="https://getform.io/f/blllwmnb"
          method="POST"
          className=" xl:pl-10 2xl:pl-20"
        >
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label">
                Name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="Jerin Islam"
                className="text-field"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="label">
                Email
              </label>

              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="jerinislam05@gmail.com"
                className="text-field"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="Message" className="label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Hi!"
              required
              className="text-field resize-y min-h-32 max-h-80"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary [&]:max-w-full w-full justify-center"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
