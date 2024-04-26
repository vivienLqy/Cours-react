import { useEffect, useState } from 'react';

function useValidation(value, setValue, type, matchValue) {
    const [isValid, setIsValid] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const regexes = {
        username: /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@&#$%]).{8,23}$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        phone: /^\+(?:\d{1,3})?\d{10,14}$/
    };

    useEffect(() => {
        if (type === 'confirmPassword') {
            setIsValid(value === matchValue);
        } else {
            setIsValid(regexes[type].test(value));
        }
    }, [value, type, matchValue]);

    // useEffect(()=>{
    //   const result = PasswordRegex.test(pwd);
    //   setValidPwd(result);
    //   const match = pwd === matchPwd;
    //   setValidMatch(match);
    // },[pwd, matchPwd])

    return {
        isValid,
        isFocused,
        bind: {
            value,
            onChange: e => setValue(type === 'phone' ? e.target.value.replace(/^0/, '+33') : e.target.value),
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
            className: !value ? "form-control" : isValid ? "is-valid form-control" : "is-invalid form-control",
            'aria-invalid': !isValid
        }
    };

}

export default useValidation;
