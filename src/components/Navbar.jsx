import { useState, useEffect } from "react"
import { FaSun, FaMoon } from "react-icons/fa"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"
    document.documentElement.setAttribute("data-theme", savedTheme)
    setTheme(savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/70 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-primary font-title text-xl">
          RenoX
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm text-text-muted">
            <NavItem href="#home" text="Home" />
            <NavItem href="#projects" text="Projects" />
            <NavItem href="#experience" text="Experience" />
            <NavItem href="#contact" text="Contact" />
          </ul>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl transition hover:scale-110"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-blue-500" />
            )}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="text-xl"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-blue-500" />
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="text-text text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>


      {open && (
        <div className="md:hidden bg-surface/95 backdrop-blur-md">
          <ul className="flex flex-col items-center gap-6 py-6 text-text">
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
