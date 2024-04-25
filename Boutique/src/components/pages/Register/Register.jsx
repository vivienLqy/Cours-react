import useValidation from "../../customHook/useValidation";
import { Navigate, Link } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = ({ link, msg }) => {

    const { user, setUser } = useContext(UserContext)
    const [success, setSuccess] = useState(false)
    const [msgErr, setMsgErr] = useState('')

    const [userName, setUserName] = useState('');
    const { bind: bindUserName } = useValidation(userName, setUserName, 'username');

    const [email, setEmail] = useState('');
    const { bind: bindEmail } = useValidation(email, setEmail, 'email');

    const [phone, setPhone] = useState('');
    const { bind: bindPhone } = useValidation(phone, setPhone, 'phone');

    const [pwd, setPwd] = useState('');
    const { bind: bindPwd } = useValidation(pwd, setPwd, 'password');

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const userRef = useRef()

    useEffect(() => {
        userRef.current.focus();
    }, [])

    // useEffect(()=>{
    //   const result = PasswordRegex.test(pwd);
    //   setValidPwd(result);
    //   const match = pwd === matchPwd;
    //   setValidMatch(match);
    // },[pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const verif = validName && validPwd && validEmail && validPhone && validMatch
        if (verif) {
            setSuccess(true)
            setUser({ name: userName, email: email, phone: phone })
        } else {
            setSuccess(false)
            setMsgErr('Les informations saisies ne sont pas valide.')
        }
    }

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
                        <label htmlFor="userName" className="form-label d-flex">Nom d'utilisateur :
                        </label>
                    </div>
                    <div
                        id="uidnote"
                        className={isFocused && value && !isValid ? "instructions mt-2 alert alert-warning" : "offscreen d-none"}
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
                        <label htmlFor="email" className="form-label d-flex">Adresse mail :
                        </label>
                    </div>
                    {/* <div 
            id="emailnote"
            className={emailFocus && email && !validEmail ? "instructions mt-2 alert alert-warning" : "offscreen d-none"}
            role="alert"
          >
            <FontAwesomeIcon icon={faInfoCircle}/>
            &nbsp;L'adresse mail doit avoir le bon format.
          </div>  */}
                    <div className="form-floating mt-2">
                        <input
                            type="tel"
                            id="tel"
                            name="tel"
                            autoComplete="off"
                            placeholder="+33607080901"
                            required
                            {...bindPhone}
                        // className={!phone ? "form-control" : (validPhone ? "is-valid form-control" : "is-invalid form-control")}
                        // aria-invalid={validPhone?"false":"true"}
                        // onChange={(e)=>{
                        //   const newValue = e.target.value.replace(/^0/, '+33');
                        //   setPhone(newValue);
                        // }}
                        // onFocus={()=>setPhoneFocus(true)}
                        // onBlur={()=>setPhoneFocus(false)}
                        />
                        <label htmlFor="tel" className="form-label d-flex">Numéro de téléphone :
                        </label>
                    </div>
                    {/* <div 
            id="telnote"
            className={phoneFocus && phone && !validPhone ? "instructions mt-2 alert alert-warning" : "offscreen d-none"}
            role="alert"
          >
            <FontAwesomeIcon icon={faInfoCircle}/>
            &nbsp;Le numéro de téléphone doit avoir le bon format.'.
          </div>  */}
                    <div className="form-floating mt-2">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="off"
                            placeholder="P@s5word"
                            required
                            {...bindPwd}
                        // className={!pwd ? "form-control" : (validPwd ? "is-valid form-control" : "is-invalid form-control")}
                        // aria-invalid={validPwd?"false":"true"}
                        // onChange={(e)=>setPwd(e.target.value)}
                        // onFocus={()=>setPwdFocus(true)}
                        // onBlur={()=>setPwdFocus(false)}
                        />
                        <label htmlFor="password" className="form-label d-flex">Mot de passe :
                        </label>
                    </div>
                    {/* <div 
            id="pwdnote"
            className={pwdFocus && !validPwd ? "instructions mt-2 alert alert-warning" : "offscreen d-none"}
            role="alert"
          >
            <FontAwesomeIcon icon={faInfoCircle}/>
            &nbsp;Doit contenir au moins 8 caractères.<br/>
            Doit comporter au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.
          </div>   */}
                    <div className="form-floating mt-2">
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            autoComplete="off"
                            placeholder="P@s5word"
                            required
                            className={!matchPwd ? "form-control" : (validMatch ? "is-valid form-control" : "is-invalid form-control")}
                            aria-invalid={validMatch ? "false" : "true"}
                            onChange={(e) => setMatchPwd(e.target.value)}
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <label htmlFor="confirmPassword" className="form-label d-flex">Confirme mot de passe :
                        </label>
                    </div>
                    <div
                        id="confirmnote"
                        className={matchFocus && !validMatch ? "instructions mt-2 alert alert-warning" : "offscreen d-none"}
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
                            // disabled={!validName || !validPwd || !validEmail || !validPhone || !validMatch}
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