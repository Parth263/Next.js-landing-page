"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "./ui/Button";

const NavItem: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <Link href={href}>
    <div className="text-slate-800 text-base font-medium hover:text-teal-700 transition-colors relative group">
      {children}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-teal-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </div>
  </Link>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = ["Home", "Features", "Testimonials", "Pricing", "FAQ"];

  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center">
          <Image src="/logo2.svg" alt="logo" width={120} height={120} priority />
        </div>

        <div className="hidden md:flex gap-8 items-center justify-center">
          {menuItems.map((item) => (
            <NavItem key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </NavItem>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <Button
            text="Log In"
            variant="secondary"
            size="medium"
            className="mb-2"
          />
          <Button text="Get it for Free" variant="primary" size="medium" />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-800 hover:text-teal-700 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 z-50">
          <div className="flex flex-col gap-4 items-center">
            {menuItems.map((item) => (
              <NavItem key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </NavItem>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-4 items-center">
            <Button text="Log In" variant="secondary" size="small" />
            <Button text="Get it Free" variant="primary" size="medium" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
