export default function NavBar() {
  const linkClass =
    "px-3 py-2 text-white font-bold uppercase text-sm no-underline";

  return (
    <nav className="sticky top-0 z-50 flex justify-end gap-6 px-8 py-4">
      <a href="/" className={linkClass}>
        Home
      </a>
      <a href="/mission" className={linkClass}>
        Mission
      </a>
      <a href="/board" className={linkClass}>
        Board
      </a>
      <a href="/events" className={linkClass}>
        Events
      </a>
      <a href="/resources" className={linkClass}>
        Resources
      </a>
      <a href="/donate" className={linkClass}>
        Donate
      </a>
    </nav>
  );
}
