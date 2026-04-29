import { useState } from "react";
import { cn } from "../lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";
import TrackedLink from "./TrackedLinkComponent";
import { useTheme } from "../ThemeContext";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#featured_projects" },
  { name: "Samples", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Theme", href: "" },
];

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className="fixed w-full z-40 h-16 border-b"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="container flex items-center justify-between h-full">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-1 font-medium text-lg select-none">
          <span style={{ color: "var(--foreground)" }}>AB</span>
          <span style={{ color: "var(--android-green)" }}>.</span>
          <span
            className="font-mono text-xs ml-1 hidden sm:inline"
            style={{ color: "var(--foreground-muted)" }}
          >
            Android Dev
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, key) => {
            if (item.name === "Theme") {
              return (
                <button
                  key={key}
                  onClick={toggleTheme}
                  className="p-2 rounded-lg transition-colors duration-200"
                  style={{ color: "var(--foreground-muted)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--surface-elevated)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--foreground)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--foreground-muted)";
                  }}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </button>
              );
            }
            return (
              <TrackedLink
                key={key}
                to={item.href}
                eventName="nav_section_desktop"
                eventParams={{ link: `${item.name}_clicked` }}
                className={cn(
                  "relative text-sm py-1 transition-colors duration-200",
                  "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2",
                  "after:h-0.5 after:w-0 after:rounded-full",
                  "after:transition-all after:duration-300 after:ease-out",
                  "hover:after:w-full"
                )}
                style={{ color: "var(--foreground-muted)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground-muted)";
                }}
              >
                <style>{`
                  .nav-link-underline::after { background-color: var(--android-green); }
                `}</style>
                <span className="nav-link-underline">{item.name}</span>
              </TrackedLink>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="md:hidden p-2 z-50 transition-colors duration-200"
          style={{ color: "var(--foreground)" }}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu — slide down */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b",
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
        style={{
          backgroundColor: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        <div className="container flex flex-col py-2">
          {navItems.map((item, key) => {
            if (item.name === "Theme") {
              return (
                <button
                  key={key}
                  onClick={toggleTheme}
                  className="flex items-center gap-3 py-4 border-b text-sm transition-colors duration-150"
                  style={{ borderColor: "var(--border)", color: "var(--foreground-muted)" }}
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  {theme === "dark" ? "Light mode" : "Dark mode"}
                </button>
              );
            }
            return (
              <TrackedLink
                key={key}
                to={item.href}
                className="py-4 border-b text-sm text-left transition-colors duration-150"
                style={{ borderColor: "var(--border)", color: "var(--foreground-muted)" }}
                onClick={() => setIsMenuOpen(false)}
                eventName="nav_section_mobile"
                eventParams={{ link: `${item.name}_clicked` }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--android-green)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground-muted)";
                }}
              >
                {item.name}
              </TrackedLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
