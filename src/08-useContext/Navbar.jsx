import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            useContext
          </a>
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
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              {/* <NavLink to="/" className={props => {
                console.log(props);
                return 'nav-link';
              }}>
                Home
              </NavLink> */}
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
