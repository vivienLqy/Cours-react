import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = ({ link, msg }) => {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9-]{3,23}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@&#$%]).{8,23}$/;
    const emailRegex = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneNumberRegex = /^\+(?:\d{1,3})?\d{10,14}$/;

    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [tel, setTel] = useState('');
    const [validTel, setValidTel] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [validConfirmPassword, setValidConfirmPassword] = useState(false);
    const [ConfirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const telRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    useEffect(() => {
        setValidUsername(usernameRegex.test(username));
    }, [username]);

    useEffect(() => {
        setValidEmail(emailRegex.test(email));
    }, [email]);

    useEffect(() => {
        setValidPassword(passwordRegex.test(password));
    }, [password]);

    useEffect(() => {
        setValidTel(phoneNumberRegex.test(tel));
    }, [tel]);

    useEffect(() => {
        setValidConfirmPassword(password === confirmPassword); // Check if passwords match
    }, [confirmPassword, password]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">Inscription</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        id="username"
                        className={`form-control ${username.length < 1 ? 'form-control' : validUsername ? 'is-valid' : 'is-invalid'}`}
                        ref={usernameRef}
                        value={username}
                        autoComplete="off"
                        onChange={(event) => setUsername(event.target.value)}
                        type="text"
                        name="username"
                        onFocus={() => setUsernameFocus(true)}
                        onBlur={() => setUsernameFocus(false)}
                    />
                    <div id="usernote" className={usernameFocus && !validUsername ? 'alert alert-warning' : 'offscreen d-none'}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        &nbsp;Doit contenir au moins 4 caractères.<br />
                    </div>
                    <input
                        id="email"
                        className={`form-control ${email.length < 1 ? 'form-control' : validEmail ? 'is-valid' : 'is-invalid'}`}
                        ref={emailRef}
                        autoComplete="off"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                        name="email"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />
                    <div id="emailnote" className={emailFocus && !validEmail ? 'alert alert-warning' : 'offscreen d-none'}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        &nbsp;Doit contenir un email valide.<br />
                    </div>
                    <input
                        id="phone"
                        className={`form-control ${tel.length < 1 ? 'form-control' : validTel ? 'is-valid' : 'is-invalid'}`}
                        ref={telRef}
                        value={tel}
                        autoComplete="off"
                        onChange={(event) => {
                            const newValue = event.target.value.replace(/^0/, '+33');
                            setTel(newValue);
                        }}
                        type="tel"
                        name="phone"
                    />
                    <input
                        id="password"
                        className={`form-control ${password.length < 1 ? 'form-control' : validPassword ? 'is-valid' : 'is-invalid'}`}
                        ref={passwordRef}
                        value={password}
                        autoComplete="off"
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        name="password"
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                    />
                    <div id="pwdnote" className={passwordFocus && !validPassword ? 'alert alert-warning' : 'offscreen d-none'}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        &nbsp;Doit contenir au moins 8 caractères.<br />
                        Doit comporter au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.
                    </div>
                    <input
                        id="confirmPassword"
                        className={`form-control ${confirmPassword.length < 1 ? 'form-control' : validConfirmPassword ? 'is-valid' : 'is-invalid'}`}
                        ref={confirmPasswordRef}
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
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
            </div >
        </div >
    );
};

export default Register;
