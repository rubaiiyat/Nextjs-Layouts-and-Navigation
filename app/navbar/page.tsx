"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const activeClass = "text-accent font-bold";
  const normalClass = "";
  console.log(pathname);
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                className={pathname === "/" ? activeClass : normalClass}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={pathname === "/blogs" ? activeClass : normalClass}
                href="blogs/"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                className={pathname === "/about" ? activeClass : normalClass}
                href="about/"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                className={pathname === "/contact" ? activeClass : normalClass}
                href="contact/"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
