import { NavLink } from "react-router-dom";

const Navegacion = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            Navbar
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >Name
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/vite">
                            Vite
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/formulario">
                            Formulario
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    );
};

export default Navegacion;
