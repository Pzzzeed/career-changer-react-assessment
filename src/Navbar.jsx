import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/owner"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <span className="fs-4">Pzeed 30</span>
          </a>

          <ul className="nav nav-pills gap-4">
            <li className="nav-item">
              <a
                href="/"
                className="btn btn-outline-primary"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/owner" className="btn btn-outline-primary">
                Owner
              </a>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
