import React, { useState, useRef, useEffect } from "react";

const Exercice = () => {
    const nameRegex = /^[a-zA-Z\- ]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [firstname, setFirstname] = useState('');
    const [validFirstname, setValidFirstname] = useState(false);
    const [lastname, setLastname] = useState('');
    const [validLastname, setValidLastname] = useState(false);
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);

    const firstnameRef = useRef(null);
    const lastnameRef = useRef(null);
    const emailRef = useRef(null);

    useEffect(() => {
        firstnameRef.current.focus();
    }, []);

    useEffect(() => {
        const result = emailRegex.test(email)
        setValidEmail(emailRegex.test(email))
    }, [email]);

    useEffect(() => {
        const result = nameRegex.test(firstname)
        setValidFirstname(nameRegex.test(firstname))
    }, [firstname]);

    useEffect(() => {
        const result = nameRegex.test(lastname)
        setValidLastname(nameRegex.test(lastname))
    }, [lastname]);


    const handleSubmit = (event) => {
        event.preventDefault();
        // Ajoute ici la logique pour traiter le formulaire soumis
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="col-10 mx-auto">
                <div className="form-floating mb-2">
                    <input
                        id="firstname"
                        className={`form-control ${firstname.length < 1 ? 'form-control' : validFirstname ? 'is-valid' : 'is-invalid'}`}
                        type="text"
                        name="firstname"
                        ref={firstnameRef}
                        value={firstname}
                        onChange={(event) => setFirstname(event.target.value)}
                    />
                    <label htmlFor="firstname" className="form-label d-flex">Prénom de l'utilisateur :</label>
                    <div className="invalid-feedback">
                        Veuillez entrer un prénom valide (au moins 2 caractères).
                    </div>
                </div>
                <div className="form-floating mb-2">
                    <input
                        id="lastname"
                        className={`form-control ${lastname.length < 1 ? 'form-control' : validLastname ? 'is-valid' : 'is-invalid'}`}
                        type="text"
                        name="lastname"
                        ref={lastnameRef}
                        value={lastname}
                        onChange={(event) => setLastname(event.target.value)}
                    />
                    <label htmlFor="lastname" className="form-label d-flex">Nom de l'utilisateur :</label>
                    <div className="invalid-feedback">
                        Veuillez entrer un nom valide (au moins 2 caractères).
                    </div>
                </div>
                <div className="form-floating mb-2">
                    <input
                        id="email"
                        className={`form-control ${email.length < 1 ? 'form-control' : validEmail ? 'is-valid' : 'is-invalid'}`}
                        type="email"
                        name="email"
                        ref={emailRef}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label htmlFor="email" className="form-label d-flex">Email de l'utilisateur :</label>
                    <div className="invalid-feedback">
                        Veuillez entrer une adresse email valide.
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="envoyer" />
            </form>
        </div>
    );
};

export default Exercice;
