import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Resources', to: '/resources' },
  { label: 'HMU', to: '/hmu' },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF7] border-b-4 border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="font-inter font-extrabold text-xl text-[#1A1A1A]"
        >
          Hud Haikal
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `font-inter font-bold transition-colors duration-200 ${
                    isActive
                      ? 'text-[#1A1A1A] border-b-2 border-[#FFD700]'
                      : 'text-[#1A1A1A] hover:text-[#FF3366]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 border-2 border-[#1A1A1A] bg-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{ minWidth: 44, minHeight: 44 }}
        >
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-[#FFFDF7] border-t-2 border-[#1A1A1A] px-4 pb-4 pt-2 space-y-2">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block font-inter font-bold text-lg px-3 py-2 border-2 border-[#1A1A1A] ${
                    isActive
                      ? 'bg-[#FFD700] text-[#1A1A1A]'
                      : 'bg-white text-[#1A1A1A] hover:bg-[#FFD700]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}