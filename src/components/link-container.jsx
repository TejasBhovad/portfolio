import { Link } from "waku";

const LinkContainer = ({ logo, label, link }) => {
  const isInternal = link?.startsWith("/");

  const content = (
    <>
      <div className="w-4 h-4 bg-primary overflow-hidden rounded-[3px]">
        <img src={logo} alt={label} className="w-full h-full" />
      </div>
      {label}
    </>
  );

  const className =
    "mx-0 w-auto flex gap-1 hover:bg-muted/80 backdrop-blur-lg px-2 rounded py-0.5 justify-center items-center";

  if (isInternal) {
    return (
      <Link to={link} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a
      className={className}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
};

export default LinkContainer;
