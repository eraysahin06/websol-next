"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-600 px-6 py-4 text-white">
      <div className="container mx-auto flex items-center justify-between max-w-[720px]">
        <div className="flex-grow-0">
          <Link href="/">
              <Image src="/assets/websol.png" alt="WebSol Logo" width={120} height={60} />
          </Link>
        </div>
        <div className="hidden md:flex justify-center flex-grow gap-6">
          <Link className="hover:text-light-blue" href="/">
            Home
          </Link>
          <Link className="hover:text-light-blue" href="/about">
            About
          </Link>
          <Link className="hover:text-light-blue" href="/services">
            Services & pricing
          </Link>
          <Link className="hover:text-light-blue" href="/work">
            Our work
          </Link>
          <Link className="hover:text-light-blue" href="/contact">
            Contact
          </Link>
        </div>
        <div className="hidden md:flex flex-grow-0 justify-end">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-light-blue">
            <AiFillLinkedin size={24} />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-900 bg-opacity-80 flex flex-col items-center py-4 md:hidden">
          <Link className="py-2 hover:text-light-blue" href="/">
            Home
          </Link>
          <Link className="py-2 hover:text-light-blue" href="/about">
            About
          </Link>
          <Link className="py-2 hover:text-light-blue" href="/services">
            Services & pricing
          </Link>
          <Link className="py-2 hover:text-light-blue" href="/work">
            Our work
          </Link>
          <Link className="py-2 hover:text-light-blue" href="/contact">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
