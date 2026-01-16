export default function Footer() {
  return (
    <footer className="w-full bg-[var(--usacs-red-light)] py-6 mt-20">
      <div className="flex justify-center gap-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/Facebook.png" alt="Facebook" className="h-6 w-6" />
        </a>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/Twitter.png" alt="Twitter" className="h-6 w-6" />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/Instagram.png" alt="Instagram" className="h-6 w-6" />
        </a>

        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/Github.png" alt="GitHub" className="h-6 w-6" />
        </a>

        <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/MediumBlog.png" alt="Medium" className="h-6 w-6" />
        </a>

        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/Discord.png" alt="Discord" className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
}
