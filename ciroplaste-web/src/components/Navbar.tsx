import './Navbar.css'
import ThemeToggleBtn from './ThemeToggleBtn'

function Navbar() {
  return (
    <nav>
        <a href="/" className="brand text-primary">Ciroplaste</a>
        <ThemeToggleBtn />
    </nav>
  )
}

export default Navbar
