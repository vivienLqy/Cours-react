import { useState, useEffect, useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

const UserRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@&#$%]).{8,23}$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10,14}$/;

const Register = ({ link, msg }) => {
    const { user, setUser } = useContext(UserContext);
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const [userName, setUserName] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [phone, setPhone] = useState('');
    const [validPhone, setValidPhone] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [validConfirmPassword, setValidConfirmPassword] = useState(false);
    const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

    const userNameRef = useRef(null);

    useEffect(() => {
        userNameRef.current.focus();
    }, []);

    useEffect(() => {
        setValidName(UserRegex.test(userName));
    }, [userName]);

    useEffect(() => {
        setValidEmail(EmailRegex.test(email));
    }, [email]);

    useEffect(() => {
        setValidPhone(PhoneNumberRegex.test(phone));
    }, [phone]);

    useEffect(() => {
        setValidPassword(PasswordRegex.test(password));
    }, [password]);

    useEffect(() => {
        setValidConfirmPassword(password === confirmPassword);
    }, [password, confirmPassword]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validName && validEmail && validPhone && validPassword && validConfirmPassword;
        if (isValid) {
            setSuccess(true);
            setUser({ name: userName, email: email, phone: phone });
        } else {
            setSuccess(false);
            setErrorMsg('Les informations saisies ne sont pas valides.');
        }
    };

    return (
        <div className="card">
            {user && <Navigate to="/profil" replace />}
            <div className="card-body">
                <h1 className="card-title">Inscription</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating">
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            autoComplete="off"
                            placeholder="user123"
                            required
                            className={`form-control ${!userName ? '' : validName ? 'is-valid' : 'is-invalid'}`}
                            ref={userNameRef}
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <label htmlFor="userName" className="form-label d-flex">Nom d'utilisateur :</label>
                    </div>
                    <div id="uidnote" className={userFocus && !validName ? 'instructions mt-2 alert alert-warning' : 'offscreen d-none'} role="alert">
                        <FontAwesomeIcon icon={faInfoCircle} />&nbsp;Entre 4 et 24 caractères.<br />
                        Doit commencer par une lettre.<br />
                        Doit comporter au moins une lettre et aucun caractère spécial.
                    </div>
                    <div className="form-floating mt-2">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="off"
                            placeholder="example@mail.com"
                            required
                            className={`form-control ${!email ? '' : validEmail ? 'is-valid' : 'is-invalid'}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <label htmlFor="email" className="form-label d-flex">Adresse mail :</label>
                    </div>
                    <div id="emailnote" className={emailFocus && !validEmail ? 'instructions mt-2 alert alert-warning' : 'offscreen d-none'} role="alert">
                        <FontAwesomeIcon icon={faInfoCircle} />&nbsp;L'adresse mail doit avoir le bon format.
                    </div>
                    <div className="form-floating mt-2">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            autoComplete="off"
                            placeholder="+33607080901"
                            required
                            className={`form-control ${!phone ? '' : validPhone ? 'is-valid' : 'is-invalid'}`}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/^0/, '+33'))}
                            onFocus={() => setPhoneFocus(true)}
                            onBlur={() => setPhoneFocus(false)}
                        />
                        <label htmlFor="phone" className="form-label d-flex">Numéro de téléphone :</label>
                    </div>
                    <div id="telnote" className={phoneFocus && !validPhone ? 'instructions mt-2 alert alert-warning' : 'offscreen d-none'} role="alert">
                        <FontAwesomeIcon icon={faInfoCircle} />&nbsp;Le numéro de téléphone doit avoir le bon format.
                    </div>
                    <div className="form-floating mt-2">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="off"
                            placeholder="P@s5word"
                            required
                            className={`form-control ${!password ? '' : validPassword ? 'is-valid' : 'is-invalid'}`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                        />
                        <label htmlFor="password" className="form-label d-flex">Mot de passe :</label>
                    </div>
                    <div id="pwdnote" className={passwordFocus && !validPassword ? 'instructions mt-2 alert alert-warning' : 'offscreen d-none'} role="alert">
                        <FontAwesomeIcon icon={faInfoCircle} />&nbsp;Doit contenir au moins 8 caractères.<br />
                        Doit comporter au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.
                    </div>
                    <div className="form-floating mt-2">
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            autoComplete="off"
                            placeholder="P@s5word"
                            required
                            className={`form-control ${!confirmPassword ? '' : validConfirmPassword ? 'is-valid' : 'is-invalid'}`}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onFocus={() => setConfirmPasswordFocus(true)}
                            onBlur={() => setConfirmPasswordFocus(false)}
                        />
                        <label htmlFor="confirmPassword" className="form-label d-flex">Confirme mot de passe :</label>
                    </div>
                    <div id="confirmnote" className={confirmPasswordFocus && !validConfirmPassword ? 'instructions mt-2 alert alert-warning' : 'offscreen d-none'} role="alert">
                        <FontAwesomeIcon icon={faInfoCircle} />&nbsp;Les mots de passe doivent correspondre.
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="my-4 form-text text-primary">
                            <Link className="text-decoration-none" to={link}>{msg}</Link>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg mt-2"
                                disabled={!validName || !validEmail || !validPhone || !validPassword || !validConfirmPassword}
                            >
                                Valider
                            </button>
                        </div>
                    </div>
                </form>
                <div className={!success && errorMsg ? 'instructions mt-2 alert alert-danger' : 'offscreen d-none'} role="alert">
                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;{errorMsg}
                </div>
            </div>
        </div>
    );
};

export default Register;
