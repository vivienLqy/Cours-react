import { useState, useEffect, useRef } from "react";
import { Navigate, Link } from "react-router-dom";

const Register = ({ link, msg }) => {

    const userRegex = /^[a-zA-Z][a-zA-Z0-9-]{3,23}$/;
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@&#$%]).{8,23}$/;
    const emailRegex = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10,14}$/;

    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [tel, setTel] = useState('');
    const [validTel, setValidTel] = useState(false);
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [confirmPassword, setComfirmPassword] = useState('')
    const [validConfirmPassword, setValidComfirmPassword] = useState(false)

    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const telRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    useEffect(() => {
        const result = userRegex.test(username)
        setValidUsername(userRegex.test(username))
    }, [username]);

    useEffect(() => {
        const result = emailRegex.test(email)
        setValidEmail(emailRegex.test(email))
    }, [email]);

    useEffect(() => {
        const result = passwordRegex.test(password)
        setValidPassword(passwordRegex.test(password))
    }, [password]);

    useEffect(() => {
        const result = PhoneNumberRegex.test(tel)
        setValidTel(PhoneNumberRegex.test(tel))
    }, [tel]);

    useEffect(() => {
        const result = passwordRegex.test(confirmPassword)
        setValidComfirmPassword(passwordRegex.test(confirmPassword))
    }, [confirmPassword]);


    const [user, setUser] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <div className="card">
            {user && <Navigate to="account" replace={true} />}
            <div className="card-body">
                <h1 className="
                                card-title">Inscription</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        id="username"
                        className={`form-control ${username.length < 1 ? 'form-control' : validUsername ? 'is-valid' : 'is-invalid'}`}
                        ref={usernameRef}
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        type="text"
                        name="username"
                    />
                    <input
                        id="email"
                        className={`form-control ${email.length < 1 ? 'form-control' : validEmail ? 'is-valid' : 'is-invalid'}`}
                        ref={emailRef}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                        name="email"
                    />
                    <input
                        id="phone"
                        className={`form-control ${tel.length < 1 ? 'form-control' : validTel ? 'is-valid' : 'is-invalid'}`}
                        ref={telRef}
                        value={tel}
                        onChange={(event) => setTel(event.target.value)}
                        type="tel"
                        name="phone"
                    />
                    <input
                        id="password"
                        className={`form-control ${password.length < 1 ? 'form-control' : validPassword ? 'is-valid' : 'is-invalid'}`}
                        ref={passwordRef}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        name="password"
                    />
                    <input
                        id="confirmPassword"
                        className={`form-control ${confirmPassword < 1 ? 'form-control' : validConfirmPassword ? 'is-valid' : 'is-invalid'} `}
                        ref={passwordConfirmRef}
                        value={confirmPassword}
                        onChange={(event) => setComfirmPassword(event.target.value)}
                        type="password"
                        name="confirmPassword"
                    />
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