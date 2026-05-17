export function Footer() {
  return (
    <footer className="relative z-10 py-12 px-6 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-6 text-xs tracking-wide">
          <a
            href="https://www.linkedin.com/in/sofia-rey-san-esteban"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn: Sofía Rey San Esteban
          </a>
          <a
            href="https://github.com/dSofiaRey"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            github: @dSofiaRey
          </a>
        </div>
      </div>
    </footer>
  );
}
