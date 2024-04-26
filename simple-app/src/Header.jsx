import { Link } from "react-router-dom"

const Header = () => {

    const seed = "vivien.lqy@outlook.fr"

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img
                            style={{ height: "60px", width: "60px" }}
                            src={"https://api.dicebear.com/8.x/fun-emoji/svg?seed=" + seed} alt="" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Accueil
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/recette">
                                    Recettes
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/paramettre">
                                    Parametre
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;