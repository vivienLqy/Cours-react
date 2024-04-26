import useValidation from "../../customHook/useValidation";
import { Navigate, Link } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = ({ link, msg }) => {
    const { user, setUser } = useContext(UserContext);
    const [success, setSuccess] = useState(false);
    const [msgErr, setMsgErr] = useState('');

    const [userName, setUserName] = useState('');
    const { isValid: userNameIsValid, isFocused: userNameIsFocused, bind: bindUserName } = useValidation(userName, setUserName, 'username');

    const [email, setEmail] = useState('');
    const { isValid: emailIsValid, isFocused: emailIsFocused, bind: bindEmail } = useValidation(email, setEmail, 'email');

    const [phone, setPhone] = useState('');
    const { isValid: phoneIsValid, isFocused: phoneIsFocused, bind: bindPhone } = useValidation(phone, setPhone, 'phone');

    const [pwd, setPwd] = useState('');
    const { isValid: pwdIsValid, isFocused: pwdIsFocused, bind: bindPwd } = useValidation(pwd, setPwd, 'password');

    const [matchPwd, setMatchPwd] = useState('');
    const { isValid: validMatch, bind: bindMatchPwd } = useValidation(matchPwd, setMatchPwd, 'confirmPassword', pwd);
    const [matchFocus, setMatchFocus] = useState(false);

    const userRef = useRef();

    useEffect(() => {
        userRef.current.focus();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const verif = userNameIsValid && emailIsValid && phoneIsValid && pwdIsValid && validMatch;
        if (verif) {
            setSuccess(true);
            setUser({ name: userName, email, phone });
        } else {
            setSuccess(false);
            setMsgErr('Les informations saisies ne sont pas valides.');
        }
    };

    return (
        <div className="card">
            {user && <Navigate to="/profil" replace={true} />}
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
                            ref={userRef}
                            {...bindUserName}
                        />
                        <label htmlFor="userName" className="form-label d-flex">Nom d'utilisateur :</label>
                    </div>
                    <div
                        id="uidnote"
                        className={userNameIsFocused && userName && !userNameIsValid ? "instructions mt-2 alert alert-warning" : "offscreen d-none"}
                        role="alert"
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        &nbsp;Entre 4 et 24 caractères.<br />
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
                            {...bindEmail}
                        />
                        <label htmlFor="email" className="form-label d-flex">Adresse mail :</label>
                        <div
                            id="uidnote"
                            className={emailIsFocused && email && !emailIsValid ? "instructions mt-2 alert alert-warning" : "offscreen d-none"}
                            role="alert"
                        >
                            <FontAwesomeIcon icon={faInfoCircle} />
                            &nbsp;Doit contenir une adresse valide<br />

                        </div>
                    </div>
                    <div className="form-floating mt-2">
                        <input
                            type="tel"
                            id="tel"
                            name="tel"
                            autoComplete="off"
                            placeholder="+33607080901"
                            required
                            {...bindPhone}
                        />
                        <label htmlFor="tel" className="form-label d-flex">Numéro de téléphone :</label>
                    </div>
                    <div
                        id="uidnote"
                        className={phoneIsFocused && phone && !phoneIsValid ? "instructions mt-2 alert alert-warning" : "offscreen d-none"}
                        role="alert"
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        &nbsp;10 chiffres minimum<br />

                    </div>
                    <div className="form-floating mt-2">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="off"
                            placeholder="P@s5word"
                            required
                            {...bindPwd}
                        />
                        <label htmlFor="password" className="form-label d-flex">Mot de passe :</label>
                    </div>
                    <div
                        id="uidnote"
                        className={pwdIsFocused && pwd && !pwdIsValid ? "instructions mt-2 alert alert-warning" : "offscreen d-none"}
                        role="alert"
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        &nbsp;Entre 8 et 23 caractères.<br />
                        Doit commencer par une lettre.<br />
                        Doit comporter au moins une lettre, un chiffre et un caractère spécial.
                    </div>
                    <div className="form-floating mt-2">
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            autoComplete="off"
                            placeholder="P@s5word"
                            required
                            {...bindMatchPwd}
                        />
                        <label htmlFor="confirmPassword" className="form-label d-flex">Confirme mot de passe :</label>
                    </div>
                    <div
                        id="confirmnote"
                        className={(matchFocus && !validMatch) || (!validMatch && matchPwd.length > 0) ? "instructions mt-2 alert alert-warning" : "offscreen d-none"}
                        role="alert"
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        &nbsp;Les mots de passe doivent correspondre.
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="my-4 form-text text-primary">
                            <Link className="text-decoration-none" to={link}>{msg}</Link>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg mt-2"
                            >Valider</button>
                        </div>
                    </div>
                </form>
                <div
                    className={!success && msgErr ? "instructions mt-2 alert alert-danger" : "offscreen d-none"}
                    role="alert"
                >
                    <FontAwesomeIcon icon={faInfoCircle} />{msgErr}
                </div>
            </div>
        </div>
    );
};

export default Register;
