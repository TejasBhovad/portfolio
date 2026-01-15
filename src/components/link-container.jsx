const LinkContainer = ({ logo, label, link }) => {
  return (
    <a
      className="mx-0 w-auto flex gap-1 hover:bg-muted/80 backdrop-blur-lg cursor-pointer px-2 rounded py-0.5 justify-center items-center"
      href={link}
      target="_blank"
    >
      <div className="w-4 h-4 bg-primary  overflow-hidden rounded-[3px]  ">
        <img src={logo} alt={label} className="w-full h-full" />
      </div>
      {label}
    </a>
  );
};

export default LinkContainer;
