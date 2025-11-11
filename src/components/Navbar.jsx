import { Github, Mail, MapPin } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#tools", label: "Tools" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-gray-900 text-lg">
          Abdulaziz — Developer
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="mailto:abdulaziz.dev@example.com" className="p-2 rounded-full hover:bg-gray-100 text-gray-700" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="https://github.com/abdulaziz-dev" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-100 text-gray-700" aria-label="GitHub">
            <Github size={18} />
          </a>
          <span className="hidden sm:flex items-center text-xs text-gray-500 gap-1">
            <MapPin size={14} /> Saudi Arabia
          </span>
        </div>
      </div>
    </header>
  );
}
