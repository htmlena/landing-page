import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-white text-sm md:text-base">
      <ul className="flex flex-row gap-x-4">
        <li className="uppercase">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="uppercase">
          <Link href="/about">
            <a>About Me</a>
          </Link>
        </li>
        <li className="uppercase">
          <Link href="/work">
            <a>My work</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
