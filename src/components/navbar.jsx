import { Link } from "waku";

const Navbar = () => {
  return (
    <nav className="h-12 w-full border-muted border-2 border-b-0 flex justify-between">
      <Link
        to="/"
        className="flex w-fit  items-center px-4 font-semibold h-full hover:bg-muted"
      >
        tejas bhovad
      </Link>
      <div className="flex gap-2 px-2">
        <Link
          to="/"
          className="flex w-fit  items-center px-4 font-semibold  hover:underline  h-full  "
        >
          about
        </Link>
        <Link
          to="/projects"
          className="flex w-fit  items-center px-4 font-semibold  hover:underline  h-full  "
        >
          projects
        </Link>
        <Link
          to="/blog"
          className="flex w-fit  items-center px-4 font-semibold  hover:underline  h-full  "
        >
          writing
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
