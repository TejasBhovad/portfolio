import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-12 bg-foreground flex items-center justify-center">
      <p className="text-baseColor font-medium">
        Made with ❤️ on{" "}
        <Link
          href="https://github.com/TejasBhovad/portfolio"
          className="hover:underline transition-all"
        >
          GitHub
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
