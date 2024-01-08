import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="max-container  flex py-5 justify-between items-center">
      <h1 className="text-4xl font-bold">MyArticle</h1>
      <nav className="flex gap-4">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/about">
          About
        </Link>
        <Link className="hover:underline" href="/articles">
          Articles
        </Link>
        <Link className="hover:underline" href="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
