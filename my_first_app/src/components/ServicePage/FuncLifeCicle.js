import { useEffect, useState, useRef } from "react"

const FuncLifeCicle = () => {

    const [name, setName] = useState('');

    useEffect(() => {
        console.log('name : ', name);
    }, [name])

    const refName = useRef();

    const handleChanged = () => {
        setName(refName.current.value);
    }

    return (
        <div>
            <input type="text" ref={refName} name="name" onChange={handleChanged} />
        </div>
    );
};
export default FuncLifeCicle;

