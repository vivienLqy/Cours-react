import { useState } from "react";
import { Navigate, Link } from "react-router-dom";

const Register = ({ link, msg }) => {

    const [user, setUser] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <div className="card">
            {user && <Navigate to="account" replace={true} />}
            <div className="card-body">
                <h1 className="card-title">Inscription</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" />
                    <input type="email" name="email" />
                    <input type="tel" name="phone" />
                    <input type="password" name="password" />
                    <input type="password" name="confirmPassword" />
                    <div className="d-flex justify-content-between">
                        <div className="my-4 form-text text-primary">
                            <Link className="text-decoration-none" to={link}>{msg}</Link >
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-primary btn-lg mt-2">Valider</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;