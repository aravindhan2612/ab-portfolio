import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";
import TrackedLink from "./TrackedLinkComponent";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Theme", href: "" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme == "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> A</span>B
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => {
            if (item.name === "Theme") {
              return (
                <button
                  key={key}
                  onClick={toggleTheme}
                  className={cn("rounded-full transition-colors duration-300")}
                >
                  {isDarkMode ? (
                    <Sun className="h-6 w-6 text-yellow-300" />
                  ) : (
                    <Moon className="h-6 w-6 text-blue-900" />
                  )}
                </button>
              );
            } else {
              return (
                <TrackedLink
                  key={key}
                  to={item.href}
                  eventName="nav_section_desktop"
                  eventParams={{ link: `${item.name}_clicked` }}
                  className="text-foreground/80 hover:text-primary hover:text-glow transition-colors duration-300"
                >
                  {item.name}
                </TrackedLink>
              );
            }
          })}
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => {
              if (item.name === "Theme") {
                return (
                  <button
                    key={key}
                    onClick={toggleTheme}
                    className={cn(
                      "flex rounded-full transition-colors duration-300 justify-center"
                    )}
                  >
                    {isDarkMode ? (
                      <Sun className="h-6 w-6 text-yellow-300" />
                    ) : (
                      <Moon className="h-6 w-6 text-blue-900" />
                    )}
                  </button>
                );
              } else {
                return (
                  <TrackedLink
                    key={key}
                    to={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                    eventName="nav_section_mobile"
                    eventParams={{ link: `${item.name}_clicked` }}
                  >
                    {item.name}
                  </TrackedLink>
                );
              }
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
