import logo from "../../assets/Logo.png";

export default function Header() {
  return (
    <header>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img
              className="img-fluid logo"
              src={logo}
              alt="logo trouve ton artisan région Auvergne Rhone-Alpes"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
