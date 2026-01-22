export const Footer = () => {
  const socials = [
    {
      name: "github",
      link: "https://github.com/tejasbhovad",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/tejas-bhovad/",
    },
    {
      name: "twitter",
      link: "https://twitter.com/tejas_bhovad",
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/@tejasbhovad",
    },
    {
      name: "email",
      link: "mailto:tejasbhovad@gmail.com",
    },
  ];
  return (
    <footer className="h-12 gap-1 sm:gap-2 w-full border-muted border-b-0 justify-center items-center flex">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.link}
          className="flex px-2 sm:px-4 items-center gap-2 text-sm sm:text-base text-primary/50 font-semibold hover:underline"
        >
          {social.name}
        </a>
      ))}
    </footer>
  );
};
