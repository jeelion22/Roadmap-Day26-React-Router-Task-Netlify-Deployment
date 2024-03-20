import { Link } from "react-router-dom";

// create navigationbar component
// make sure return a navbar

function Navbar() {
  return (
    <nav className="navbar  navbar-expand-lg bg-body-tertiary  sticky-top  mb-3 bg-primary" >
      <div className="container-fluid">
        <Link to={"/"} class="navbar-brand">
          <img
            src="https://www.guvi.in/web-build/images/guvi-logo.e8ad68fbd8dc0a5fc2f7c4ffd580c54d.png"
            alt="GUVI : Learn to code in your native language"
            width="95px"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">

          <Link to={"/"} className="nav-link active" >
              HOME
            </Link>
            <Link to={"/all"} className="nav-link" >
              ALL
            </Link>

            <Link to={"/fullstack"} className="nav-link">
              FULLSTACK DEVELOPMENT
            </Link>
            <Link to={"/datascience"} className="nav-link" href="#">
              DATASCIENCE
            </Link>
            <Link to={"/cybersecurity"} className="nav-link" href="#">
              CYBER SECURITY
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
