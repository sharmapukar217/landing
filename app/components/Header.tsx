import { Logo } from "./Logo";
import { useState } from "react";
import { Link } from "@remix-run/react";
import { twMerge } from "tailwind-merge";

const navlinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  // { label: "Pricing", href: "#pricing" },
  { label: "Feedback", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact-us" },
];

export const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <header className="bg-dark-1/90 sticky top-0 z-[100] shadow-md backdrop-blur-sm">
      <div className="md:w-4/5 mx-auto flex flex-col md:flex-row md:items-center">
        <div className="px-4 py-4">
          <Logo href="/" className="text-4xl" />
        </div>
        <nav
          className={twMerge(
            "flex-col md:flex-row md:ml-auto border-b md:border-0 border-gray-foreground px-4 pb-2 md:py-4 md:flex",
            [opened ? "flex" : "hidden"]
          )}>
          {navlinks.map((navlink) => (
            <Link
              to={navlink.href}
              key={navlink.href}
              className="hover:bg-dark-2/80 rounded-md px-3 py-1.5 text-sm font-semibold text-gray-foreground"
              aria-label={navlink.label}>
              <span>{navlink.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
