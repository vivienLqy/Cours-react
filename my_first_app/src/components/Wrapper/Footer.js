import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (

        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-body-secondary">&copy; 2024 Company, Inc</p>

            <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
            </Link>

            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><Link className="nav-link px-2 text-body-secondary" to={"/"}><FontAwesomeIcon icon={faHome} /></Link></li>
                <li className="nav-item"><Link className="nav-link px-2 text-body-secondary" to={"/contact"}>Contact</Link></li>

            </ul>
        </footer>
    );
};

export default Footer;
