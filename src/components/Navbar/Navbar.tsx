import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar border-primary">
      <a className="navbar__link navbar__link--active" href="">
        Inicio
      </a>
      <a className="navbar__link" href="">
        Tienda
      </a>
      <a className="navbar__link" href="">
        Blog
      </a>
      <a className="navbar__link" href="">
        Nosotros
      </a>
      <a className="navbar__link" href="">
        Contacto
      </a>
    </nav>
  );
};
