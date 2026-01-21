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
  ];
  return (
    <footer className="h-12 gap-2 w-full border-muted  border-b-0   justify-center items-center flex">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.link}
          className="flex items-center gap-2 text-primary/50 hover:text-primary"
        >
          {social.name}
        </a>
      ))}
    </footer>
  );
};
