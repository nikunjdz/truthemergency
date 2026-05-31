const navItems = [
  { label: "HOME", href: "#top" },
  { label: "COUP NEWS", href: "#coup-news" },
  { label: "RESOURCES", href: "#resources" },
  { label: "VIDEO INSPIRATIONS", href: "#videos" },
  { label: "CORPORATISM WIRE", href: "#corporatism" },
  { label: "PLOT TO SEIZE THE WHITE HOUSE", href: "#plot" },
  { label: "LINKS", href: "#links" },
];

const NavBar = () => {
  return (
    <nav className="w-full bg-[hsl(var(--nav-bg))] border-y border-border">
      <ul className="flex flex-wrap justify-center gap-0">
        {navItems.map((item, i) => (
          <li key={i}>
            <a
              href={item.href}
              className="block px-4 py-2 text-base font-semibold text-[hsl(var(--nav-text))] hover:bg-[hsl(var(--nav-hover))] hover:text-primary-foreground transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
