"use client";

// ===== IMPORTS =====
import { useEffect, useState } from "react";

// ===== NAVBAR COMPONENT =====
export default function NavBar() {
  const [open, setOpen] = useState(false); // mobile menu state

  // Navigation links
  const links = [
    { href: "/", label: "Home" },
    { href: "/mission", label: "Mission" },
    { href: "/board", label: "Board" },
    { href: "/events", label: "Events" },
    { href: "/resources", label: "Resources" },
    { href: "/donate", label: "Donate" },
  ];

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 bg-[var(--usacs-red-dark)] shadow-sm"
      /* sticks to top + high z-index to stay above content */
    >
      <div
        className="w-full px-6 sm:px-10 h-14 flex items-center justify-between"
        /* horizontal layout with spacing + vertically centered items */
      >
        {/* LOGO */}
        <a href="/" className="text-white font-extrabold tracking-wide">
          USACS
        </a>

        {/* DESKTOP NAV */}
        <div
          className="hidden md:flex items-center gap-6"
          /* hidden on mobile → flex row on md+ screens */
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-white font-bold text-sm no-underline"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded text-white"
          /* only visible on mobile + centers icon inside button */
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              // X icon (close)
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              // Hamburger icon (menu)
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div
          className="md:hidden border-t border-white/10"
          /* only visible on mobile + subtle top divider */
        >
          <div
            className="px-4 py-3 flex flex-col"
            /* stacked vertical links */
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-3 text-white font-bold text-sm no-underline"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
