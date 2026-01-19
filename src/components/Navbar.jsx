import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/70 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        
        <div className="text-primary font-title text-xl">
          RenoX
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <NavItem href="#home" text="Home" />
          <NavItem href="#projects" text="Projects" />
          <NavItem href="#experience" text="Experience" />
          <NavItem href="#contact" text="Contact" />
        </ul>
      </nav>

      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <ul className="flex flex-col items-center gap-6 py-6 text-secondary">
            <NavItem href="#home" text="Home" onClick={() => setOpen(false)} />
            <NavItem href="#projects" text="Projects" onClick={() => setOpen(false)} />
            <NavItem href="#experience" text="Experience" onClick={() => setOpen(false)} />
            <NavItem href="#contact" text="Contact" onClick={() => setOpen(false)} />
          </ul>
        </div>
      )}
    </header>
  )
}

function NavItem({ href, text, onClick }) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="hover:text-primary transition text-lg md:text-sm"
      >
        {text}
      </a>
    </li>
  )
}
